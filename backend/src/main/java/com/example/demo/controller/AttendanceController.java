package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Attendance;
import com.example.demo.service.AttendanceService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/attendance")
public class AttendanceController {

    @Autowired
    private AttendanceService attendanceService;

    
    @PostMapping
    public Attendance markAttendance(@RequestBody Attendance attendance) {
        return attendanceService.markAttendance(attendance);
    }

    
    @GetMapping
    public List<Attendance> getAttendance() {
        return attendanceService.getAllAttendance();
    }

  
    @GetMapping("/percentage/{studentId}")
    public double getPercentage(@PathVariable Long studentId) {
        return attendanceService.getAttendancePercentage(studentId);
    }
}