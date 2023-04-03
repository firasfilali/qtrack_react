package com.eternal.wisdom.production.exception;

public class ProductionNotFoundException extends RuntimeException{
    public ProductionNotFoundException(String message) {
        super(message);
    }
}
