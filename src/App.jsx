import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for joining the waitlist, ${email}!`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F6F1EB",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#7A5C4D",
            fontSize: "4rem",
            marginBottom: "1rem",
          }}
        >
          HOUSE OF MANIA
        </h1>

        <p
          style={{
            color: "#7A5C4D",
            fontSize: "1.3rem",
            marginBottom: "1rem",
          }}
        >
          Move With Confidence.
          <br />
          Wear With Intention.
        </p>

        <p
          style={{
            color: "#7A5C4D",
            marginBottom: "2rem",
          }}
        >
          The Signature Collection is coming.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "1rem",
              marginBottom: "1rem",
              border: "1px solid #D9CFC7",
              borderRadius: "8px",
            }}
          />

          <button
            type="submit"
            style={{
              backgroundColor: "#7A5C4D",
              color: "white",
              border: "none",
              padding: "1rem 2rem",
              borderRadius: "999px",
              cursor: "pointer",
            }}
          >
            Join The Waitlist
          </button>
        </form>
      </div>
    </div>
  );
}