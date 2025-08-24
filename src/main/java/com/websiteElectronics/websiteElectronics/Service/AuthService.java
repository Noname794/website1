package com.websiteElectronics.websiteElectronics.Service;

import com.websiteElectronics.websiteElectronics.Dto.RegisterRequest;
import com.websiteElectronics.websiteElectronics.Dto.LoginRequest;
import com.websiteElectronics.websiteElectronics.Dto.AuthResponse;

public interface AuthService {
    AuthResponse register(RegisterRequest request);
    AuthResponse login(LoginRequest request);
}
