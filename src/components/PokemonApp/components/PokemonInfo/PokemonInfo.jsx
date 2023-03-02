import { Component } from 'react';

export class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevSate) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      console.log('Change props');
      console.log('prevName: ', prevName);
      console.log('nextName ', nextName);

      this.setState({ loading: true });
      fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(
            new Error(`No Pokemon witt this name ${nextName} `)
          );
        })
        .then(pokemon => this.setState({ pokemon }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { pokemon, loading, error } = this.state;
    const { pokemonName } = this.props;
    return (
      <div>
        <h1>PokemonInfo</h1>
        {error && (
          <div>
            <h1>Error! Pokemon with name - {pokemonName} undefined</h1>
            <p>Status error: {error.message}</p>
          </div>
        )}
        {loading && <div>Loading...</div>}
        {!pokemonName && <div>Enter name pokemon</div>}
        {pokemon && (
          <div>
            <p>{pokemon.name}</p>
            <img
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt={pokemon.name}
              width="240"
            />
          </div>
        )}
      </div>
    );
  }
}
