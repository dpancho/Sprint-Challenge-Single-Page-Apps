import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import Characters from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import Search from "./components/SearchForm";
// import CharacterList from "./components/CharacterList";


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={Characters} />
      <Route path="/search" component={Search} />
    </main>
  );
}
