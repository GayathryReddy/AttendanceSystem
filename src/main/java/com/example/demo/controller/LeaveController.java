package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.LeaveRequest;
import com.example.demo.service.LeaveService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/leave")
public class LeaveController {

    @Autowired
    private LeaveService leaveService;

    @PostMapping
    public LeaveRequest applyLeave(@RequestBody LeaveRequest leave) {
        return leaveService.applyLeave(leave);
    }

    @GetMapping
    public List<LeaveRequest> getLeaves() {
        return leaveService.getAllLeaves();
    }
    @PutMapping("/{id}/{status}")
    public LeaveRequest updateLeaveStatus(@PathVariable Long id, @PathVariable String status) {
        return leaveService.updateStatus(id, status);
    }
}