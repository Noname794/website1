package com.websiteElectronics.websiteElectronics.Repository;

import com.websiteElectronics.websiteElectronics.Entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrdersRepository extends JpaRepository<Orders, Integer> {
}
