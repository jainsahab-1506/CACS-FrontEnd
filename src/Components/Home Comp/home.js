import React from "react";
import { useEffect } from "react";
import Event from "./../EventsComp/Event";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios.js";
import { requests } from "../utils/requests";
import {
  logOutSuccess,
  signInSuccess,
} from "../../store/modules/auth/auth.action";
import { useSelector, useDispatch } from "react-redux";
function Home() {
  const [events, setevent] = useState([]);
  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.auth.token);
  function HandleLogout() {
    dispatch(logOutSuccess({}));
    window.location.href = "/";
  }
  function FetchEvents() {
    async function FetchEvent() {
      //   dispatch(showLoader());
      const request = await axios.get(requests["fetchUpcoming"]);
      return request;
    }
    FetchEvent()
      .then((res) => {
        const data = res.data.events;

        setevent(data);
      })
      .catch((e) => {
        alert("Something Went Wrong");
        // dispatch(hideLoader());
        // window.location.href = "/";
      });
  }

  useEffect(() => {
    FetchEvents();
  }, []);

  return (
    <>
      <div>
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img
                  src="logo.jpeg"
                  className="img-fluid rounded-circle"
                  alt
                  style={{ height: "6vh", width: "6vh" }}
                />{" "}
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
                    {authToken ? (
                      <Link className="nav-link" onClick={HandleLogout}>
                        Logout
                      </Link>
                    ) : (
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    )}
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
          <section style={{}} className="container my-4">
            <div className="card about-card" style={{ overflow: "hidden" }}>
              <div
                className="card-header pt-4"
                style={{
                  border: "0 !important",
                  backgroundColor: "white !important",
                }}
              >
                <h5>About CACS</h5>
              </div>
              <div className="card-body pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                asperiores iure voluptatem nulla labore praesentium assumenda,
                fugit quaerat amet facilis accusamus laborum fuga neque minima
                animi eius. Unde corporis esse facere vel aliquid cumque ducimus
                repudiandae reprehenderit, laboriosam quae et tempora ea
                possimus sed explicabo excepturi consectetur aut adipisci. Quia.
              </div>
            </div>
          </section>
          <section className="container my-4 ">
            <h4 className="py-4">Register some events under CACS</h4>
            {events.length && (
              <div>
                {events.map((event, idx) => {
                  return <Event event={event} />;
                })}
              </div>
            )}
            {!events.length && <div></div>}
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
    </>
  );
}

export default Home;
