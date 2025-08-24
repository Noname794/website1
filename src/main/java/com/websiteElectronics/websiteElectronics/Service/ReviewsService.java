package com.websiteElectronics.websiteElectronics.Service;

import com.websiteElectronics.websiteElectronics.Dto.ReviewsDto;
import java.util.List;

public interface ReviewsService {
    ReviewsDto createReview(ReviewsDto dto);
    ReviewsDto getReviewById(int id);
    List<ReviewsDto> getAllReviews();
    ReviewsDto updateReview(int id, ReviewsDto dto);
    void deleteReview(int id);
}
