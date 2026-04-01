import React, { useState, useEffect } from "react";

const cardStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "16px",
  boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
};

const inputStyle = {
  padding: "10px",
  margin: "5px",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  padding: "8px 12px",
  margin: "5px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  color: "white"
};

function Leave() {
  const [studentId, setStudentId] = useState("");
  const [reason, setReason] = useState("");
  const [leaves, setLeaves] = useState([]);

  // 🔥 Fetch all leave requests
  const fetchLeaves = () => {
    fetch("http://localhost:8080/api/leave")
      .then(res => res.json())
      .then(data => setLeaves(data));
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  // 🔥 Apply leave
  const applyLeave = async () => {
    if (!studentId || !reason) {
      alert("Enter all details");
      return;
    }

    await fetch("http://localhost:8080/api/leave", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        studentId: studentId,
        fromDate: "2026-03-26",
        toDate: "2026-03-28",
        reason: reason
      })
    });

    alert("✅ Leave Applied!");
    setStudentId("");
    setReason("");
    fetchLeaves(); // refresh list
  };

  // 🔥 Approve / Reject
  const updateStatus = async (id, status) => {
    await fetch(`http://localhost:8080/api/leave/${id}/${status}`, {
      method: "PUT"
    });

    fetchLeaves(); // refresh
  };

  return (
    <div style={cardStyle}>
      <h3>📝 Leave Management</h3>

      {/* APPLY FORM */}
      <div>
        <input
          style={inputStyle}
          placeholder="Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />

        <input
          style={inputStyle}
          placeholder="Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />

        <button
          style={{ ...buttonStyle, background: "#f59e0b" }}
          onClick={applyLeave}
        >
          Apply Leave
        </button>
      </div>

      {/* LEAVE LIST */}
      <table style={{
        width: "100%",
        marginTop: "15px",
        borderCollapse: "collapse"
      }}>
        <thead>
          <tr style={{ background: "#3b82f6", color: "white" }}>
            <th>ID</th>
            <th>Student</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {leaves.map((leave) => (
            <tr key={leave.id} style={{ textAlign: "center" }}>
              <td>{leave.id}</td>
              <td>{leave.studentId}</td>
              <td>{leave.reason}</td>
              <td>{leave.status}</td>

              <td>
                <button
                  style={{ ...buttonStyle, background: "#22c55e" }}
                  onClick={() => updateStatus(leave.id, "Approved")}
                >
                  Approve
                </button>

                <button
                  style={{ ...buttonStyle, background: "#ef4444" }}
                  onClick={() => updateStatus(leave.id, "Rejected")}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leave;