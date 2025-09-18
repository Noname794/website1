package com.websiteElectronics.websiteElectronics.Controllers;

import com.websiteElectronics.websiteElectronics.Dtos.OrderStatsDto;
import com.websiteElectronics.websiteElectronics.Dtos.OrdersDto;
import com.websiteElectronics.websiteElectronics.Services.OrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/orders")
public class OrdersController {

    private final OrdersService ordersService;

    @Autowired
    public OrdersController(OrdersService ordersService) {
        this.ordersService = ordersService;
    }

    @PostMapping
    public ResponseEntity<OrdersDto> createOrder(@Validated @RequestBody OrdersDto orderDto) {
        return ResponseEntity.ok(ordersService.createOrder(orderDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<OrdersDto> updateOrder(@PathVariable int id, @RequestBody OrdersDto orderDto) {
        return ResponseEntity.ok(ordersService.updateOrder(id, orderDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable int id) {
        ordersService.deleteOrder(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrdersDto> getOrderById(@PathVariable int id) {
        return ResponseEntity.ok(ordersService.getOrderById(id));
    }

    @GetMapping
    public ResponseEntity<List<OrdersDto>> getAllOrders() {
        return ResponseEntity.ok(ordersService.getAllOrders());
    }

    @GetMapping("/stats/{customerId}")
    public ResponseEntity<OrderStatsDto> getOrderStats(@PathVariable int customerId) {
        return ResponseEntity.ok(ordersService.getOrderStatsByCustomerId(customerId));
    }
}
