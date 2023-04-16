import React from "react";

function Main() {
  return (
    <div className="main">
      <h3>Hello There!</h3>
      <p className="paragraph text-center">
        Automatic identity varification which enable you to varify your identity
      </p>

      <a href="/signin">
        <div className="d-grid">
          <button type="button" className="btn btn-primary">
            Login
          </button>
        </div>
      </a>

      <a href="/signin">
        <div className="d-grid mt-2">
          <button type="button" className="btn btn-danger">
            Sign Up
          </button>
        </div>
      </a>
    </div>
  );
}

export default Main;
