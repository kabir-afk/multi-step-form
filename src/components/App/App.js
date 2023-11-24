import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Info from "../Step-1/Info";
import Plan from "../Step-2/Plan";
import AddOn from "../Step-3/AddOn";
import Summary from "../Step-4/Summary";
import Success from '../Step-5/Success';
import "./App.css";
function App() {
  const active = "active";
  const [isToggled, setToggled] = useState(false);
  const [subscription, setSubscription] = useState({
    arcade: "$9/mo",
    advanced: "$12/mo",
    pro: "$15/mo",
    service: "$1/mo",
    storage: "$2/mo",
    profile: "$2/mo",
  });

  const handleChange = () => {
    setToggled(!isToggled);
    isToggled
      ? setSubscription({
          arcade: "$9/mo",
          advanced: "$12/mo",
          pro: "$15/mo",
          service: "$1/mo",
          storage: "$2/mo",
          profile: "$2/mo",
        })
      : setSubscription({
          arcade: "$90/yr",
          advanced: "$120/yr",
          pro: "$150/yr",
          service: "$10/yr",
          storage: "$20/yr",
          profile: "$20/yr",
        });
  };
  return (
    <>
      <h1 className="sr-only">Multi Step Form</h1>
      <div className="hero-container">
        <Router>
          <nav>
            <ul>
              <li>
                <Link className="nav-item" to="/Info">
                  <button className="item-number">1</button>{" "}
                  <span className="item-description">
                    <p>Step 1</p> Your Info
                  </span>
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="/Plan">
                  <button className="item-number">2</button>{" "}
                  <span className="item-description">
                    <p>Step 2</p> Select Plan
                  </span>
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="/AddOn">
                  <button className="item-number">3</button>{" "}
                  <span className="item-description">
                    <p>Step 3</p> Add-Ons
                  </span>
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="/Summary">
                  <button className="item-number">4</button>{" "}
                  <span className="item-description">
                    <p>Step 4</p> Summary
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/Info" element={<Info />} />
            <Route
              path="/Plan"
              element={
                <Plan
                  isToggled={isToggled}
                  handleChange={handleChange}
                  subscription={subscription}
                />
              }
            />
            <Route
              path="/Addon"
              element={<AddOn subscription={subscription} active={active} />}
            />
            <Route path="/Summary" element={<Summary />} />
            <Route path="/Success" element={<Success />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
