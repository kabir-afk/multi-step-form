import { useState } from "react";
import { Link } from "react-router-dom";
import NextBtn from "../NextBtn/NextBtn";
import PrevBtn from "../PrevBtn/PrevBtn";
import "./Plan.css";

function FreeMsg() {
  return <div className="monthly">2 months free</div>;
}

export default function Plan() {
  const [isToggled, setToggled] = useState(false);
  const [subscription, setSubscription] = useState({
    arcade: "$9/mo",
    advanced: "$12/mo",
    pro: "$15/mo",
  });

  const handleChange = () => {
    setToggled(!isToggled);
    isToggled
      ? setSubscription({
          arcade: "$9/mo",
          advanced: "$12/mo",
          pro: "$15/mo",
        })
      : setSubscription({
          arcade: "$90/yr",
          advanced: "$120/yr",
          pro: "$150/yr",
        });
  };
  return (
    <form>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="plans">
        <div className="plan">
          <img src="/assets/images/icon-arcade.svg" alt="arcade-icon" />
          <div className="plan-heading">Arcade</div>
          <p>{subscription.arcade}</p>
          {isToggled && <FreeMsg />}
        </div>

        <div className="plan">
          <img src="/assets/images/icon-advanced.svg" alt="advanced-icon" />
          <div className="plan-heading">Advanced</div> <p>{subscription.advanced}</p>
          {isToggled && <FreeMsg />}
        </div>

        <div className="plan">
          <img src="/assets/images/icon-pro.svg" alt="pro-icon" />
          <div className="plan-heading">Pro</div> <p>{subscription.pro}</p>
          {isToggled && <FreeMsg />}
        </div>
      </div>
      <div className="plan-flex">
        <p className={isToggled ? "yearly" : "monthly"}>Monthly</p>
        <div className="toggle-switch">
          <input
            type="checkbox"
            id="toggle"
            checked={isToggled}
            onChange={handleChange}
          />
          <label htmlFor="toggle"></label>
        </div>
        <p className={isToggled ? "monthly" : "yearly"}>Yearly</p>
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
