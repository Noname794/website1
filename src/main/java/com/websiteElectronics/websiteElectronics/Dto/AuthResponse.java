package com.websiteElectronics.websiteElectronics.Dto;

public class AuthResponse {
    private String message;
    private String token;
    private Integer customerId;

    public AuthResponse(String message, String token) {
        this.message = message;
        this.token = token;
    }
    public AuthResponse(String message, String token, Integer customerId) {
        this.message = message;
        this.token = token;
        this.customerId = customerId;
    }
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
    public String getToken() { return token; }
    public void setToken(String token) { this.token = token; }
    public Integer getCustomerId() { return customerId; }
    public void setCustomerId(Integer customerId) { this.customerId = customerId; }
}
