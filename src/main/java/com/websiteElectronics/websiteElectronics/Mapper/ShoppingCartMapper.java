package com.websiteElectronics.websiteElectronics.Mapper;

import com.websiteElectronics.websiteElectronics.Dto.ShoppingCartDto;
import com.websiteElectronics.websiteElectronics.Entity.Customers;
import com.websiteElectronics.websiteElectronics.Entity.Electronics;
import com.websiteElectronics.websiteElectronics.Entity.ShoppingCart;

public class ShoppingCartMapper {

    public static ShoppingCartDto mapToDto(ShoppingCart shoppingCart) {
        return new ShoppingCartDto(
                shoppingCart.getId(),
                shoppingCart.getCustomer() != null ? shoppingCart.getCustomer().getId() : null,
                shoppingCart.getProduct() != null ? shoppingCart.getProduct().getId() : null,
                shoppingCart.getQuantity(),
                shoppingCart.getCreated_at()
        );
    }


    public static ShoppingCart mapToEntity(ShoppingCartDto shoppingCartDto) {
        ShoppingCart cart = new ShoppingCart();
        cart.setId(shoppingCartDto.getId());
        cart.setQuantity(shoppingCartDto.getQuantity());
        cart.setCreated_at(shoppingCartDto.getCreated_at());
        return cart;
    }
}
