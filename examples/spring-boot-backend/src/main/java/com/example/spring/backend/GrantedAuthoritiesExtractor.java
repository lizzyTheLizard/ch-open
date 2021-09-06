package com.example.spring.backend;

import org.springframework.core.convert.converter.Converter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;

import java.util.Collection;
import java.util.Map;
import java.util.stream.Collectors;

public class GrantedAuthoritiesExtractor implements Converter<Jwt, Collection<GrantedAuthority>> {
    public Collection<GrantedAuthority> convert(Jwt jwt) {
        Collection<String> authorities = (Collection<String>) ((Map<String, Object>) jwt.getClaims().get("realm_access")).get("roles");
        return authorities.stream()
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
    }

}
