import React, { useState } from "react";
import CharacterList from "./CharacterList"

export default function SearchForm() {
 
  return (
    <section className="search-form">
     <form>
        <input 
        className = "search-field" 
        type = "text" 
        name = "search"
        placeholder = "Search for characters by name"
        />
        <button className ="search-button">Search</button>
      </form> 
    </section>
  );
}
