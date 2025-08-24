package com.websiteElectronics.websiteElectronics.Mapper;

import com.websiteElectronics.websiteElectronics.Dto.CustomersDto;
import com.websiteElectronics.websiteElectronics.Entity.Customers;

public class CustomersMapper {
    public static CustomersDto toDto(Customers customer) {
        if (customer == null) return null;
        return new CustomersDto(
                customer.getId(),
                customer.getFirstName(),
                customer.getLastName(),
                customer.getEmail(),
                customer.getPassword(),
                customer.getPhoneNumber(),
                customer.getAddress(),
                customer.getCity(),
                customer.getState(),
                customer.getZipCode(),
                customer.getCountry()
        );
    }

    public static Customers toEntity(CustomersDto dto) {
        if (dto == null) return null;
        Customers entity = new Customers();
        entity.setId(dto.getId());
        entity.setFirstName(dto.getFirst_name());
        entity.setLastName(dto.getLast_name());
        entity.setEmail(dto.getEmail());
        entity.setPassword(dto.getPassword());
        entity.setPhoneNumber(dto.getPhone_number());
        entity.setAddress(dto.getAddress());
        entity.setCity(dto.getCity());
        entity.setState(dto.getState());
        entity.setZipCode(dto.getZip_core());
        entity.setCountry(dto.getCountry());
        return entity;
    }
}
