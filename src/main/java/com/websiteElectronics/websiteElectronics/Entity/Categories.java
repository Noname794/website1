package com.websiteElectronics.websiteElectronics.Entity;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import jakarta.persistence.*;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "categories")
public class Categories {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id")
    private Integer id;  // đổi int -> Integer

    private String name;
    private String description;

    private Integer parent_id; // đổi int -> Integer

    @JsonCreator
    public Categories(Object id) {
        if (id instanceof Number) {
            this.id = ((Number) id).intValue();
        } else if (id instanceof String) {
            this.id = Integer.parseInt((String) id);
        } else {
            throw new IllegalArgumentException("Invalid category id: " + id);
        }
    }

    @JsonValue
    public Integer toValue() {
        return this.id;
    }
}
