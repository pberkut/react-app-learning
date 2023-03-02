import errorImage from '../../image/error.jpg';

export const PokemonErrorView = ({ message }) => (
  <div role="alert">
    <img src={errorImage} alt="sadcat" width="240" />
    <p>{message}</p>
  </div>
);
