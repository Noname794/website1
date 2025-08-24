package com.websiteElectronics.websiteElectronics.Service;

import com.websiteElectronics.websiteElectronics.Dto.ElectronicsDto;
import com.websiteElectronics.websiteElectronics.Entity.Electronics;

import java.util.List;

public interface ElectronicsService {
    List<ElectronicsDto> getAllElectronics();
    ElectronicsDto getElectronicsById(int id);
    ElectronicsDto createElectronics(ElectronicsDto electronicsDto);
    ElectronicsDto updateElectronics(int id, ElectronicsDto electronicsDto);
    void deleteElectronics(int id);
}
