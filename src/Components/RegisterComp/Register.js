import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios.js";
import logo from "./logo.jpeg";
import {
  logOutSuccess,
  signInSuccess,
} from "../../store/modules/auth/auth.action";
import { requests } from "../utils/requests";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function Register() {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const dispatch = useDispatch();
  const { id } = useParams();
  const [event, setEvent] = useState([]);
  const [userdata, setData] = useState({
    eventid: id,
    id: "",
    name: "",
    email: "",
    phone: "",
    branch: "",
  });

  useEffect(async () => {
    await getEvent();
  }, []);

  const getEvent = async () => {
    try {
      const response = await axios.get(requests.getEventInfo + id);
      console.log(response.data);
      setEvent(response.data.eventdata);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = async (event) => {
    setData({ ...userdata, [event.target.id]: event.target.value });
  };
  const HandleRegister = async (event) => {
    try {
      const response = await axios.post(requests["registerEvent"], userdata);
      console.log(response.data);

      if (response.status === 200) {
        if (response.data.error === "Already Registered") {
          alert("You are already registered for the Event");
        } else {
          alert("You have been Successfully Registered for the Event");
        }
        window.location.href = "/";
      } else throw new Error("Something went wrong.");
    } catch (e) {
      console.log(e);
      alert("Something Went Wrong");
      window.location.href = "/register";
    }
  };
  return (
    <div>
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img
                src={logo}
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
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
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
              {event && (
                <>
                  <h6 className="text-center">{event.name}</h6>
                  <p
                    className="text-muted text-center"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {event.description}
                    <br />
                    {event.venue}
                    <br />
                    {new Date(event.startDate).toLocaleString("en-US", options)}
                    <br />
                    {new Date(event.endDate).toLocaleString("en-US", options)}
                  </p>
                </>
              )}
              <div className>
                <form className="my-4 px-5">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Enter your Email Id Here
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Enter your Email Id here"
                      value={userdata.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Enter your ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="id"
                      placeholder="Enter your ID here"
                      value={userdata.id}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Enter your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name here"
                      value={userdata.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Enter your Branch
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="branch"
                      placeholder="Enter your Branch here"
                      value={userdata.branch}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Enter your PhoneNo.
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Enter your PhoneNo. here"
                      value={userdata.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="button"
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
