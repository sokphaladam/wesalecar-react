import React from "react";
import { Content } from "../components/Content";

export function RegisterScreen() {
  return (
    <Content>
      <div className="row">
        <div className="col-lg-7 mb-5">
          <h3 className="mb-3 down-line">Welcome Message</h3>
          <p>
            Adipiscing lacinia pede proin vulputate habitasse donec adipiscing.
            Cubilia Interdum hac turpis et dignissim vehicula porta nostra
            dictum nostra semper. Dictumst congue dictum. Nam massa id, netus
            interdum amet Metus turpis scelerisque aptent sapien penatibus
            potenti.
          </p>
          <h4 className="mb-5 mt-5 underline">
            Keep in a mind a few basic password roules :
          </h4>
          <ul className="list-squire-check">
            <li>
              <i className="fas fa-house-damage text-primary mr-2"></i> Change
              your passwords periodically
            </li>
            <li>
              <i className="fas fa-house-damage text-primary mr-2"></i> Avoid
              re-using password for multiple site
            </li>
            <li>
              <i className="fas fa-house-damage text-primary mr-2"></i> Use
              complex characters including uppercase and number
            </li>
          </ul>
        </div>
        <div className="col-lg-5">
          <h3 className="mb-4 down-line">Registration</h3>
          <div className="form-icon-left form-boder">
            <form action="#" method="post">
              <div className="form-row">
                <div className="col-md-12">
                  <label>Your Name</label>
                  <input
                    type="text"
                    className="form-control bg-light"
                    value=""
                    required
                  />
                </div>
                <div className="col-md-12">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control bg-light"
                    value=""
                    required
                  />
                </div>
                <div className="col-md-12">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control bg-light"
                    value=""
                    required
                  />
                </div>
                <div className="col-md-12">
                  <label>Re-enter Password</label>
                  <input
                    type="password"
                    className="form-control bg-light"
                    value=""
                    required
                  />
                </div>
                <div className="col-md-12 form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkbox1"
                  />
                  <label>Accept Terms and Conditions</label>
                </div>
                <div className="col-md-12 form-check">
                  <button type="button" className="btn btn-primary mb-3">
                    Sign Up Now
                  </button>
                </div>
                <div className="col-md-12">
                  <a href="#" className="btn-link text-dark">
                    View Terms and Condition
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Content>
  );
}
