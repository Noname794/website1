package com.websiteElectronics.websiteElectronics.Controllers;

import com.websiteElectronics.websiteElectronics.Dtos.CustomersDto;
import com.websiteElectronics.websiteElectronics.Services.CustomersService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/customers")
public class CustomersController {

    private final CustomersService customersService;

    @Autowired
    public CustomersController(CustomersService customersService) {
        this.customersService = customersService;
    }

    @PostMapping
    public ResponseEntity<CustomersDto> createCustomer(@RequestBody CustomersDto customerDto) {
        return ResponseEntity.ok(customersService.createCustomer(customerDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<CustomersDto> updateCustomer(@PathVariable int id, @RequestBody CustomersDto customerDto) {
        return ResponseEntity.ok(customersService.updateCustomer(id, customerDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable int id) {
        customersService.deleteCustomer(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CustomersDto> getCustomerById(@PathVariable int id) {
        return ResponseEntity.ok(customersService.getCustomerById(id));
    }

    @GetMapping
    public ResponseEntity<List<CustomersDto>> getAllCustomers() {
        return ResponseEntity.ok(customersService.getAllCustomers());
    }

    @GetMapping("export/excel")
    public void exportToExcel(HttpServletResponse response) throws IOException {
        response.setContentType("text/csv");
        response.setHeader("Content-Disposition", "attachment; filename=customers.xlsx");

        List<CustomersDto> customers = customersService.getAllCustomers();

        PrintWriter writer = response.getWriter();
        writer.println("Customer ID, First Name, Last Name, Email, Phone Number");

        for(CustomersDto customer : customers){
            writer.println(
                    customer.getId() + "," +
                            customer.getFirstName() + "," +
                            customer.getLastName() + "," +
                            customer.getEmail() + "," +
                            customer.getPhoneNumber()
            );
        }

        writer.flush();
        writer.close();
    }
}
