import React, { useRef, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";
export function Login() {
  const navigate = useNavigate();
  const { actions } = useContext(Context);
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const resp = await actions.login(email, password);
    if (resp) {
      navigate("/");
    }
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <h1>Login</h1>
          <label htmlFor="exampleInputEmail1" className="htmlForm-label">
            Email address
          </label>
          <input
            type="email"
            className="htmlForm-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={emailRef}
          />
          <div id="emailHelp" className="htmlForm-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="htmlForm-label">
            Password
          </label>
          <input
            type="password"
            className="htmlForm-control"
            id="exampleInputPassword1"
            ref={passwordRef}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <button>
        <Link className="text-white" to={"/register"}>
          If you don't have an account, click here!!.
        </Link>
      </button>
    </section>
  );
}
