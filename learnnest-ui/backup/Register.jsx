export default function Register() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Create Account</h1>

      <input placeholder="Name" />
      <br /><br />

      <input placeholder="Email" />
      <br /><br />

      <input type="password" placeholder="Password" />
      <br /><br />

      <button>Create Account</button>
    </div>
  );
}