package com.websiteElectronics.websiteElectronics.Mapper;

import com.websiteElectronics.websiteElectronics.Dto.OrdersDto;
import com.websiteElectronics.websiteElectronics.Entity.Orders;

public class OrdersMapper {
    public static OrdersDto toDto(Orders order) {
        if (order == null) return null;
        return new OrdersDto(
                order.getId(),
                order.getOrder_date(),
                order.getStatus(),
                order.getTotal_amount(),
                order.getCustomer(),
                order.getPaymentMethod(),
                order.getShippingMethod()
        );
    }

    public static Orders toEntity(OrdersDto dto) {
        if (dto == null) return null;
        Orders entity = new Orders();
        entity.setId(dto.getId());
        entity.setOrder_date(dto.getOrder_date());
        entity.setStatus(dto.getStatus());
        entity.setTotal_amount(dto.getTotal_amount());
        entity.setCustomer(dto.getCustomer_id());
        entity.setPaymentMethod(dto.getPayment_method_id());
        entity.setShippingMethod(dto.getShipping_method_id());
        return entity;
    }
}
