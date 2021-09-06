package com.example.spring.backend;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.atomic.AtomicLong;

@RestController
@Slf4j
public class GreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/greeting")
    @PreAuthorize("hasAuthority('default-roles-test-applikation')")
    public Greeting greeting(@CurrentSecurityContext(expression = "authentication")
                                     Authentication authentication) {
        log.info(authentication.toString());
        return new Greeting(counter.incrementAndGet(), String.format(template, authentication.getName()));
    }
}
