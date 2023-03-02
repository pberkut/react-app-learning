import { Component } from 'react';
import { PokemonDataView } from '../PokemonDataView/PokemonDataView';
import { PokemonErrorView } from '../PokemonErrorView';
import { PokemonPendingView } from '../PokemonPendingView';

/*

Паттерн state machine pattern - Стейт Машина
У нас будет 4 состояния:
 'idle' - простой, стоит на месте
 'pending' - ожидается выполнение
 'resolved' - Выполнилось с результатом, это хорошо
 'rejected' - отклонено, результата нет

*/
export class PokemonInfo extends Component {
  // Вариант № 1
  //   state = {
  //     pokemon: null,
  //     loading: false,
  //     error: null,
  //     status: 'idle',
  //   };

  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  };

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

  componentDidUpdate(prevProps, prevSate) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      //   console.log('Change props');
      //   console.log('prevName: ', prevName);
      //   console.log('nextName ', nextName);

      this.setState({ status: 'pending' });
      fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(
            new Error(`No Pokemon witt this name ${nextName} `)
          );
        })
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  /* 
    'idle'
    'pending'
    'resolved'
    'rejected'
*/

  render() {
    // Вариант №1
    // const { pokemon, loading, error, status } = this.state;
    // const { pokemonName } = this.props;

    const { pokemon, error, status } = this.state;

    if (status === 'idle') {
      return <div>Enter name pokemon</div>;
    }

    if (status === 'pending') {
      return <PokemonPendingView />;
      //   return <div>Loading...</div>;
    }

    if (status === 'rejected') {
      return <PokemonErrorView message={error.message} />;
      // <p>Status error: {error.message}</p>;
    }

    if (status === 'resolved') {
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
  }
}
