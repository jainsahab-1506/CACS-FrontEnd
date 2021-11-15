import React from "react";
import logo from "./logo.jpeg";
function ViewAttendance() {
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
            <p>Hello User</p>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
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
              <h4>Attendance</h4>
            </div>
          </nav>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewAttendance;
