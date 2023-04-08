package com.eternal.wisdom.production.model;

import lombok.Data;

import java.time.LocalDate;
import java.util.List;


@Data
public class Procedure {
    private Integer id;
    private String description;
    private List<String> reference;
    private LocalDate created_date;
    private LocalDate finish_date;

    private LocalDate updated_date;
    private User owner;
    private String status;
    private List<Process> process;



}
