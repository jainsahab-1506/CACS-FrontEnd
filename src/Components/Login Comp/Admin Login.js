import React, { useState, useEffect } from "react";
import axios from "../utils/axios.js";
import { requests } from "../utils/requests";
import { useDispatch } from "react-redux";
import {
  logOutSuccess,
  signInSuccess,
} from "../../store/modules/auth/auth.action";

import { useSelector } from "react-redux";

function Login() {
  const authToken = localStorage.getItem("adminToken");
  // useEffect(() => {
  //   if (authToken) {
  //     window.location.href = "/adminhome";
  //   }
  // }, []);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") {
      setemail(value);
    } else {
      setpassword(value);
    }
  }

  function HandleSubmit(e) {
    const senddata = {
      email: email,
      password: password,
    };
    e.preventDefault();
    async function doLogin() {
      //   dispatch(showLoader());
      const request = await axios.post(requests["adminLogin"], senddata);
      return request;
    }
    doLogin()
      .then((res) => {
        const data = res.data;
        const dat = JSON.stringify(data.user);
        localStorage.setItem("adminData", dat);
        localStorage.setItem("adminToken", data.token);

        setemail("");
        setpassword("");
        // dispatch(hideLoader());
        window.location.href = "/adminhome";
      })
      .catch((e) => {
        alert("Something Went Wrong");
        // dispatch(hideLoader());
        window.location.href = "/adminlogin";
      });
  }
  return (
    <div>
      <section
        className="container"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="card shadow-2 p-3"
          style={{ borderRadius: "12px !important", width: "50vw" }}
        >
          <div className="card-body">
            <div className="text-center">
              <img
                src="logo.jpeg"
                className="img-fluid rounded-circle"
                alt
                style={{ height: "10vh", width: "10vh" }}
              />
              <h4 className="mt-2">Login to your account</h4>
            </div>
            <form className="mt-4">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="cacs@mnit.ac.in"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter your password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-sm"
                onClick={HandleSubmit}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
