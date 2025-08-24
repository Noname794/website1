package com.websiteElectronics.websiteElectronics.Controller;

import com.websiteElectronics.websiteElectronics.Dto.CategoriesDto;
import com.websiteElectronics.websiteElectronics.Service.CategoriesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/categories")
public class CategoriesController {
    @Autowired
    private CategoriesService categoriesService;

    @PostMapping
    public ResponseEntity<CategoriesDto> createCategory(@RequestBody CategoriesDto categoryDto) {
        return ResponseEntity.ok(categoriesService.createCategory(categoryDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<CategoriesDto> updateCategory(@PathVariable int id, @RequestBody CategoriesDto categoryDto) {
        return ResponseEntity.ok(categoriesService.updateCategory(id, categoryDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable int id) {
        categoriesService.deleteCategory(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CategoriesDto> getCategoryById(@PathVariable int id) {
        return ResponseEntity.ok(categoriesService.getCategoryById(id));
    }

    @GetMapping
    public ResponseEntity<List<CategoriesDto>> getAllCategories() {
        return ResponseEntity.ok(categoriesService.getAllCategories());
    }
}
