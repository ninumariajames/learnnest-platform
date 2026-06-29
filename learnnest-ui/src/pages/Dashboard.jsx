import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>LearnNest Student Dashboard</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
        <div style={{ padding: "20px", background: "#e8f5e9", borderRadius: "10px" }}>
          <h3>Courses</h3>
          <p>5 Enrolled</p>
        </div>

        <div style={{ padding: "20px", background: "#fff3e0", borderRadius: "10px" }}>
          <h3>Assignments</h3>
          <p>2 Pending</p>
        </div>

        <div style={{ padding: "20px", background: "#e3f2fd", borderRadius: "10px" }}>
          <h3>Videos</h3>
          <p>12 Watched</p>
        </div>

        <div style={{ padding: "20px", background: "#f3e5f5", borderRadius: "10px" }}>
          <h3>Progress</h3>
          <p>75%</p>
        </div>
      </div>

      <hr />

      <ul>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/assignments">Assignments</Link></li>
        <li><Link to="/videos">Videos</Link></li>
        <li><Link to="/progress">Progress</Link></li>
      </ul>
    </div>
  );
}