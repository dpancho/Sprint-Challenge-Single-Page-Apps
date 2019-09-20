import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <div className = "navbar">
        <Link to="/"><h3>Home</h3></Link>
        <Link to="/characters"><h3>Characters</h3></Link>
        <Link to="/search"><h3>Search</h3></Link>
      </div>
    </header>
  );
}
