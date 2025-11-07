import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const callBackend = async () => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/ping`);
    const data = await res.json();
    setMessage(data.msg);
  };

  return (
    <div>
      <h1>Deployable Fullstack Starter</h1>

      <button onClick={callBackend}>
        Call Backend: <strong>ping</strong>
      </button>

      {message && (
        <p >
          Server Says: <strong>{message}</strong>
        </p>
      )}
    </div>
  );
}

export default App;
