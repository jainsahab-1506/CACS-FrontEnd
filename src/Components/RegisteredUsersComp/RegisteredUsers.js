import React from "react";
import axios from "axios";
import logo from "./logo.jpeg";
import { requests } from "../utils/requests";
import { useEffect } from "react";
import { useParams } from "react-router";
function RegisteredUsers() {
  const id = useParams().id;
  const admin = JSON.parse(localStorage.getItem("adminData"));
  const [event, setEvent] = React.useState({});

  useEffect(() => {
    console.log(id);
    async function FetchEvent() {
      //   dispatch(showLoader());
      const request = await axios.get(
        process.env.REACT_APP_SERVER_URL + requests["getEventById"] + id,
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
        const data = res.data.eventdata;
        console.log(data);
        setEvent(data);
      })
      .catch((e) => {
        console.log(e);
        alert("Something Went Wrong");
      });
  }, []);

  return (
    <div>
      <div className="wrapper">
        {/* Sidebar  */}
        <nav id="sidebar">
          <div className="sidebar-header">
            <a className="navbar-brand" href="#">
              <img
                src={logo}
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
            <p>Hello {admin.name}</p>
            <li>
              <a href="/adminhome">Admin Home</a>
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
              <h4>
                {event ? `Registrations for ${event.name}` : "Registration"}
              </h4>
            </div>
          </nav>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                {event.registeredUsers &&
                  event.registeredUsers.map((user, index) => (
                    <tr key={user.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{user.name}</td>
                      <td>{user.phone}</td>
                      <td>{user.email}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisteredUsers;
