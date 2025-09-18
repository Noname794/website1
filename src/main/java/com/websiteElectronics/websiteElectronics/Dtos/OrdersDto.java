package com.websiteElectronics.websiteElectronics.Dtos;

import com.websiteElectronics.websiteElectronics.Entities.Customers;
import com.websiteElectronics.websiteElectronics.Entities.PaymentMethods;
import com.websiteElectronics.websiteElectronics.Entities.ShippingMethods;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrdersDto {
    private int id;
    private Date orderDate;
    private String status;
    private int totalAmount;
    private Customers customerId;
    private PaymentMethods paymentMethodId;
    private ShippingMethods shippingMethodId;

}
