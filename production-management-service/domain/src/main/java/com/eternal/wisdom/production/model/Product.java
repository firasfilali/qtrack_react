package com.eternal.wisdom.production.model;

import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class Product {
    private Integer id;
    private String name;
    private String description;
    private String reference;
    private LocalDate created_date;
    private LocalDate updated_date;
    private String status;
    private User owner;
    private String rawMaterial;
    private List<Procedure> procedures;

}
