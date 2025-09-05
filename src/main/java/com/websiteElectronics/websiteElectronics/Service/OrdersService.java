package com.websiteElectronics.websiteElectronics.Service;

import com.websiteElectronics.websiteElectronics.Dto.OrderStatsDto;
import com.websiteElectronics.websiteElectronics.Dto.OrdersDto;
import java.util.List;

public interface OrdersService {
    OrdersDto createOrder(OrdersDto orderDto);
    OrdersDto updateOrder(int id, OrdersDto orderDto);
    void deleteOrder(int id);
    OrdersDto getOrderById(int id);
    List<OrdersDto> getAllOrders();
    OrderStatsDto getOrderStatsByCustomerId(int customerId);
}
