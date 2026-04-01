package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "attendance")
public class Attendance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String date;
    private String status; // Present / Absent

    private Long studentId;
    private Long facultyId;

    public Attendance() {
    }

    public Long getId() {
        return id;
    }

    public String getDate() {
        return date;
    }

    public String getStatus() {
        return status;
    }

    public Long getStudentId() {
        return studentId;
    }

    public Long getFacultyId() {
        return facultyId;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public void setFacultyId(Long facultyId) {
        this.facultyId = facultyId;
    }
}