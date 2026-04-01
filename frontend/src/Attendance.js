import React, { useState } from "react";

function Attendance() {
  const [studentId, setStudentId] = useState("");

  const markAttendance = async () => {
    if (!studentId) {
      alert("Enter Student ID");
      return;
    }

    await fetch("http://localhost:8080/api/attendance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        studentId: studentId,
        facultyId: 1,
        date: "2026-03-25",
        status: "Present"
      })
    });

    alert("Attendance Marked!");
  };

  return (
    <div>
      <h3>📌 Attendance</h3>

      <input
        placeholder="Enter Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />

      <button onClick={markAttendance}>Mark Attendance</button>
    </div>
  );
}

export default Attendance;