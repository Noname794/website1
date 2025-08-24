package com.websiteElectronics.websiteElectronics.Dto;

public class CategoriesDto {
    private Integer id;           // đổi int -> Integer
    private String name;
    private String description;
    private Integer parent_id;    // đổi int -> Integer

    public CategoriesDto() {
    }

    public CategoriesDto(Integer id, String name, String description, Integer parent_id) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.parent_id = parent_id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getParent_id() {
        return parent_id;
    }

    public void setParent_id(Integer parent_id) {
        this.parent_id = parent_id;
    }
}
