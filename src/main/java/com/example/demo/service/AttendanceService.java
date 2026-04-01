package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Attendance;
import com.example.demo.repository.AttendanceRepository;

@Service
public class AttendanceService {

    @Autowired
    private AttendanceRepository attendanceRepository;

    
    public Attendance markAttendance(Attendance attendance) {
        return attendanceRepository.save(attendance);
    }

  
    public List<Attendance> getAllAttendance() {
        return attendanceRepository.findAll();
    }

    
    public double getAttendancePercentage(Long studentId) {

        List<Attendance> list = attendanceRepository.findByStudentId(studentId);

        // 🔥 ADD THIS LINE HERE
        System.out.println("Records: " + list.size());

        if (list.isEmpty()) return 0;

        long present = list.stream()
            .filter(a -> a.getStatus().equalsIgnoreCase("Present"))
            .count();

        return (present * 100.0) / list.size();
    }
}