import React, { useState } from "react";

const cardStyle = {
  background: "#ffffff",
  padding: "30px",
  borderRadius: "16px",
  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
  width: "300px",
  margin: "100px auto",
  textAlign: "center"
};

const inputStyle = {
  width: "90%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  padding: "10px 16px",
  background: "linear-gradient(135deg,#3b82f6,#6366f1)",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  width: "100%",
  fontWeight: "bold"
};

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      const data = await res.json();

      if (data) {
        // ✅ Save user (including role)
        localStorage.setItem("user", JSON.stringify(data));

        alert("✅ Login Successful");

        // send to App.js
        onLogin(data);
      } else {
        alert("❌ Invalid credentials");
      }

    } catch (error) {
      alert("❌ Server error");
    }
  };

  return (
    <div style={cardStyle}>
      <h2>🔐 Login</h2>

      <input
        style={inputStyle}
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        style={inputStyle}
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        style={buttonStyle}
        onClick={handleLogin}
        onMouseOver={e => e.target.style.background="#4338ca"}
        onMouseOut={e => e.target.style.background="linear-gradient(135deg,#3b82f6,#6366f1)"}
      >
        Login
      </button>
    </div>
  );
}

export default Login;