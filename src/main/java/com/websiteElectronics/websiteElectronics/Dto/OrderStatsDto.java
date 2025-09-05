package com.websiteElectronics.websiteElectronics.Dto;

public class OrderStatsDto {
    private Long totalOrders;
    private Double totalAmountSpent;

    public OrderStatsDto() {
    }

    public OrderStatsDto(Long totalOrders, Double totalAmountSpent) {
        this.totalOrders = totalOrders;
        this.totalAmountSpent = totalAmountSpent;
    }

    public Long getTotalOrders() {
        return totalOrders;
    }

    public void setTotalOrders(Long totalOrders) {
        this.totalOrders = totalOrders;
    }

    public Double getTotalAmountSpent() {
        return totalAmountSpent;
    }

    public void setTotalAmountSpent(Double totalAmountSpent) {
        this.totalAmountSpent = totalAmountSpent;
    }
}
