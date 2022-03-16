import './PokemonList.css';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../hooks/useData';
import { useDetailsContext } from '../../hooks/useDetailsContext';

export default function PokemonList({ pokemon }) {
  const getPokemonDetails = useData();
  const navigate = useNavigate();
  const { state } = useDetailsContext();

  const handleClick = (index) => {
    let id = index + 1;
    navigate(`/details/${id}`);
  };

  const handleMouseOver = (url) => {
    getPokemonDetails(url);
    console.log(state);
  };

  return (
    <ul className="pokemon-list">
      {pokemon.map((pokemon, index) => (
        <li
          key={index}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseOver(pokemon.url)}
          data-testid={`pokemon-${index + 1}`}
        >
          <p className="number">{index + 1}</p>
          <p className="name">{pokemon.name}</p>
        </li>
      ))}
    </ul>
  );
}
