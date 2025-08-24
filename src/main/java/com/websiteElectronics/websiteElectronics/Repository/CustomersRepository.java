package com.websiteElectronics.websiteElectronics.Repository;

import com.websiteElectronics.websiteElectronics.Entity.Customers;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface CustomersRepository extends JpaRepository<Customers, Integer> {
    Optional<Customers> findByEmail(String email);
}
