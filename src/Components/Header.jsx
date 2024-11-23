import React from "react";
import Logo from "../assets/investment-calculator-logo.png";

function Header() {
  return (
    <header id="header">
      <img src={Logo} alt="calculatorLogo" />
      <h1>React Investment Calculator</h1>
    </header>
  );
}

export default Header;
