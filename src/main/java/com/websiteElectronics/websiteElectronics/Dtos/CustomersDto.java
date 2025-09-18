package com.websiteElectronics.websiteElectronics.Dtos;


import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomersDto {
    private int id;

    @NotNull(message = "First name is required")
    @Size(min = 3, message = "First name must be at least 2 characters")
    private String firstName;

    @NotNull(message = "Last name is required")
    @Size(min = 3, message = "Last name must be at least 2 characters")
    private String lastName;

    @NotNull(message = "Email is required")
    private String email;

    @NotNull(message = "Password is required")
    @Size(min = 6, message = "Password must be at least 6 characters long")
    private String password;


    private String phoneNumber;
    private String address;
    private String city;
    private String state;
    private String zipCore;
    private String country;


}
