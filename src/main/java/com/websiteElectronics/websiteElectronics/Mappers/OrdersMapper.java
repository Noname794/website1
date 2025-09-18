package com.websiteElectronics.websiteElectronics.Mappers;

import com.websiteElectronics.websiteElectronics.Dtos.OrdersDto;
import com.websiteElectronics.websiteElectronics.Entities.Orders;

public class OrdersMapper {
    public static OrdersDto toDto(Orders order) {
        if (order == null) return null;
        return new OrdersDto(
                order.getId(),
                order.getOrderDate(),
                order.getStatus(),
                order.getTotalAmount(),
                order.getCustomer(),
                order.getPaymentMethod(),
                order.getShippingMethod()
        );
    }

    public static Orders toEntity(OrdersDto dto) {
        if (dto == null) return null;
        Orders entity = new Orders();
        entity.setId(dto.getId());
        entity.setOrderDate(dto.getOrderDate());
        entity.setStatus(dto.getStatus());
        entity.setTotalAmount(dto.getTotalAmount());
        entity.setCustomer(dto.getCustomerId());
        entity.setPaymentMethod(dto.getPaymentMethodId());
        entity.setShippingMethod(dto.getShippingMethodId());
        return entity;
    }
}
