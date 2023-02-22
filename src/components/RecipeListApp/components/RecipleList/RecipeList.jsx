import PropTypes from 'prop-types';
import { Recipe } from '../Reciple/Recipe';
import { RecipleCardList, ListItem } from './RecipleList.styled';

export const RecipeList = ({ items }) => {
  return (
    <RecipleCardList>
      {items.map(item => (
        <ListItem key={item.id}>
          <Recipe item={item} />
        </ListItem>
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
