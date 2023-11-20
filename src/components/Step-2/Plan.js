import { useState } from "react";
import { Link } from "react-router-dom";
import NextBtn from "../NextBtn/NextBtn";
import PrevBtn from "../PrevBtn/PrevBtn";
import "./Plan.css";

export default function Plan() {
  const [isToggled, setToggled] = useState(false);

  const handleChange = () => {
    setToggled(!isToggled);
  };
  return (
    <form>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="plans">
        <div className="plan">
          <img src="/assets/images/icon-arcade.svg" alt="arcade-icon" />
          <div className="plan-heading">Arcade</div> $9/mo
        </div>

        <div className="plan">
          <img src="/assets/images/icon-advanced.svg" alt="advanced-icon" />
          <div className="plan-heading">Advanced</div> $12/mo
        </div>

        <div className="plan">
          <img src="/assets/images/icon-pro.svg" alt="pro-icon" />
          <div className="plan-heading">Pro</div> $15/mo
        </div>
      </div>
      <div className="plan-flex">
        <p>Monthly</p>
        <div className="toggle-switch">
          <input
            type="checkbox"
            id="toggle"
            checked={isToggled}
            onChange={handleChange}
          />
          <label htmlFor="toggle"></label>
        </div>
        <p>Yearly</p>
      </div>
      <Link to={"/Info"}>
        <PrevBtn />
      </Link>
      <Link to={"/AddOn"}>
        <NextBtn />
      </Link>
    </form>
  );
}
