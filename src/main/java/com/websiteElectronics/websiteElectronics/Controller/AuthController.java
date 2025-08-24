package com.websiteElectronics.websiteElectronics.Controller;

import com.websiteElectronics.websiteElectronics.Dto.RegisterRequest;
import com.websiteElectronics.websiteElectronics.Dto.LoginRequest;
import com.websiteElectronics.websiteElectronics.Dto.AuthResponse;
import com.websiteElectronics.websiteElectronics.Service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }
}
