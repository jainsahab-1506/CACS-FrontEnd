import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "../utils/axios.js";
import { requests } from "../utils/requests";
import { useParams } from "react-router-dom";

export default function Register() {
  const { id } = useParams();
  const authToken = useSelector((state) => state.auth.token);
  useEffect(() => {
    if (!authToken) {
      window.location.href = "/login";
    }
  }, []);

  const profile = useSelector((state) => state.auth.userinfo);
  console.log(profile);
  function HandleRegister() {
    async function doRegister() {
      //   dispatch(showLoader());
      const request = await axios.post(requests["registerEvent"], {
        eventid: id,
      });
      //   console.log(request);
      return request;
    }
    doRegister()
      .then((res) => {
        console.log(res.data);
        alert("You have been Successfully Registered for the Event");
        // dispatch(hideLoader());
        window.location.href = "/";
      })
      .catch((e) => {
        alert("Something Went Wrong");
        console.log(e);
        // dispatch(hideLoader());
        window.location.href = "/register";
      });
  }
  return (
    <div>
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img
                src="./logo.jpeg"
                className="img-fluid rounded-circle"
                alt
                style={{ height: "6vh", width: "6vh" }}
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/en/b/b7/Mnit_logo.png"
                className="img-fluid rounded-circle"
                alt
                style={{ height: "6vh", width: "6vh" }}
              />{" "}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Events
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="container mt-4" style={{ minHeight: "70vh" }}>
          <div className="card my-5" style={{ border: "0 !important" }}>
            <div className="card-body">
              <h4 className="text-center">Register for event</h4>
              <p
                className="text-muted text-center"
                style={{ fontSize: "0.8rem" }}
              >
                Events are organised by societies under CACS, MNIT Jaipur
              </p>
              <div className>
                <form className="my-4 px-5">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Enter your name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter your name here"
                      value={profile.name}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Enter your Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter your name here"
                      value={profile.username}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-sm"
                    onClick={HandleRegister}
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-4 footer-column">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <span className="footer-title">CACS</span>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 footer-column">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <span className="footer-title">Company</span>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Job postings
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      News and articles
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <i className="fa fa-ellipsis-h" />
            </div>
            <div className="row text-center">
              <div className="col-md-4 box">
                <span className="copyright quick-links">
                  Copyright © CACS MNIT Jaipur
                </span>
              </div>
              <div className="col-md-4 box">
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 box">
                <ul className="list-inline quick-links">
                  <li className="list-inline-item">
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
}
