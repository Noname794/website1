package com.websiteElectronics.websiteElectronics.Service.Ipml;

import com.websiteElectronics.websiteElectronics.Service.AuthService;
import com.websiteElectronics.websiteElectronics.Dto.RegisterRequest;
import com.websiteElectronics.websiteElectronics.Dto.LoginRequest;
import com.websiteElectronics.websiteElectronics.Dto.AuthResponse;
import com.websiteElectronics.websiteElectronics.Entity.Customers;
import com.websiteElectronics.websiteElectronics.Repository.CustomersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {
    @Autowired
    private CustomersRepository customersRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public AuthResponse register(RegisterRequest request) {
        if (customersRepository.findByEmail(request.getEmail()).isPresent()) {
            return new AuthResponse("Email already exists", null);
        }
        Customers customer = new Customers();
        customer.setEmail(request.getEmail());
        customer.setPassword(passwordEncoder.encode(request.getPassword()));
        customer.setFirstName(request.getFirst_name());
        customer.setLastName(request.getLast_name());
        customersRepository.save(customer);
        return new AuthResponse("Registration successful", null);
    }

    @Override
    public AuthResponse login(LoginRequest request) {
        Customers customer = customersRepository.findByEmail(request.getEmail())
                .orElse(null);
        if (customer == null) {
            return new AuthResponse("Invalid email or password", null);
        }
        String dbPassword = customer.getPassword();
        String rawPassword = request.getPassword();

        if (!dbPassword.startsWith("$2a$") && !dbPassword.startsWith("$2b$") && !dbPassword.startsWith("$2y$")) {

            if (dbPassword.equals(rawPassword)) {
                String encoded = passwordEncoder.encode(rawPassword);
                customer.setPassword(encoded);
                customersRepository.save(customer);
                dbPassword = encoded;
            } else {
                return new AuthResponse("Invalid email or password", null);
            }
        }
        if (!passwordEncoder.matches(rawPassword, dbPassword)) {
            return new AuthResponse("Invalid email or password", null);
        }
        return new AuthResponse("Login successful", null, customer.getId());
    }
}
