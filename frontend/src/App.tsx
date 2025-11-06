import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const callBackend = async () => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/ping`);
    const data = await res.json();
    setMessage(data.msg);
  };

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Deployable Fullstack Starter</h1>

      <button onClick={callBackend}>
        Call Backend
      </button>

      {message && (
        <p style={{ marginTop: 20 }}>
          Server says: <strong>{message}</strong>
        </p>
      )}
    </div>
  );
}

export default App;
