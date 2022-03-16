import { useEffect, useState } from 'react';
import pokeApi from '../../api/pokeApi';

// styles
import './Home.css';
// pages & components
import PokemonList from './PokemonList';

export default function Home() {
  const [pokeList, setPokeList] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const getInitialPokeList = async (numberOfPokemon) => {
    setIsPending(true);
    try {
      const response = await pokeApi.get(`pokemon?limit=${numberOfPokemon}`);
      setErrorMessage(null);
      setPokeList(response.data.results);
      setIsPending(false);
    } catch (err) {
      setErrorMessage(err);
      isPending(false);
    }
  };

  useEffect(() => {
    getInitialPokeList(151);
  }, []);

  return (
    <div className="container">
      {errorMessage && <p>{errorMessage}</p>}
      {isPending && <p>is loading...</p>}
      {pokeList && <PokemonList pokemon={pokeList} />}
    </div>
  );
}
