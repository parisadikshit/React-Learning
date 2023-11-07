import { useContext, useState, useEffect } from "react";
import {placeImageContext} from './Context';
import { pokemons } from "./data";
import { getPokemonImage } from "./utils";
function App() {
  const [isLarge, setIsLarge] = useState(false);
  const size = useContext(placeImageContext);
  const imageSize = isLarge ? size+50 : size;
  return (
   <>
   <label>
    <input
    type="checkbox"
    checked={isLarge}
    onChange={e => {
      setIsLarge(e.target.checked)
    }}
    />
    Use large images
   </label>
   <hr/>
   <placeImageContext.Provider value={imageSize}>
    <List/>
   </placeImageContext.Provider>
   </>
  );
}

function List(){
  const listItems = pokemons.map(pokemon => 
  <li key={pokemon.id}>
    <Pokemon pokemon={pokemon}/>
  </li>)
  return <ul>{listItems}</ul>
}
function Pokemon({pokemon}){
  return (
    <>
    <PokemonImage pokemon ={pokemon}/>
    <p>
      <b>{pokemon.name}</b>
    </p>
    </>
  )
}
function PokemonImage({pokemon}){
  const imageSize = useContext(placeImageContext);
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    getPokemonImage(pokemon.name)
      .then((url) => setImageURL(url))
      .catch((error) => console.error("Error fetching image:", error));
  }, [pokemon.name]);
  return (
    <img 
    src={imageURL}
    alt={pokemon.name}
    width={imageSize}
    height={imageSize}
    />
  )

}

export default App;
