package com.websiteElectronics.websiteElectronics.Repository;

import com.websiteElectronics.websiteElectronics.Entity.Reviews;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewsRepository extends JpaRepository<Reviews, Integer> {
}
