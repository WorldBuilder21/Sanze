import React from "react";
import "./style.css";
import { useNavigate } from "react-router";

export default function GetStarted() {
  const navigate = useNavigate();
  return (
    <body>
      <section class="homePage">
        <div class="container justify-center items-center">
          <div class="logo item">
            <img class="logo-design" src="./favicon.png" alt="" /> SANZA
          </div>
          <div class="description item">
            Sanza provides African music enthusiasts, with the prospect of being
            exposed to African traditional music. We do this by promoting
            African music and offering a means by which you can enjoy it
          </div>

          <button
            class="call-to-action item"
            onClick={() => navigate("/login")}
          >
            Get Started
          </button>
        </div>
      </section>
    </body>
  );
}
