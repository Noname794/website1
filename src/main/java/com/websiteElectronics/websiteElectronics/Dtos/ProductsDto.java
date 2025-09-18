package com.websiteElectronics.websiteElectronics.Dtos;

import com.websiteElectronics.websiteElectronics.Entities.Categories;
import com.websiteElectronics.websiteElectronics.Entities.Suppliers;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductsDto {

    private int id;

    @NotNull(message = "Name is required")
    @Size(min = 5, message = "Name must be at least 5 characters")
    private String name;

    @NotNull(message = "Description is required")
    private String description;

    @NotNull(message = "Price is required")
    private int price;

    @NotNull(message = "Quantity is required")
    private int quantity;

    @NotNull(message = "ImageUrl is required")
    private String imageUrl;

    @NotNull(message = "Category is required")
    private Categories category;

    @NotNull(message = "Supplier is required")
    private Suppliers supplier;

}
