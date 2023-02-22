import PropTypes from 'prop-types';

import { BsAlarm } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { HiOutlineChartBar } from 'react-icons/hi';
import {
  Badge,
  BadgeList,
  Container,
  Image,
  InfoItem,
  RecipeDifficulty,
  RecipeInfo,
} from './Recipe.styled';

export const Recipe = ({ item: { name, image, time, servings, calories } }) => {
  return (
    <Container>
      <Image src={image} alt={name} width="240" />
      <h2>{name}</h2>

      <RecipeInfo>
        <InfoItem>
          <BsAlarm size={25} />
          {time} min
        </InfoItem>
        <div>
          <AiOutlinePieChart size={25} />
          {servings} servings
        </div>
        <div>
          <HiOutlineChartBar size={25} />
          {calories} calories
        </div>
      </RecipeInfo>

      <RecipeDifficulty>
        <h3>Difficulty</h3>
        <BadgeList>
          <Badge>Easy</Badge>
          <Badge>Medium</Badge>
          <Badge>Hard</Badge>
        </BadgeList>
      </RecipeDifficulty>
    </Container>
  );
};

Recipe.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }).isRequired,
};
