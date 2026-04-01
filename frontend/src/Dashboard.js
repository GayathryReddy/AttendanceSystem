import React from "react";
import Attendance from "./Attendance";
import Leave from "./Leave";
import Percentage from "./Percentage";
import Chatbot from "./Chatbot";
import AttendanceChart from "./AttendanceChart";

function Dashboard({ user }) {

  const containerStyle = {
    padding: "20px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px"
  };

  const headerStyle = {
    marginBottom: "20px",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#1e293b"
  };

  return (
    <div>
      {/* HEADER */}
      <div style={{
        padding: "15px 20px",
        background: "#1e293b",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h2>🎓 Attendance Dashboard</h2>

        <div>
          <span style={{ marginRight: "15px" }}>
            👤 {user.email} ({user.role})
          </span>

          <button
            onClick={() => {
              localStorage.removeItem("user");
              window.location.reload();
            }}
            style={{
              padding: "8px 12px",
              background: "#ef4444",
              border: "none",
              color: "white",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div style={containerStyle}>

        {/* 🎓 STUDENT VIEW */}
        {user.role === "student" && (
          <>
            <div style={headerStyle}>Student Panel</div>

            <AttendanceChart />
            <Percentage />
            <Leave />
            <Chatbot />
          </>
        )}

        {/* 👨‍🏫 FACULTY VIEW */}
        {user.role === "faculty" && (
          <>
            <div style={headerStyle}>Faculty Panel</div>

            <Attendance />
            <Leave />
            <Chatbot />
          </>
        )}

      </div>
    </div>
  );
}

export default Dashboard;