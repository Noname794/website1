package com.websiteElectronics.websiteElectronics.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Table(name = "Orders")
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    int id;
    Date order_date;
    String status;
    int total_amount;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    Customers customer;

    @ManyToOne(optional = false)
    @JoinColumn(name = "payment_method_id", nullable = false)
    PaymentMethods paymentMethod;

    @ManyToOne(optional = false)
    @JoinColumn(name = "shipping_method_id", nullable = false)
    ShippingMethods shippingMethod;

}
