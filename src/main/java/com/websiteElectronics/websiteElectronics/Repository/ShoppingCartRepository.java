package com.websiteElectronics.websiteElectronics.Repository;

import com.websiteElectronics.websiteElectronics.Entity.ShoppingCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShoppingCartRepository extends JpaRepository<ShoppingCart, Integer> {

    List<ShoppingCart> findByCustomer_Id(Integer customerId);
}
