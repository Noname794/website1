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
@Table(name = "suppliers")
public class Suppliers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "supplier_id")
    private int id;

    private String name;

    @Column(name = "contact_name")
    private String contactName;

    @Column(name = "contact_email")
    private String email;

    @Column(name = "contact_phone")
    private String phone;


    @JsonCreator
    public Suppliers(Object id) {
        if (id instanceof Number) {
            this.id = ((Number) id).intValue();
        } else if (id instanceof String) {
            this.id = Integer.parseInt((String) id);
        } else {
            throw new IllegalArgumentException("Invalid supplier id: " + id);
        }
    }


    @JsonValue
    public int toValue() {
        return this.id;
    }
}
