import React, { useState } from "react";

const cardStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "16px",
  boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
};

function Percentage() {
  const [id, setId] = useState("");
  const [percent, setPercent] = useState("");

  const getPercentage = async () => {
    const res = await fetch(`http://localhost:8080/api/attendance/percentage/${id}`);
    const data = await res.text();
    setPercent(data);
  };

  return (
    <div style={cardStyle}>
      <h3>📊 Percentage</h3>

      <input
        placeholder="Enter Student ID (e.g. 1)"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <button onClick={getPercentage}>Check</button>

      <p>{percent && `Attendance: ${percent}%`}</p>
    </div>
  );
}

export default Percentage;