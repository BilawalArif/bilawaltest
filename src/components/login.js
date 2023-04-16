//Please ReadmeFile befor Evaluation


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "Exist") {
            history("/home", { state: { id: email } });
          } else if (res.data === "Does not exist") {
            alert("User have not SignUp");
          }
        })
        .catch((e) => {
          alert("Wrong Details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="login">
      <form action="POST">
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" onClick={submit} className="btn btn-primary">
            Login
          </button>
        </div>
        <p className="paragraph text-center">Dont have an account <a href="/signup">Sign Up</a></p>
      </form>
    </div>
  );
}

export default Login;
