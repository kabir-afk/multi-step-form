import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Info from "../Step-1/Info";
import Plan from "../Step-2/Plan";
import AddOn from "../Step-3/AddOn";
import Summary from "../Step-4/Summary";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="sr-only">Multi Step Form</h1>
      <div className="hero-container">
        <Router>
          <nav>
            <ul>
              <li>
                <Link className="nav-item" to="/Info">
                  <p className="item-number">1</p> <p className="item-description"><p>Step 1</p> Your Info</p>
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="/Plan">
                  <p className="item-number">2</p> <p className="item-description"><p>Step 2</p> Select Plan</p>
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="/AddOn">
                  <p className="item-number">3</p> <p className="item-description"><p>Step 3</p> Add-Ons</p>
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="/Summary">
                  <p className="item-number">4</p> <p className="item-description"><p>Step 4</p> Summary</p>
                </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/Info" element={<Info />} />
            <Route path="/Plan" element={<Plan />} />
            <Route path="/Addon" element={<AddOn />} />
            <Route path="/Summary" element={<Summary />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
