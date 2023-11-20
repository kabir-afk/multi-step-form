import React from "react";
import NextBtn from "../NextBtn/NextBtn";
import PrevBtn from "../PrevBtn/PrevBtn";
import { Link } from "react-router-dom";
import "./Addon.css";
export default function AddOn() {
  function hello() {
    console.log("hellow");
  }
  return (
    <form>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>

      <div className="addon">
        <label className="checkbox">
          <input type="checkbox" checked onChange={hello} />
          <span className="custom-checkbox">
            <img src="/assets/images/icon-checkmark.svg" alt="icon-check" />
          </span>
        </label>
        <article htmlFor="service">
          <div className="plan-heading">Online service</div>
          <p>Access to multiplayer games</p>
        </article>
        <div className="monthly">+$1/mo</div>
      </div>

      <div className="addon">
        <label className="checkbox">
          <input type="checkbox" checked onChange={hello} />
          <span className="custom-checkbox">
            <img src="/assets/images/icon-checkmark.svg" alt="icon-check" />
          </span>
        </label>
        <article htmlFor="storage">
          <div className="plan-heading">Larger storage</div>
          <p>Extra 1TB of cloud save</p>
        </article>
        <div className="monthly">+$2/mo</div>
      </div>

      <div className="addon">
        <label className="checkbox">
          <input type="checkbox" checked onChange={hello} />
          <span className="custom-checkbox">
            <img src="/assets/images/icon-checkmark.svg" alt="icon-check" />
          </span>
        </label>
        <article htmlFor="profile">
          <div className="plan-heading">Customizable Profile</div>
          <p>Custom theme on your profile</p>
        </article>
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
