package com.websiteElectronics.websiteElectronics.Dto;

import com.websiteElectronics.websiteElectronics.Entity.Customers;
import com.websiteElectronics.websiteElectronics.Entity.PaymentMethods;
import com.websiteElectronics.websiteElectronics.Entity.ShippingMethods;
import java.util.Date;

public class OrdersDto {
    private int id;
    private Date order_date;
    private String status;
    private int total_amount;
    private Customers customer_id;
    private PaymentMethods payment_method_id;
    private ShippingMethods shipping_method_id;

    public OrdersDto() {}

    public OrdersDto(int id, Date order_date, String status, int total_amount, Customers customer_id, PaymentMethods payment_method_id, ShippingMethods shipping_method_id) {
        this.id = id;
        this.order_date = order_date;
        this.status = status;
        this.total_amount = total_amount;
        this.customer_id = customer_id;
        this.payment_method_id = payment_method_id;
        this.shipping_method_id = shipping_method_id;
    }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public Date getOrder_date() { return order_date; }
    public void setOrder_date(Date order_date) { this.order_date = order_date; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public int getTotal_amount() { return total_amount; }
    public void setTotal_amount(int total_amount) { this.total_amount = total_amount; }
    public Customers getCustomer_id() { return customer_id; }
    public void setCustomer_id(Customers customer_id) { this.customer_id = customer_id; }
    public PaymentMethods getPayment_method_id() { return payment_method_id; }
    public void setPayment_method_id(PaymentMethods payment_method_id) { this.payment_method_id = payment_method_id; }
    public ShippingMethods getShipping_method_id() { return shipping_method_id; }
    public void setShipping_method_id(ShippingMethods shipping_method_id) { this.shipping_method_id = shipping_method_id; }
}
