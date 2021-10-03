package com.example.adoptujmnieprototype;

import pet.PetController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackageClasses= PetController.class)
public class AdoptujMniePrototypeApplication {

    public static void main(String[] args) {
        SpringApplication.run(AdoptujMniePrototypeApplication.class, args);
    }

}
