import React from "react";
import NextBtn from "../NextBtn/NextBtn";
import PrevBtn from "../PrevBtn/PrevBtn";
import { Link } from "react-router-dom";
import "./Addon.css";
export default function AddOn() {
  return (
    <form>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>

      <div className="addon">
        {/* <img src="/assets/images/icon-checkmark.svg" alt="icon-check" /> */}
        <input type="checkbox" id="service" />
        <label htmlFor="service">
          <div className="plan-heading">Online service</div>
          <p>Access to multiplayer games</p>
        </label>
        <div className="monthly">+$1/mo</div>
      </div>

      <div className="addon">
        {/* <img src="/assets/images/icon-checkmark.svg" alt="icon-check" /> */}
        <input type="checkbox" id="storage" />
        <label htmlFor="storage">
          <div className="plan-heading">Larger storage</div>
          <p>Extra 1TB of cloud save</p>
        </label>
        <div className="monthly">+$2/mo</div>
      </div>

      <div className="addon">
        {/* <img src="/assets/images/icon-checkmark.svg" alt="icon-check" /> */}
        <input type="checkbox" id="profile" />
        <label htmlFor="profile">
          <div className="plan-heading">Customizable Profile</div>
          <p>Custom theme on your profile</p>
        </label>
        <div className="monthly">+$2/mo</div>
      </div>

      <Link to="/Plan">
        <PrevBtn />
      </Link>
      <Link to="/Summary">
        <NextBtn />
      </Link>
    </form>
  );
}
