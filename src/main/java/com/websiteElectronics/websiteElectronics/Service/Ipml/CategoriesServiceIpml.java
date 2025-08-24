package com.websiteElectronics.websiteElectronics.Service.Ipml;

import com.websiteElectronics.websiteElectronics.Dto.CategoriesDto;
import com.websiteElectronics.websiteElectronics.Entity.Categories;
import com.websiteElectronics.websiteElectronics.Exception.CategoriesException;
import com.websiteElectronics.websiteElectronics.Mapper.CategoriesMapper;
import com.websiteElectronics.websiteElectronics.Repository.CategoriesRepository;
import com.websiteElectronics.websiteElectronics.Service.CategoriesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CategoriesServiceIpml implements CategoriesService {
    @Autowired
    private CategoriesRepository categoriesRepository;

    @Override
    public CategoriesDto createCategory(CategoriesDto categoryDto) {
        Categories category = CategoriesMapper.toEntity(categoryDto);
        Categories saved = categoriesRepository.save(category);
        return CategoriesMapper.toDto(saved);
    }

    @Override
    public CategoriesDto updateCategory(int id, CategoriesDto categoryDto) {
        Optional<Categories> optionalCategory = categoriesRepository.findById(id);
        if (optionalCategory.isEmpty()) {
            throw new CategoriesException("Category not found with id: " + id);
        }
        Categories category = optionalCategory.get();
        category.setName(categoryDto.getName());
        category.setDescription(categoryDto.getDescription());
        category.setParent_id(categoryDto.getParent_id());
        Categories updated = categoriesRepository.save(category);
        return CategoriesMapper.toDto(updated);
    }

    @Override
    public void deleteCategory(int id) {
        if (!categoriesRepository.existsById(id)) {
            throw new CategoriesException("Category not found with id: " + id);
        }
        categoriesRepository.deleteById(id);
    }

    @Override
    public CategoriesDto getCategoryById(int id) {
        Categories category = categoriesRepository.findById(id)
                .orElseThrow(() -> new CategoriesException("Category not found with id: " + id));
        return CategoriesMapper.toDto(category);
    }

    @Override
    public List<CategoriesDto> getAllCategories() {
        return categoriesRepository.findAll().stream()
                .map(CategoriesMapper::toDto)
                .collect(Collectors.toList());
    }
}
