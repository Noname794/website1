package com.websiteElectronics.websiteElectronics.Service;

import com.websiteElectronics.websiteElectronics.Dto.CustomersDto;
import java.util.List;

public interface CustomersService {
    CustomersDto createCustomer(CustomersDto customerDto);
    CustomersDto updateCustomer(int id, CustomersDto customerDto);
    void deleteCustomer(int id);
    CustomersDto getCustomerById(int id);
    List<CustomersDto> getAllCustomers();
}
