import './PokemonList.css';
import { useNavigate } from 'react-router-dom';

export default function PokemonList({ pokemon }) {
  const navigate = useNavigate();

  const handleClick = (index) => {
    let id = index + 1;
    navigate(`/details/${id}`);
  };

  const handleMouseOver = (url) => {
    //getPokemonDetails(url);
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
