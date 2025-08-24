package com.websiteElectronics.websiteElectronics.Service.Ipml;

import com.websiteElectronics.websiteElectronics.Dto.ElectronicsDto;
import com.websiteElectronics.websiteElectronics.Entity.Electronics;
import com.websiteElectronics.websiteElectronics.Exception.ElectronicsException;
import com.websiteElectronics.websiteElectronics.Mapper.ElectronicsMapper;
import com.websiteElectronics.websiteElectronics.Repository.ElectronicsRepositorys;
import com.websiteElectronics.websiteElectronics.Service.ElectronicsService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ElectronicsServiceIpml implements ElectronicsService {

    private final ElectronicsRepositorys electronicsRepositorys;

    public ElectronicsServiceIpml(ElectronicsRepositorys electronicsRepositorys) {
        this.electronicsRepositorys = electronicsRepositorys;
    }

    @Override
    public List<ElectronicsDto> getAllElectronics() {
        List<Electronics> lstElectronics = electronicsRepositorys.findAll();
        return lstElectronics.stream().map(ElectronicsMapper::mapToDto).collect(Collectors.toList());
    }

    @Override
    public ElectronicsDto getElectronicsById(int id) {
        Electronics electronics = electronicsRepositorys.findById(id).orElseThrow(() -> new ElectronicsException("Could not find electronics with id: " + id));
        return ElectronicsMapper.mapToDto(electronics);
    }

    @Override
    public ElectronicsDto createElectronics(ElectronicsDto electronicsDto) {
        Electronics electronics = ElectronicsMapper.mapToEntity(electronicsDto);
        Electronics savedElectronics = electronicsRepositorys.save(electronics);
        return ElectronicsMapper.mapToDto(savedElectronics);
    }

    @Override
    public ElectronicsDto updateElectronics(int id, ElectronicsDto electronicsDto) {
        Electronics electronics = electronicsRepositorys.findById(id).orElseThrow(() -> new ElectronicsException("Could not find electronics with id: " + id));
        electronics.setName(electronicsDto.getName());
        electronics.setDescription(electronicsDto.getDescription());
        electronics.setPrice(electronicsDto.getPrice());
        electronics.setQuantity(electronicsDto.getQuantity());
        electronics.setImage_url(electronicsDto.getImage_url());
        electronics.setCategory(electronicsDto.getCategory());
        electronics.setSupplier(electronicsDto.getSupplier());
        Electronics savedElectronics = electronicsRepositorys.save(electronics);
        return ElectronicsMapper.mapToDto(savedElectronics);
    }

    @Override
    public void deleteElectronics(int id) {
        Electronics electronics = electronicsRepositorys.findById(id).orElseThrow(() -> new ElectronicsException("Could not find electronics with id: " + id));
        electronicsRepositorys.delete(electronics);
    }
}
