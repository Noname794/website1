package com.websiteElectronics.websiteElectronics.Dtos;

import com.websiteElectronics.websiteElectronics.Entities.Products;
import com.websiteElectronics.websiteElectronics.Entities.Orders;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class OrderDetailsDto {
    private Integer id;

    @NotNull(message = "Order ID is required")
    private Orders orderId;

    @NotNull(message = "Product Id is required")
    private Products productId;

    @NotNull(message = "Quantity is required")
    @Size(min = 1, message = "Quantity must be at least 1")
    private Integer quantity;
}
