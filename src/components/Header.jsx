import React, { useRef, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

function Header() {
  const buttonRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const button = buttonRef.current;

    // Check if the current path is the home page
    if (location.pathname === "/") {
      button.classList.add("hidden");
    } else {
      button.classList.remove("hidden");
    }
  }, [location]);

  return (
    <>
      <div className="header">
        <h1>Manitine UI/UX Library of React</h1>
        <Link to={"/"}>
          <button ref={buttonRef} className="hidden">
            Back to HomePage
          </button>
        </Link>
      </div>
    </>
  );
}

export default Header;
