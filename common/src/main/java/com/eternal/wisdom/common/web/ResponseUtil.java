package com.eternal.wisdom.common.web;

import com.eternal.wisdom.common.web.response.ResponseRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.server.ResponseStatusException;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Objects;
import java.util.Optional;

public class ResponseUtil {

    public static ResponseEntity<ResponseRequest> newEntityCreated(String applicationName, ResponseRequest responseRequest, String uri, String entityName) throws URISyntaxException {
        if (Objects.isNull(responseRequest)) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
        } else {
            return ResponseEntity
                    .created(new URI(uri + entityName + responseRequest.getId()))
                    .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, entityName, responseRequest.getId().toString()))
                    .body(responseRequest);
        }
    }

    public static <X> ResponseEntity<X> wrapOrNotFound(X response) {
        return wrapOrNotFound(response, null);
    }

    public static <X> ResponseEntity<X> wrapOrNotFound(X response, HttpHeaders header) {
        return Optional.ofNullable(response).map(res -> ResponseEntity.ok().headers(header).body(res))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }
}
