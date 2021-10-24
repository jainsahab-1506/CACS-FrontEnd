import React from "react";
import { Link } from "react-router-dom";
export default function Event({ event }) {
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
            <p className="card-text">{event.description}</p>
            <a href="#" className="card-link">
              Read More
            </a>

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
