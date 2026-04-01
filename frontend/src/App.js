import React, { useState, useEffect } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {

  const [user, setUser] = useState(null);

  // 🔥 Keep user logged in after refresh
  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <div style={{
      fontFamily: "Segoe UI",
      backgroundColor: "#f1f5f9",
      minHeight: "100vh",
      margin: 0
    }}>

      {/* 🔐 LOGIN OR DASHBOARD */}
      {user ? (
        <Dashboard user={user} />
      ) : (
        <Login onLogin={setUser} />
      )}

    </div>
  );
}

export default App;