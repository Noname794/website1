package com.websiteElectronics.websiteElectronics.Controllers;

import com.websiteElectronics.websiteElectronics.Dtos.OrderStatsDto;
import com.websiteElectronics.websiteElectronics.Dtos.OrdersDto;
import com.websiteElectronics.websiteElectronics.Services.OrdersService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
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

    @GetMapping("/export/excel")
    public void exportToExcel(HttpServletResponse response) throws IOException {
        response.setContentType("text/csv");
        response.setHeader("Content-Disposition", "attachment; filename=orders.xlsx");

        List<OrdersDto> orders = ordersService.getAllOrders();

        PrintWriter writer = response.getWriter();
        writer.println("Order ID, Customer ID, Payment Method ID, Shipping Method ID ,Order Date, Status, Total Amount");

        for (OrdersDto order : orders) {
            writer.println(
                    order.getId() + "," +
                            order.getCustomerId() + "," +
                            order.getPaymentMethodId() + "," +
                            order.getShippingMethodId() + "," +
                            order.getOrderDate() + "," +
                            order.getStatus() + "," +
                            order.getTotalAmount()
            );
        }

        writer.flush();
        writer.close();

    }
}
