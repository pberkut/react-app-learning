import PropTypes from 'prop-types';

import { BsAlarm } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { HiOutlineChartBar, HiTrash, HiZoomIn } from 'react-icons/hi';

import {
  Actions,
  Badge,
  Container,
  Image,
  InfoItem,
  Meta,
  RecipeDifficulty,
  RecipeInfo,
  Title,
} from './Recipe.styled';

export const Recipe = ({
  item: { name, image, time, servings, calories, difficulty },
}) => {
  return (
    <Container>
      <Image src={image} alt={name} />
      <Meta>
        <Title>{name}</Title>

        <RecipeInfo>
          <InfoItem>
            <BsAlarm />
            {time} min
          </InfoItem>
          <InfoItem>
            <AiOutlinePieChart />
            {servings} servings
          </InfoItem>
          <InfoItem>
            <HiOutlineChartBar />
            {calories} calories
          </InfoItem>
        </RecipeInfo>

        <RecipeDifficulty>
          {/* <h3>Difficulty</h3> */}

          <Badge isActive={difficulty === 'easy'} value={difficulty}>
            Easy
          </Badge>
          <Badge isActive={difficulty === 'medium'} value={difficulty}>
            Medium
          </Badge>
          <Badge isActive={difficulty === 'hard'} value={difficulty}>
            Hard
          </Badge>
        </RecipeDifficulty>
      </Meta>
      <Actions>
        <button>
          <HiTrash />
        </button>
        <button>
          <HiZoomIn />
        </button>
      </Actions>
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
