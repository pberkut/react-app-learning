import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

const styles = { form: { marginBottom: 20 } };

export const PokemonForm = ({ onSubmit }) => {
  const [pokemonName, setPokemonName] = useState('');

  const handleNameChange = e => {
    setPokemonName(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (pokemonName.trim() === '') {
      toast.error('Enter name Pokemon');
      return;
    }
    onSubmit(pokemonName);
    setPokemonName('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        name="pokemonName"
        value={pokemonName}
        onChange={handleNameChange}
        autoFocus
      />
      <button type="submit">
        <ImSearch style={{ marginRight: 8 }} />
        Search
      </button>
    </form>
  );
};
