package com.example.spring.backend;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequiredArgsConstructor
@Slf4j
public class GreetingController {
    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
    private final WebClient forwardTokenClient;
    private final WebClient clientCredentialClient;

    @GetMapping("/greeting")
    @PreAuthorize("hasAuthority('default-roles-test-applikation')")
    public Greeting greeting(JwtAuthenticationToken authentication) {

        //Make a request by forwarding token
        forwardTokenClient.get()
                .uri("http://localhost:8090/greeting2")
                .retrieve()
                .bodyToMono(String.class)
                .block();

        //Make a request by client credential
        clientCredentialClient.get()
                .uri("http://localhost:8090/greeting2")
                .retrieve()
                .bodyToMono(String.class)
                .block();


        return new Greeting(counter.incrementAndGet(), String.format(template, authentication.getTokenAttributes().get("name")));
    }

    @GetMapping("/greeting2")
    public String greeting2(JwtAuthenticationToken authentication) {
        String user = authentication.getName();
        log.info("Got request from {}", user);
        return "Hi" + user;
    }
}
