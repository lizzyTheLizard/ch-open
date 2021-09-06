#!/bin/bash

docker run \
	-e KEYCLOAK_USER=admin \
	-e KEYCLOAK_PASSWORD=admin \
	-e KEYCLOAK_IMPORT=/tmp/example-realm.json \
	-v $PWD/realm-export.json:/tmp/example-realm.json \
	-p 8080:8080 \
	jboss/keycloak
