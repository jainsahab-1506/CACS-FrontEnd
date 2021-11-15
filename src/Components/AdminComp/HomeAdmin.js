import React, { useEffect, useState } from "react";
import { requests } from "../utils/requests";
import $ from "jquery";
import axios from "axios";
import QRCode from "qrcode.react";
export default function HomeAdmin() {
  const [events, setevent] = useState([]);
  function FetchEvents() {
    async function FetchEvent() {
      //   dispatch(showLoader());
      const request = await axios.get(
        process.env.REACT_APP_SERVER_URL + requests["fetchEventsAdmin"],
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        }
      );
      return request;
    }
    FetchEvent()
      .then((res) => {
        const data = res.data.events;
        console.log(data);
        setevent(data);
      })
      .catch((e) => {
        // dispatch(hideLoader());
        window.location.href = "/adminlogin";
      });
  }
  const dat = localStorage.getItem("adminData");
  const info = JSON.parse(dat);
  function HandleLogout() {
    console.log("c");
  }
  useEffect(() => {
    FetchEvents();
  }, []);

  return (
    <div className="wrapper">
      {/* Sidebar  */}
      <nav id="sidebar">
        <div className="sidebar-header">
          <a className="navbar-brand" href="#">
            <img
              src="logo.jpeg"
              className="img-fluid rounded-circle"
              alt=""
              style={{ height: "6vh", width: "6vh" }}
            />{" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/en/b/b7/Mnit_logo.png"
              className="img-fluid rounded-circle"
              alt=""
              style={{ height: "6vh", width: "6vh" }}
            />{" "}
          </a>
        </div>
        <ul className="list-unstyled">
          <p>{"Hello " + info.name} </p>
          <li>
            <a href="/adminhome">Events</a>
          </li>
          <li>
            <a href="/adminlogin">Logout</a>
          </li>
        </ul>
      </nav>
      {/* Page Content  */}
      <div id="content">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              type="button"
              id="sidebarCollapse"
              className="btn btn-info"
              style={{
                backgroundColor: "#000",
                color: "white !important",
                border: "0 !important",
              }}
            >
              <i className="fas fa-align-left" />
            </button>
            <button
              className="btn btn-dark d-inline-block d-lg-none ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-align-justify" />
            </button>
            <h4>All Events</h4>
          </div>
        </nav>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Event Name</th>
                <th scope="col">Attendance</th>
                <th scope="col">Registered Users</th>
                <th scope="col">QR Code for Attendance</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, idx) => {
                return (
                  <tr>
                    <th scope="row">{idx + 1}</th>
                    <td>{event.name}</td>
                    <td>
                      <a
                        style={{ color: "blue" }}
                        href={"/showattendance/" + event._id}
                      >
                        View
                      </a>
                    </td>
                    <td>
                      <a
                        style={{ color: "blue" }}
                        href={"/registeredUsers/" + event._id}
                      >
                        See
                      </a>
                    </td>
                    <td>
                      <QRCode
                        value={
                          process.env.REACT_APP_SERVER_URL +
                          "/markattendance/" +
                          event._id
                        }
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  $(document).ready(function () {
    $("#sidebarCollapse").on("click", function () {
      $("#sidebar").toggleClass("active");
    });
  });
}
