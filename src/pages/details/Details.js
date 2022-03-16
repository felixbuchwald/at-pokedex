import { useDetailsContext } from '../../hooks/useDetailsContext';

// styles & icons
import './Details.css';
import atk from '../../Assets/atk.svg';
import def from '../../Assets/def.svg';
import speed from '../../Assets/speed.svg';
import hp from '../../Assets/hp.svg';

export default function Details() {
  const { details, evolutionChain, error, isPending } = useDetailsContext();

  return (
    <div>
      {error && <p>{error}</p>}
      {isPending && <p>loading...</p>}
      {!isPending && (
        <>
          <h2 className="title">{details.name}</h2>
          <div className="detailsContainer">
            <div>
              <img
                className="sprite"
                src={details.sprites.front_default}
                alt="pokemon"
              />
              {evolutionChain && (
                <p className="evolution">
                  evolution {evolutionChain.map((x) => x + ' ')}
                </p>
              )}
            </div>
            <div>
              <p>
                <img src={atk} alt="attack" id="atk" />{' '}
                {details.stats[1].base_stat}
              </p>
              <p>
                <img src={def} alt="defence" id="def" />{' '}
                {details.stats[2].base_stat}
              </p>
              <p>
                <img src={hp} alt="hitpoints" id="hp" />{' '}
                {details.stats[0].base_stat}
              </p>
              <p>
                <img src={speed} alt="speed" id="speed" />{' '}
                {details.stats[5].base_stat}
              </p>
              <p id="type">{details.types.length === 1 ? 'type' : 'types'}</p>
              {details.types.map((x) => (
                <p className="type" key={x.type.name}>
                  {x.type.name}
                </p>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
