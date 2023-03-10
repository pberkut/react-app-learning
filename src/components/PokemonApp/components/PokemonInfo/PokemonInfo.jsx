import { useEffect, useState } from 'react';
import { PokemonDataView } from '../PokemonDataView/PokemonDataView';
import { PokemonErrorView } from '../PokemonErrorView';
import { PokemonPendingView } from '../PokemonPendingView';
import pokemonAPI from '../../services/pokemon-api';

/*
Паттерн state machine pattern - Стейт Машина
У нас будет 4 состояния:
 'idle' - простой, стоит на месте
 'pending' - ожидается выполнение
 'resolved' - Выполнилось с результатом, это хорошо
 'rejected' - отклонено, результата нет
*/

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const PokemonInfo = ({ pokemonName }) => {
  // Вариант № 1
  //   state = {
  //     pokemon: null,
  //     loading: false,
  //     error: null,
  //     status: 'idle',
  //   };

  // state = {
  //   pokemon: null,
  //   error: null,
  //   status: 'idle',
  // };

  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  // Вариант № 1
  //   componentDidUpdate(prevProps, prevSate) {
  //     const prevName = prevProps.pokemonName;
  //     const nextName = this.props.pokemonName;

  //     if (prevName !== nextName) {
  //       console.log('Change props');
  //       console.log('prevName: ', prevName);
  //       console.log('nextName ', nextName);

  //       this.setState({ loading: true, pokemon: null });
  //       fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
  //         .then(response => {
  //           if (response.ok) {
  //             return response.json();
  //           }

  //           return Promise.reject(
  //             new Error(`No Pokemon witt this name ${nextName} `)
  //           );
  //         })
  //         .then(pokemon => this.setState({ pokemon }))
  //         .catch(error => this.setState({ error }))
  //         .finally(() => this.setState({ loading: false }));
  //     }
  //   }

  useEffect(() => {
    if (!pokemonName) {
      return;
    }

    setStatus(Status.PENDING);

    pokemonAPI
      .fetchPokemon(pokemonName)
      .then(pokemon => {
        setPokemon(pokemon);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [pokemonName]);

  // componentDidUpdate(prevProps, prevSate) {
  //   const prevName = prevProps.pokemonName;
  //   const nextName = this.props.pokemonName;

  //   if (prevName !== nextName) {
  //     //   console.log('Change props');
  //     //   console.log('prevName: ', prevName);
  //     //   console.log('nextName ', nextName);

  //     this.setState({ status: 'pending' });

  //     pokemonAPI
  //       .fetchPokemon(nextName)
  //       .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
  //       .catch(error => this.setState({ error, status: 'rejected' }));
  //   }
  // }

  /* 
    'idle'
    'pending'
    'resolved'
    'rejected'
*/

  // Вариант №1
  // const { pokemon, loading, error, status } = this.state;
  // const { pokemonName } = this.props;

  // const { pokemon, error, status } = this.state;
  // const { pokemonName } = this.props;

  if (status === Status.IDLE) {
    return <div>Enter name pokemon</div>;
  }

  if (status === Status.PENDING) {
    // Компонент со скелетоном
    return <PokemonPendingView pokemonName={pokemonName} />;
    //   return <div>Loading...</div>;
  }

  if (status === Status.REJECTED) {
    return <PokemonErrorView message={error.message} />;
    // <p>Status error: {error.message}</p>;
  }

  if (status === Status.RESOLVED) {
    return <PokemonDataView pokemon={pokemon} />;

    //   return (
    //     <div>
    //       <p>{pokemon.name}</p>
    //       <img
    //         src={pokemon.sprites.other['official-artwork'].front_default}
    //         alt={pokemon.name}
    //         width="240"
    //       />
    //     </div>
    //   );
  }

  // Вариант № 1
  // return (
  //   <div>
  //     <h1>PokemonInfo</h1>
  //     {error && (
  //       <div>
  //         {/*  Это я использую как своё сообщение для пользователя. Это я оставил для себя для примера*/}
  //         {/* <h1>Error! Pokemon with name - {pokemonName} undefined</h1> */}
  //         {/* Это я использую сообщение с обработчика. Статус ошибки. Вот так обрабатывается правильно ошибка  */}
  //         <p>Status error: {error.message}</p>
  //       </div>
  //     )}
  //     {loading && <div>Loading...</div>}
  //     {!pokemonName && <div>Enter name pokemon</div>}
  //     {pokemon && (
  //       <div>
  //         <p>{pokemon.name}</p>
  //         <img
  //           src={pokemon.sprites.other['official-artwork'].front_default}
  //           alt={pokemon.name}
  //           width="240"
  //         />
  //       </div>
  //     )}
  //   </div>
  // );
};
