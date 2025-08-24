package com.websiteElectronics.websiteElectronics.Service.Ipml;

import com.websiteElectronics.websiteElectronics.Dto.ShoppingCartDto;
import com.websiteElectronics.websiteElectronics.Entity.Customers;
import com.websiteElectronics.websiteElectronics.Entity.Electronics;
import com.websiteElectronics.websiteElectronics.Entity.ShoppingCart;
import com.websiteElectronics.websiteElectronics.Mapper.ShoppingCartMapper;
import com.websiteElectronics.websiteElectronics.Repository.CustomersRepository;
import com.websiteElectronics.websiteElectronics.Repository.ElectronicsRepositorys;
import com.websiteElectronics.websiteElectronics.Repository.ShoppingCartRepository;
import com.websiteElectronics.websiteElectronics.Service.ShoppingCartService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class ShoppingCartServiceIpml implements ShoppingCartService {

    private final ShoppingCartRepository shoppingCartRepository;
    private final CustomersRepository customersRepository;
    private final ElectronicsRepositorys electronicsRepositorys;

    @Override
    public ShoppingCartDto createShoppingCart(ShoppingCartDto shoppingCartDto) {
        ShoppingCart shoppingCart = ShoppingCartMapper.mapToEntity(shoppingCartDto);
        ShoppingCart savedShoppingCart = shoppingCartRepository.save(shoppingCart);
        return ShoppingCartMapper.mapToDto(savedShoppingCart);
    }

    @Override
    public ShoppingCartDto updateShoppingCart(int id, ShoppingCartDto shoppingCartDto) {
        ShoppingCart findShoppingCart = shoppingCartRepository.findById(id).orElseThrow(() -> new RuntimeException("Could not find shopping cart with id: " + id));
        Customers customer = customersRepository.findById(shoppingCartDto.getCustomer_id())
                .orElseThrow(() -> new RuntimeException("Customer not found: " + shoppingCartDto.getCustomer_id()));
        Electronics product = electronicsRepositorys.findById(shoppingCartDto.getProduct_id())
                .orElseThrow(() -> new RuntimeException("Product not found: " + shoppingCartDto.getProduct_id()));
        findShoppingCart.setCustomer(customer);
        findShoppingCart.setProduct(product);
        findShoppingCart.setQuantity(shoppingCartDto.getQuantity());
        findShoppingCart.setCreated_at(shoppingCartDto.getCreated_at());
        ShoppingCart savedShoppingCart = shoppingCartRepository.save(findShoppingCart);
        return ShoppingCartMapper.mapToDto(savedShoppingCart);
    }

    @Override
    public ShoppingCartDto getShoppingCartById(int id) {
        ShoppingCart findShoppingCart = shoppingCartRepository.findById(id).orElseThrow(() -> new RuntimeException("Could not find shopping cart with id: " + id));
        return ShoppingCartMapper.mapToDto(findShoppingCart);
    }

    @Override
    public List<ShoppingCartDto> getAllShoppingCarts() {
        List<ShoppingCart> getAllShoppingCarts = shoppingCartRepository.findAll();
        return getAllShoppingCarts.stream().map(ShoppingCartMapper::mapToDto).collect(Collectors.toList());
    }

    @Override
    public void deleteShoppingCart(int id) {
        shoppingCartRepository.deleteById(id);
    }

    @Override
    public List<ShoppingCartDto> getShoppingCartByCustomerId(int customerId) {
        List<ShoppingCart> carts = shoppingCartRepository.findByCustomer_Id(customerId);
        List<ShoppingCartDto> dtos = new ArrayList<>();
        if (carts != null) {
            for (ShoppingCart cart : carts) {
                ShoppingCartDto dto = new ShoppingCartDto();
                dto.setId(cart.getId());
                dto.setCustomer_id(cart.getCustomer().getId());
                dto.setProduct_id(cart.getProduct().getId());
                dto.setQuantity(cart.getQuantity());
                dto.setCreated_at(cart.getCreated_at());
                dtos.add(dto);
            }
        }
        return dtos;
    }
}
