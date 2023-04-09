package com.eternal.wisdom.production.model;

import lombok.Data;

import java.util.List;

@Data
public class User {
    private Integer id;
    private String firstName;
    private String lastName;
    private List<String> reference;
    private String role;


}
