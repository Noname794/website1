package com.websiteElectronics.websiteElectronics.Service.Ipml;

import com.websiteElectronics.websiteElectronics.Dto.OrdersDto;
import com.websiteElectronics.websiteElectronics.Entity.Orders;
import com.websiteElectronics.websiteElectronics.Exception.OrdersException;
import com.websiteElectronics.websiteElectronics.Mapper.OrdersMapper;
import com.websiteElectronics.websiteElectronics.Repository.OrdersRepository;
import com.websiteElectronics.websiteElectronics.Service.OrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OrdersServiceIpml implements OrdersService {
    @Autowired
    private OrdersRepository ordersRepository;

    @Override
    public OrdersDto createOrder(OrdersDto orderDto) {
        Orders order = OrdersMapper.toEntity(orderDto);
        Orders saved = ordersRepository.save(order);
        return OrdersMapper.toDto(saved);
    }

    @Override
    public OrdersDto updateOrder(int id, OrdersDto orderDto) {
        Optional<Orders> optionalOrder = ordersRepository.findById(id);
        if (optionalOrder.isEmpty()) {
            throw new OrdersException("Order not found with id: " + id);
        }
        Orders order = optionalOrder.get();
        order.setOrder_date(orderDto.getOrder_date());
        order.setStatus(orderDto.getStatus());
        order.setTotal_amount(orderDto.getTotal_amount());
        order.setCustomer(orderDto.getCustomer_id());
        order.setPaymentMethod(orderDto.getPayment_method_id());
        order.setShippingMethod(orderDto.getShipping_method_id());
        Orders updated = ordersRepository.save(order);
        return OrdersMapper.toDto(updated);
    }

    @Override
    public void deleteOrder(int id) {
        if (!ordersRepository.existsById(id)) {
            throw new OrdersException("Order not found with id: " + id);
        }
        ordersRepository.deleteById(id);
    }

    @Override
    public OrdersDto getOrderById(int id) {
        Orders order = ordersRepository.findById(id)
                .orElseThrow(() -> new OrdersException("Order not found with id: " + id));
        return OrdersMapper.toDto(order);
    }

    @Override
    public List<OrdersDto> getAllOrders() {
        return ordersRepository.findAll().stream()
                .map(OrdersMapper::toDto)
                .collect(Collectors.toList());
    }
}
