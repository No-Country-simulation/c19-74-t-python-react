import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="cabecera">
      <Link to="/">
        <img
          className="cabecera__logo"
          src="./public/media/logo__sf__letrasAzules.png"
          alt="logo trabajo"
        />
      </Link>
    </header>
  );
};
