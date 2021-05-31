import React from "react";

function Header({ headerTxt }) {
  return (
    <header className="header">
      <h1>{headerTxt}</h1>
    </header>
  );
}

export default Header;
