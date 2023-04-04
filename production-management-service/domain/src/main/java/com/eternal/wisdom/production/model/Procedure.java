package com.eternal.wisdom.production.model;

import lombok.Data;

import java.time.LocalDate;


@Data
public class Procedure {
    private String id;
    private String description;
    private LocalDate created_date;
    private LocalDate updated_date;
    private User owner;
    private String status;
    private Process process;



}
