import axios from 'axios';
import { useDetailsContext } from './useDetailsContext';

export const useData = () => {
  const { dispatch } = useDetailsContext();

  const getPokemonDetails = async (url) => {
    dispatch({ type: 'IS_PENDING', payload: true });
    try {
      const response = await axios.get(url);
      dispatch({ type: 'ADD_DETAILS', payload: response.data });
      getPokemonSpecies(response.data.species.url);
    } catch (err) {
      dispatch({ type: 'ERROR', payload: err.message });
    }
  };

  const getPokemonSpecies = async (url) => {
    try {
      const response = await axios.get(url);
      getPokemonEvolutions(response.data.evolution_chain.url);
    } catch (err) {
      dispatch({ type: 'ERROR', payload: err.message });
    }
  };

  const getPokemonEvolutions = async (url) => {
    try {
      const response = await axios.get(url);
      // determining how long the evolution chain is
      // case no chain
      if (response.data.chain.evolves_to.length === 0) {
        dispatch({ type: 'EVOLUTION_CHAIN', payload: null });
        // case two pokemon chain
      } else if (response.data.chain.evolves_to[0].evolves_to.length === 0) {
        dispatch({
          type: 'EVOLUTION_CHAIN',
          payload: [
            response.data.chain.species.name,
            response.data.chain.evolves_to[0].species.name,
          ],
        });
        // case three pokemon chain
      } else {
        dispatch({
          type: 'EVOLUTION_CHAIN',
          payload: [
            response.data.chain.species.name,
            response.data.chain.evolves_to[0].species.name,
            response.data.chain.evolves_to[0].evolves_to[0].species.name,
          ],
        });
      }
    } catch (err) {
      dispatch({ type: 'ERROR', payload: err.message });
    }
  };

  return getPokemonDetails;
};
