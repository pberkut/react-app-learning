import PropTypes from 'prop-types';
import { Recipe } from './Recipe';
import { RecipleCardList } from './RecipleList.styled';

export const RecipeList = ({ items }) => {
  return (
    <RecipleCardList>
      {items.map(item => (
        <li key={item.id}>
          <Recipe item={item} />
        </li>
      ))}
    </RecipleCardList>
  );
};

RecipeList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
