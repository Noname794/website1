package com.websiteElectronics.websiteElectronics.Dto;

import com.websiteElectronics.websiteElectronics.Entity.Customers;
import com.websiteElectronics.websiteElectronics.Entity.Electronics;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ShoppingCartDto {

    private Integer id;
    private Integer customer_id;
    private Integer product_id;
    private int quantity;
    private Date created_at;
}
