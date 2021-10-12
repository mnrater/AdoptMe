package com.example.adoptujmnieprototype;

import account.AccountController;
import pet.PetController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import shelter.ShelterController;

@SpringBootApplication
@ComponentScan(basePackageClasses= PetController.class)
@ComponentScan(basePackageClasses= AccountController.class)
@ComponentScan(basePackageClasses= ShelterController.class)
public class AdoptujMniePrototypeApplication {

    public static void main(String[] args) {
        SpringApplication.run(AdoptujMniePrototypeApplication.class, args);
    }

}
