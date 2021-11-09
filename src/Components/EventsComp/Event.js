import { Link } from "react-router-dom";
import React from "react";
export default function Event({ event }) {
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  var startDate = new Date(event.startDate);
  var endDate = new Date(event.endDate);

  return (
    <div>
      <div className="col-md-3 col-lg-3 col-12">
        <div
          className="card"
          style={{ borderRadius: "11px !important", overflow: "hidden" }}
        >
          <img
            className="card-img-top"
            src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/bologna-1.jpg"
            alt="Bologna"
          />
          <div className="card-body">
            <h4 className="card-title">{event.name}</h4>
            <h6 className="card-subtitle mb-2 text-muted">{event.venue}</h6>
            <p className="card-text"><b>Starts: </b>{startDate.toLocaleString("en-US", options)}</p>
            <p className="card-text"><b>Ends: </b>{endDate.toLocaleString("en-US", options)}</p>

            <Link
              className="card-link card-link2 p-1"
              style={{
                backgroundColor: "rgb(236, 233, 233)",
                borderRadius: 5,
                textDecoration: "none !important",
              }}
              to={"/register/" + event._id}
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
