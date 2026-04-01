package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.LeaveRequest;
import com.example.demo.repository.LeaveRepository;

@Service
public class LeaveService {

    @Autowired
    private LeaveRepository leaveRepository;

    public LeaveRequest applyLeave(LeaveRequest leave) {
        leave.setStatus("Pending"); 
        return leaveRepository.save(leave);
    }

    public List<LeaveRequest> getAllLeaves() {
        return leaveRepository.findAll();
    }
    public LeaveRequest updateStatus(Long id, String status) {
        LeaveRequest leave = leaveRepository.findById(id).orElse(null);
        if (leave != null) {
            leave.setStatus(status);
            return leaveRepository.save(leave);
        }
        return null;
    }
}