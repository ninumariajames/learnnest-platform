import { Link } from "react-router-dom";
import hero from "../assets/Online learning-amico.svg";

export default function Home() {
  return (
    <div style={{ background: "#f5f7ff", minHeight: "100vh" }}>

      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 50px",
          background: "white",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{ color: "#6C4DF6" }}>LearnNest LMS</h2>

        <div>
          <Link to="/login">
            <button style={{ marginRight: "10px" }}>
              Login
            </button>
          </Link>

          <Link to="/register">
            <button>Create Account</button>
          </Link>
        </div>
      </nav>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "60px"
        }}
      >
        <div style={{ maxWidth: "500px" }}>
          <h1 style={{ fontSize: "50px" }}>
            Where Learning Takes Flight
          </h1>

          <p style={{ fontSize: "20px" }}>
            Learn courses, watch videos,
            submit assignments and track
            your progress in one platform.
          </p>

          <Link to="/register">
            <button
              style={{
                background: "#6C4DF6",
                color: "white",
                padding: "15px 25px",
                border: "none",
                borderRadius: "8px"
              }}
            >
              Get Started
            </button>
          </Link>
        </div>

        <img
          src={hero}
          alt="Online Learning"
          style={{
            width: "600px",
            maxWidth: "100%",
            height: "auto"
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          paddingBottom: "60px"
        }}
      >
        <div>📚 Courses</div>
        <div>🎥 Videos</div>
        <div>📝 Assignments</div>
        <div>📈 Progress</div>
      </div>

    </div>
  );
}