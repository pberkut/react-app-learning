import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { PokemonForm } from './components/PokemonForm';
import 'react-toastify/dist/ReactToastify.css';
import { PokemonInfo } from './components/PokemonInfo';
import './styles.css';

export const PokemonApp = () => {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
      <PokemonForm onSubmitNameProps={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
      <ToastContainer autoClose={3000} />
    </div>
  );
};
