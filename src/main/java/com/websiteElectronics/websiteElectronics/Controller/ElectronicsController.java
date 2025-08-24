package com.websiteElectronics.websiteElectronics.Controller;

import com.websiteElectronics.websiteElectronics.Dto.ElectronicsDto;
import com.websiteElectronics.websiteElectronics.Service.ElectronicsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/electronics")
public class ElectronicsController {
    private final ElectronicsService electronicsService;

    public ElectronicsController(ElectronicsService electronicsService) {
        this.electronicsService = electronicsService;
    }

    @GetMapping
    public ResponseEntity<List<ElectronicsDto>> getAllElectronics() {
        return ResponseEntity.ok(electronicsService.getAllElectronics());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ElectronicsDto> getElectronicsById(@PathVariable Integer id) {
        if (id == null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(electronicsService.getElectronicsById(id));
    }


    @PostMapping
    public ResponseEntity<ElectronicsDto> createElectronics(@RequestBody ElectronicsDto electronicsDto) {
        return ResponseEntity.ok(electronicsService.createElectronics(electronicsDto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ElectronicsDto> updateElectronics(@PathVariable int id, @RequestBody ElectronicsDto electronicsDto) {
        return ResponseEntity.ok(electronicsService.updateElectronics(id, electronicsDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteElectronics(@PathVariable int id) {
        electronicsService.deleteElectronics(id);
        return ResponseEntity.ok().build();
    }
}
