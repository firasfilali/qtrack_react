package com.eternal.wisdom.production.model;

import lombok.Data;

import java.time.LocalDate;

@Data
public class ProcedureByProcess {
    private String procedureId;
    private String processId;
    private String description;
    private LocalDate created_date;
    private LocalDate finish_date;
    private User owner;
    private String status;
    private Process process;
}
