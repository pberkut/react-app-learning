import PropTypes from 'prop-types';
import { useState } from 'react';

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
import { Modal } from '../Modal/Modal';

export const Recipe = ({
  item: { id, name, image, time, servings, calories, difficulty },
  onDelete,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

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

        <Actions>
          <button onClick={() => onDelete(id)} arial-label="Delete">
            <HiTrash />
          </button>
          <button onClick={openModal} arial-label="Zoom">
            <HiZoomIn />
          </button>
        </Actions>
      </Meta>
      {isOpen && (
        <Modal name={name} image={image} isOpen={isOpen} onClose={closeModal} />
      )}
    </Container>
  );
};

Recipe.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
