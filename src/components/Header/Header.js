// Imports
import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

// Function that renders the header & exports
export default function Header({ currentPage, setCurrentPage }) {
  return (
    <div className="headerParent" style={{ padding: "0px 0px 10px 43px" }}>
      <p id="header-text">Frieda Fry</p>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}