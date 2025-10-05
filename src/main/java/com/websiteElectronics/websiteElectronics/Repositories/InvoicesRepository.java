package com.websiteElectronics.websiteElectronics.Repositories;

 import com.websiteElectronics.websiteElectronics.Collections.Invoices;
 import org.springframework.data.mongodb.repository.MongoRepository;
 import org.springframework.stereotype.Repository;

 import java.util.List;
 import java.util.Optional;

 @Repository
 public interface InvoicesRepository extends MongoRepository<Invoices, String> {

     Optional<Invoices> findByOrderId(Long orderId);

     List<Invoices> findByCustomerId(Long customerId);

     boolean existsByOrderId(Long orderId);
 }
