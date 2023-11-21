import React from "react";
import PrevBtn from "../PrevBtn/PrevBtn";
import NextBtn from "../NextBtn/NextBtn";
import { Link } from "react-router-dom";
export default function Summary() {
  const confirm  = "Confirm"; 
  return (
    <form>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      {/* <!-- Dynamically add subscription and add-on selections here --> */}
      {/* <p>Total (per month/year)</p> */}
      <Link to={"/AddOn"}>
        <PrevBtn />
      </Link>
      <Link to={'/Success'}>
        <NextBtn confirm={confirm}/>
      </Link>
    </form>
  );
}
