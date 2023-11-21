import React from "react";
import './Success.css';
export default function Success() {
  return (
    <div className="successMsg">
      <div>
        <img src="/assets/images/icon-thank-you.svg" alt="thank-you-icon" />
      </div>
      <h1>Thank you!</h1>

      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
