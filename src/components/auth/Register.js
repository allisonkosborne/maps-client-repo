import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Auth.css";

export const Register = () => {
  const firstName = useRef();
  const lastName = useRef();
  const username = useRef();
  const weapon = useRef();
  const password = useRef();
  const verifyPassword = useRef();
  const passwordDialog = useRef();
  const history = useHistory();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password.current.value === verifyPassword.current.value) {
      const newUser = {
        username: username.current.value,
        first_name: firstName.current.value,
        last_name: lastName.current.value,
        weapon: weapon.current.value,
        password: password.current.value,
      };

      return fetch("http://127.0.0.1:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((res) => {
          if ("token" in res) {
            localStorage.setItem("lu_token", res.token);
            history.push("/");
          }
        });
    } else {
      passwordDialog.current.showModal();
    }
  };

  return (
    <main style={{ textAlign: "center" }}>
      <dialog className="dialog dialog--password" ref={passwordDialog}>
        <div>Passwords do not match</div>
        <button
          className="button--close"
          onClick={(e) => passwordDialog.current.close()}
        >
          Close
        </button>
      </dialog>

      <form className="form--login" onSubmit={handleRegister}>
        <link
          href="https://fonts.googleapis.com/css2?family=Creepster&display=swap"
          rel="stylesheet"
        ></link>
        <h1 className="h3 mb-3 font-weight-normal">Register an account</h1>
        <fieldset>
          <label htmlFor="firstName"> First Name </label>
          <input
            ref={firstName}
            type="text"
            name="firstName"
            className="form-control"
            placeholder="First name"
            required
            autoFocus
          />
        </fieldset>
        <fieldset>
          <label htmlFor="lastName"> Last Name </label>
          <input
            ref={lastName}
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Last name"
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="inputUsername">Username</label>
          <input
            ref={username}
            type="text"
            name="username"
            className="form-control"
            placeholder="Username"
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="inputPassword"> Password </label>
          <input
            ref={password}
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="verifyPassword"> Verify Password </label>
          <input
            ref={verifyPassword}
            type="password"
            name="verifyPassword"
            className="form-control"
            placeholder="Verify password"
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="weapon"> Weapon </label>
          <textarea
            ref={weapon}
            name="weapon"
            className="form-control"
            placeholder="Pow pow"
          />
        </fieldset>
        <fieldset
          style={{
            textAlign: "center",
          }}
        >
          <button className="btn btn-1 btn-sep icon-send" type="submit">
            Register
          </button>
        </fieldset>
      </form>
      <section className="link--register">
        Already registered? <Link to="/login">Login</Link>
      </section>
    </main>
  );
};
