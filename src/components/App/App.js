import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Info from "../Step-1/Info";
import Plan from "../Step-2/Plan";
import AddOn from "../Step-3/AddOn";
import Summary from "../Step-4/Summary";

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
