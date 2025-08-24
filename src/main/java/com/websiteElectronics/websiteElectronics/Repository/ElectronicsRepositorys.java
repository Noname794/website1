package com.websiteElectronics.websiteElectronics.Repository;

import com.websiteElectronics.websiteElectronics.Entity.Electronics;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ElectronicsRepositorys extends JpaRepository<Electronics, Integer> {
}
