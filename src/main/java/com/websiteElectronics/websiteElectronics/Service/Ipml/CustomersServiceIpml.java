package com.websiteElectronics.websiteElectronics.Service.Ipml;

import com.websiteElectronics.websiteElectronics.Dto.CustomersDto;
import com.websiteElectronics.websiteElectronics.Entity.Customers;
import com.websiteElectronics.websiteElectronics.Exception.CustomersException;
import com.websiteElectronics.websiteElectronics.Mapper.CustomersMapper;
import com.websiteElectronics.websiteElectronics.Repository.CustomersRepository;
import com.websiteElectronics.websiteElectronics.Service.CustomersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CustomersServiceIpml implements CustomersService {
    @Autowired
    private CustomersRepository customersRepository;

    @Override
    public CustomersDto createCustomer(CustomersDto customerDto) {
        Customers customer = CustomersMapper.toEntity(customerDto);
        Customers saved = customersRepository.save(customer);
        return CustomersMapper.toDto(saved);
    }

    @Override
    public CustomersDto updateCustomer(int id, CustomersDto customerDto) {
        Optional<Customers> optionalCustomer = customersRepository.findById(id);
        if (optionalCustomer.isEmpty()) {
            throw new CustomersException("Customer not found with id: " + id);
        }
        Customers customer = optionalCustomer.get();
        customer.setFirstName(customerDto.getFirst_name());
        customer.setLastName(customerDto.getLast_name());
        customer.setEmail(customerDto.getEmail());
        customer.setPassword(customerDto.getPassword());
        customer.setPhoneNumber(customerDto.getPhone_number());
        customer.setAddress(customerDto.getAddress());
        customer.setCity(customerDto.getCity());
        customer.setState(customerDto.getState());
        customer.setZipCode(customerDto.getZip_core());
        customer.setCountry(customerDto.getCountry());
        Customers updated = customersRepository.save(customer);
        return CustomersMapper.toDto(updated);
    }

    @Override
    public void deleteCustomer(int id) {
        if (!customersRepository.existsById(id)) {
            throw new CustomersException("Customer not found with id: " + id);
        }
        customersRepository.deleteById(id);
    }

    @Override
    public CustomersDto getCustomerById(int id) {
        Customers customer = customersRepository.findById(id)
                .orElseThrow(() -> new CustomersException("Customer not found with id: " + id));
        return CustomersMapper.toDto(customer);
    }

    @Override
    public List<CustomersDto> getAllCustomers() {
        return customersRepository.findAll().stream()
                .map(CustomersMapper::toDto)
                .collect(Collectors.toList());
    }
}
