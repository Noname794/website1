package com.websiteElectronics.websiteElectronics.Service.Ipml;

import com.websiteElectronics.websiteElectronics.Service.ReviewsService;
import com.websiteElectronics.websiteElectronics.Dto.ReviewsDto;
import com.websiteElectronics.websiteElectronics.Entity.Reviews;
import com.websiteElectronics.websiteElectronics.Entity.Electronics;
import com.websiteElectronics.websiteElectronics.Entity.Customers;
import com.websiteElectronics.websiteElectronics.Exception.ReviewsException;
import com.websiteElectronics.websiteElectronics.Mapper.ReviewsMapper;
import com.websiteElectronics.websiteElectronics.Repository.ReviewsRepository;
import com.websiteElectronics.websiteElectronics.Repository.CustomersRepository;
import com.websiteElectronics.websiteElectronics.Repository.ElectronicsRepositorys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReviewsServiceIpml implements ReviewsService {
    @Autowired
    private ReviewsRepository reviewsRepository;
    @Autowired
    private ReviewsMapper reviewsMapper;
    @Autowired
    private CustomersRepository customersRepository;
    @Autowired
    private ElectronicsRepositorys electronicsRepositorys;

    @Override
    public ReviewsDto createReview(ReviewsDto dto) {
        Reviews entity = reviewsMapper.toEntity(dto);
        entity.setReviewDate(new Date());
        Electronics product = electronicsRepositorys.findById(dto.getProductId())
            .orElseThrow(() -> new ReviewsException("Product not found with id: " + dto.getProductId()));
        Customers customer = customersRepository.findById(dto.getCustomerId())
            .orElseThrow(() -> new ReviewsException("Customer not found with id: " + dto.getCustomerId()));
        entity.setProduct(product);
        entity.setCustomer(customer);
        Reviews saved = reviewsRepository.save(entity);
        return reviewsMapper.toDto(saved);
    }

    @Override
    public ReviewsDto getReviewById(int id) {
        Reviews review = reviewsRepository.findById(id)
            .orElseThrow(() -> new ReviewsException("Review not found with id: " + id));
        return reviewsMapper.toDto(review);
    }

    @Override
    public List<ReviewsDto> getAllReviews() {
        return reviewsRepository.findAll().stream()
            .map(reviewsMapper::toDto)
            .collect(Collectors.toList());
    }

    @Override
    public ReviewsDto updateReview(int id, ReviewsDto dto) {
        Reviews review = reviewsRepository.findById(id)
            .orElseThrow(() -> new ReviewsException("Review not found with id: " + id));
        review.setRating(dto.getRating());
        review.setComment(dto.getComment());

        Reviews updated = reviewsRepository.save(review);
        return reviewsMapper.toDto(updated);
    }

    @Override
    public void deleteReview(int id) {
        if (!reviewsRepository.existsById(id)) {
            throw new ReviewsException("Review not found with id: " + id);
        }
        reviewsRepository.deleteById(id);
    }
}
