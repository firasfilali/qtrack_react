package com.eternal.wisdom.production;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.eternal.wisdom.production")
public class ProductionManagementApplication {
    public static void main(String[] args) {
        SpringApplication.run(ProductionManagementApplication.class, args);
    }
}