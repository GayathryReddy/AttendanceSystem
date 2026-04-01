import React, { useState } from "react";

const cardStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "16px",
  boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
};

function Chatbot() {
  const [msg, setMsg] = useState("");
  const [reply, setReply] = useState("");

  const send = async () => {
    const res = await fetch("http://localhost:8080/api/chat", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: msg
    });

    const text = await res.text();
    setReply(text);
  };

  return (
    <div style={cardStyle}>
      <h3>🤖 Chatbot</h3>

      <input
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Ask something..."
      />

      <button onClick={send}>Send</button>

      <p>{reply}</p>
    </div>
  );
}

export default Chatbot;