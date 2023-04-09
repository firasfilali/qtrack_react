package com.eternal.wisdom.production.exception;

public class ProcessOrderNotFoundException extends RuntimeException{
    public ProcessOrderNotFoundException(String message) {
        super(message);
    }
}
