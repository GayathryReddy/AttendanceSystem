package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.LeaveRequest;

public interface LeaveRepository extends JpaRepository<LeaveRequest, Long> {
}
