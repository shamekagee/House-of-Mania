export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F5F1EC",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          textAlign: "center",
        }}
      >
       <h1
  style={{
    color: "#7A5C4D",
    fontSize: "clamp(2.5rem, 8vw, 4rem)",
    fontWeight: "500",
    marginBottom: "1rem",
    lineHeight: "1",
    letterSpacing: "-1px",
  }}
>
  HOUSE OF MANIA
</h1>

        <p
          style={{
            color: "#7A5C4D",
            fontSize: "1.2rem",
            marginBottom: "0.25rem",
          }}
        >
          Move With Confidence.
        </p>

        <p
          style={{
            color: "#7A5C4D",
            fontSize: "1.2rem",
            marginBottom: "2rem",
          }}
        >
          Wear With Intention.
        </p>

        <p
          style={{
            color: "#7A5C4D",
            fontSize: "1rem",
            marginBottom: "2rem",
          }}
        >
          The Signature Collection is coming.
        </p>

        <form
          action="https://houseofmania.us4.list-manage.com/subscribe/post?u=4c4117c2d860678551f9396e9&id=8ce629aeee&f_id=0017cfe9f0"
          method="POST"
          target="_blank"
          style={{
            width: "100%",
          }}
        >
          <input
            type="email"
            name="EMAIL"
            placeholder="Enter your email"
            required
            style={{
              width: "100%",
              padding: "1rem",
              marginBottom: "1rem",
              border: "1px solid #D9CFC7",
              borderRadius: "8px",
              fontSize: "1rem",
              boxSizing: "border-box",
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
              fontSize: "1rem",
            }}
          >
            Join The Waitlist
          </button>
        </form>
      </div>
    </div>
  );
}