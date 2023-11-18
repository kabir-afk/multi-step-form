import React from "react";
import "./Info.css";
import NextBtn from "../NextBtn/NextBtn";
import { Link } from "react-router-dom";

export default function Info() {
  return (
    <form>
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>

      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="e.g. Stephen King"
        autoComplete="given-name"
      />

      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="e.g. stephenking@lorem.com"
        autoComplete="on"
      />

      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        type="number"
        name="phoneNumber"
        id="phoneNumber"
        placeholder="e.g. +1 234 567 890"
      />
      <Link to="/Plan">
        <NextBtn />
      </Link>
    </form>
  );
}
