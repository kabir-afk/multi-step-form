import React, { useState } from "react";
import "./Info.css";
import NextBtn from "../NextBtn/NextBtn";
import { Link } from "react-router-dom";

export default function Info() {
  const [nameError, setNameError] = useState(false);
  const [nameErrorMsg, setNameErrorMsg] = useState("");
  function ValidateName(e) {
    const validNameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (e.target.value !== "") {
      if (validNameRegex.test(e.target.value)) {
        setNameError(false);
        setNameErrorMsg("Invalid character in name");
      } else {
        setNameError(true);
      }
    } else {
      setNameErrorMsg("This field is required");
    }
  }
  function ErrorMsg() {
    return <div className="errorMsg">{nameErrorMsg}</div>;
  }
  function validateEmail() {
    console.log("hellow");
  }
  function validatePhoneNumber() {
    console.log("hellow");
  }
  return (
    <form>
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>

      <div className="flex">
        <label htmlFor="name">Name</label> {nameError && <ErrorMsg />}
      </div>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="e.g. Stephen King"
        autoComplete="given-name"
        onInput={ValidateName}
      />

      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="e.g. stephenking@lorem.com"
        autoComplete="on"
        onInput={validateEmail}
      />

      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        type="number"
        name="phoneNumber"
        id="phoneNumber"
        placeholder="e.g. +1 234 567 890"
        onInput={validatePhoneNumber}
      />
      <Link to="/Plan">
        <NextBtn />
      </Link>
    </form>
  );
}
