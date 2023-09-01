import React from "react";

const Header = ({ onClick,darkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button onClick={onClick} className="save">
        {darkMode?"light":"dark"}
      </button>
    </div>
  );
};

export default Header;
