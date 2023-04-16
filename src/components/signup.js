//Please ReadmeFile befor Evaluation

import React, {  useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Making use of useNavigate to show the user's credentials on home page using state management
  const history = useNavigate();


  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/signup", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "Exist") {
            alert("User already Exist");
          } else if (res.data === "Does not exist") {
            history("/home", { state: { id: email } });
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
        <h3>Sign Up</h3>
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
        <div className="d-grid ">
          <button type="submit " onClick={submit} className="btn btn-danger">
            Sign Up
          </button>
        </div>
        <p className="paragraph text-center ">
          Already have an account<a href="/signin"> Login </a>
        </p>
      </form>
    </div>
  );
}
export default SignUp;
