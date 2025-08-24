package com.websiteElectronics.websiteElectronics.Controller;

import com.websiteElectronics.websiteElectronics.Dto.ReviewsDto;
import com.websiteElectronics.websiteElectronics.Service.ReviewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/reviews")
public class ReviewsController {
    @Autowired
    private ReviewsService reviewsService;

    @PostMapping
    public ResponseEntity<ReviewsDto> createReview(@RequestBody ReviewsDto dto) {
        return ResponseEntity.ok(reviewsService.createReview(dto));
    }

    @GetMapping
    public ResponseEntity<List<ReviewsDto>> getAllReviews() {
        return ResponseEntity.ok(reviewsService.getAllReviews());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ReviewsDto> getReviewById(@PathVariable int id) {
        return ResponseEntity.ok(reviewsService.getReviewById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ReviewsDto> updateReview(@PathVariable int id, @RequestBody ReviewsDto dto) {
        return ResponseEntity.ok(reviewsService.updateReview(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReview(@PathVariable int id) {
        reviewsService.deleteReview(id);
        return ResponseEntity.noContent().build();
    }
}
