package com.websiteElectronics.websiteElectronics.Mapper;

import com.websiteElectronics.websiteElectronics.Dto.CategoriesDto;
import com.websiteElectronics.websiteElectronics.Entity.Categories;

public class CategoriesMapper {
    public static CategoriesDto toDto(Categories category) {
        if (category == null) return null;
        return new CategoriesDto(
                category.getId(),
                category.getName(),
                category.getDescription(),
                category.getParent_id()
        );
    }

    public static Categories toEntity(CategoriesDto dto) {
        if (dto == null) return null;
        return new Categories(
                dto.getId(),
                dto.getName(),
                dto.getDescription(),
                dto.getParent_id()
        );
    }
}
