package com.websiteElectronics.websiteElectronics.Controller;


import com.websiteElectronics.websiteElectronics.Dto.ShoppingCartDto;
import com.websiteElectronics.websiteElectronics.Service.ShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/shoppingCart")
public class ShoppingCartController {
    @Autowired
    ShoppingCartService shoppingCartService;

    @GetMapping
    public ResponseEntity<List<ShoppingCartDto>> getAllShoppingCarts() {
        return ResponseEntity.ok(shoppingCartService.getAllShoppingCarts());
    }

    @PostMapping("/createCart")
    public ResponseEntity<ShoppingCartDto> createShoppingCart(@RequestBody ShoppingCartDto shoppingCartDto) {
        return ResponseEntity.ok(shoppingCartService.createShoppingCart(shoppingCartDto));
    }

    @PutMapping("/updateCart/{id}")
    public ResponseEntity<ShoppingCartDto> updateShoppingCart(@PathVariable int id,@RequestBody ShoppingCartDto shoppingCartDto) {
        return ResponseEntity.ok(shoppingCartService.updateShoppingCart(id, shoppingCartDto));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ShoppingCartDto> getShoppingCartById(@PathVariable int id) {
        return ResponseEntity.ok(shoppingCartService.getShoppingCartById(id));
    }

    @GetMapping("/customer/{customerId}")
    public ResponseEntity<List<ShoppingCartDto>> getShoppingCartByCustomerId(@PathVariable int customerId) {
        List<ShoppingCartDto> dtos = shoppingCartService.getShoppingCartByCustomerId(customerId);
        if (dtos == null || dtos.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(dtos);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteShoppingCart(@PathVariable int id) {
        shoppingCartService.deleteShoppingCart(id);
        return ResponseEntity.noContent().build();
    }

}
