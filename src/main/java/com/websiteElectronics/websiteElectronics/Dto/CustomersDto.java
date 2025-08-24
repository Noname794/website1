package com.websiteElectronics.websiteElectronics.Dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomersDto {
    private int id;
    private String first_name;
    private String last_name;
    private String email;
    private String password;
    private String phone_number;
    private String address;
    private String city;
    private String state;
    private String zip_core;
    private String country;


}
