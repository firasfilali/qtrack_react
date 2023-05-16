package com.eternal.wisdom.production.model;

import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class ProcessOrderItem {
    private Integer id;
    private String productId;
    private Integer quantity;
    private String description;
    private List<String> reference;
    private LocalDate created_date;
    private User owner;
    private String status;
    private Process process;


}