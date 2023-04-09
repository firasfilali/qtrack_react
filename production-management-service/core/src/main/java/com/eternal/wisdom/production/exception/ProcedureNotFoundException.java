package com.eternal.wisdom.production.exception;

public class ProcedureNotFoundException extends RuntimeException{
    public ProcedureNotFoundException(String message) {
        super(message);
    }
}
