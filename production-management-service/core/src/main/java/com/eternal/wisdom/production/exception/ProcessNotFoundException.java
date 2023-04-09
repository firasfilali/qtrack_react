package com.eternal.wisdom.production.exception;

public class ProcessNotFoundException extends RuntimeException{
    public ProcessNotFoundException(String message) {
        super(message);
    }
}
