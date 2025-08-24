package com.websiteElectronics.websiteElectronics.Dto;

import com.websiteElectronics.websiteElectronics.Entity.Categories;
import com.websiteElectronics.websiteElectronics.Entity.Suppliers;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class ElectronicsDto {

    private int id;
    private String name;
    private String description;
    private int price;

    private int quantity;
    private String image_url;

    private Categories category;

    private Suppliers supplier;

}
