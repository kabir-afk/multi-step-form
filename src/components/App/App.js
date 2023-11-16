import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Info from "../Step-1/Step-1";
import Plan from "../Step-2/Step-2";
import AddOn from "../Step-3/Step-3";
import Summary from "../Step-4/Step-4";

function App() {
  return (
    <>
      <div>hello world</div>
      <Router>
        <Routes>
          <Route path="/Info" element={<Info />} />
          <Route path="/Plan" element={<Plan />} />
          <Route path="/Addon" element={<AddOn />} />
          <Route path="/Summary" element={<Summary />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
