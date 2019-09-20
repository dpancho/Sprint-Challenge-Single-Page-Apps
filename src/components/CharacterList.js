import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"

export default function CharacterList() {
  const [characters, setCharacters] = useState ([]);
  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      console.log(res.data.results);
      setCharacters(res.data.results)
    })
    .catch(err => console.log("you done messed up", err))
  }, []);

  return (
    <section className="character-list">
      {
        characters.filter(character => character).map(character => 
          <CharacterCard
          key = {character.id}
          id = {character.id}
          name = {character.name}
          species={character.species}
          image={character.image}
          gender={character.gender}
          status={character.status}
          />)
      }
    </section>
  );
}
