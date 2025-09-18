package com.websiteElectronics.websiteElectronics.Dtos;


import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
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

}
