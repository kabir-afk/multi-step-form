import React, { useState } from "react";
import NextBtn from "../NextBtn/NextBtn";
import PrevBtn from "../PrevBtn/PrevBtn";
import { Link } from "react-router-dom";
import "./Addon.css";
export default function AddOn(props) {
  const { subscription, active } = props;
  const selected = (e) => {
    e.target.parentElement.classList.toggle(active);
  };
  return (
    <form>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>

      <div className="addon">
        <input
          type="checkbox"
          className="chekcbox"
          id="service"
          onClick={selected}
        />
        <label htmlFor="service">
          <div className="plan-heading">Online service</div>
          <p>Access to multiplayer games</p>
        </label>
        <div className="monthly">+{subscription.service}</div>
      </div>

      <div className="addon">
        <input
          type="checkbox"
          className="chekcbox"
          id="storage"
          onClick={selected}
        />
        <label htmlFor="storage">
          <div className="plan-heading">Larger storage</div>
          <p>Extra 1TB of cloud save</p>
        </label>
        <div className="monthly">+{subscription.storage}</div>
      </div>

      <div className="addon">
        <input
          type="checkbox"
          className="chekcbox"
          id="profile"
          onClick={selected}
        />
        <label htmlFor="profile">
          <div className="plan-heading">Customizable Profile</div>
          <p>Custom theme on your profile</p>
        </label>
        <div className="monthly">+{subscription.profile}</div>
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
