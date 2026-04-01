import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartDataLabels);

function AttendanceChart() {
  const [studentId, setStudentId] = useState("");
  const [percentage, setPercentage] = useState(null);

  const loadChart = async () => {
    if (!studentId) {
      alert("Enter Student ID");
      return;
    }

    try {
      const res = await fetch(`http://localhost:8080/api/attendance/percentage/${studentId}`);
      const text = await res.text();

      console.log("API:", text);

      setPercentage(parseFloat(text));
    } catch (err) {
      console.log(err);
      alert("Error loading chart");
    }
  };

  const data = {
    labels: ["Attendance"],
    datasets: [
      {
        label: "Percentage",
        data: [percentage || 0],
        backgroundColor: "#3b82f6"
      }
    ]
  };

  const options = {
    plugins: {
      datalabels: {
        anchor: "end",
        align: "top",
        formatter: (value) => value + "%",
        font: { weight: "bold" }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  };

  return (
    <div style={{
      background: "#fff",
      padding: "20px",
      borderRadius: "16px"
    }}>
      <h3>📊 Attendance Chart</h3>

      <input
        placeholder="Enter Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />

      <button onClick={loadChart}>Load Chart</button>

      {percentage !== null && (
        <Bar data={data} options={options} />
      )}
    </div>
  );
}

export default AttendanceChart;