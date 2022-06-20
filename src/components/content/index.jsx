import { useState, useContext } from "react";

import swCharacters from "../../data/characters.json";
import swPlanets from "../../data/planets.json";
import swStarships from "../../data/starships.json";

import { ItemSpisok } from "../sw-item-spisok";
import { ThemeContext } from "../../Context";

import { ItemLists } from "../sw-item-lists";

export const Content = ({ handleCreateFan }) => {
  const [selector, setSelector] = useState("Characters");

  const handleSelectorChange = (event) => {
    setSelector(event.target.value);
  };
  const darkTheme = useContext(ThemeContext);
  
  return (
    <div className="content-layout" style={{backgroundColor: `${darkTheme ? "#151515" : "white"}`}}>
      <select
        value={selector}
        placeholder="Choose your path"
        className="select-item"
        onChange={handleSelectorChange}
      >
        <option>Characters</option>
        <option>Planets</option>
        <option>Starships</option>
      </select>

      {selector === "Characters" &&
        swCharacters.map((character) => (
          <ItemLists key={character.name} item={character} type="chars">
            <ItemSpisok>gender: {character.gender}</ItemSpisok>
            <ItemSpisok>birthday: {character.birth_year}</ItemSpisok>
          </ItemLists>
        ))}

      {selector === "Planets" &&
        swPlanets.map((planet) => (
          <ItemLists key={planet.name} item={planet} type="planets">
            <ItemSpisok>Rotation Period: {planet.rotation_period}</ItemSpisok>
            <ItemSpisok>Orbital Period: {planet.orbital_period}</ItemSpisok>
          </ItemLists>
        ))}
      {selector === "Starships" && 
        swStarships.map((starship) => (
          <ItemLists key={starship.name} item={starship} type="starships">
            <ItemSpisok>Model: {starship.model}</ItemSpisok>
            <ItemSpisok>Passengers: {starship.passengers}</ItemSpisok>
          </ItemLists>
        ))

      }
    </div>
  );
};
