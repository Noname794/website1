package com.websiteElectronics.websiteElectronics.Mapper;

import com.websiteElectronics.websiteElectronics.Dto.ElectronicsDto;
import com.websiteElectronics.websiteElectronics.Entity.Electronics;

public class ElectronicsMapper {

    public static ElectronicsDto mapToDto(Electronics electronics) {
        return new ElectronicsDto(
                electronics.getId(),
                electronics.getName(),
                electronics.getDescription(),
                electronics.getPrice(),
                electronics.getQuantity(),
                electronics.getImage_url(),
                electronics.getCategory(),
                electronics.getSupplier()
        );
    }

    public static Electronics mapToEntity(ElectronicsDto electronicsDto) {
        return new Electronics(
                electronicsDto.getId(),
                electronicsDto.getName(),
                electronicsDto.getDescription(),
                electronicsDto.getPrice(),
                electronicsDto.getQuantity(),
                electronicsDto.getImage_url(),
                electronicsDto.getCategory(),
                electronicsDto.getSupplier()
        );
    }

}
