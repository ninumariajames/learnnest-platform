import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {

    try {

      await axios.post(
        "http://3.109.60.186:3000/api/auth/register",
        {
          name,
          email,
          password
        }
      );

      alert("Registration Successful");

      navigate("/login");

    } catch (err) {

      console.log(err);

      alert("Registration Failed");

    }

  };

  return (

    <div
      style={{
        minHeight:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        background:"linear-gradient(135deg,#eef2ff,#f8fbff)"
      }}
    >

      <div
        style={{
          width:"420px",
          background:"#fff",
          padding:"40px",
          borderRadius:"15px",
          boxShadow:"0 10px 30px rgba(0,0,0,.15)"
        }}
      >

        <h1
          style={{
            color:"#6C4DF6",
            textAlign:"center"
          }}
        >
          Create Account
        </h1>

        <p style={{textAlign:"center"}}>
          Join LearnNest LMS
        </p>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          style={{width:"100%",padding:"12px",marginTop:"20px",marginBottom:"15px"}}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={{width:"100%",padding:"12px",marginBottom:"15px"}}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          style={{width:"100%",padding:"12px",marginBottom:"20px"}}
        />

        <button
          onClick={handleRegister}
          style={{
            width:"100%",
            padding:"14px",
            background:"#6C4DF6",
            color:"#fff",
            border:"none",
            borderRadius:"8px",
            fontSize:"16px",
            cursor:"pointer"
          }}
        >
          Create Account
        </button>

        <p
          style={{
            marginTop:"20px",
            textAlign:"center"
          }}
        >
          Already have an account? <Link to="/login">Login</Link>
        </p>

      </div>

    </div>

  );

}