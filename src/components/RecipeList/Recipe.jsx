import PropTypes from 'prop-types';

import { BsAlarm } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { HiOutlineChartBar } from 'react-icons/hi';

export const Recipe = ({ item: { name, image, time, servings, calories } }) => {
  return (
    <div>
      <img src={image} alt={name} width="240" />
      <h2>{name}</h2>

      <div>
        <div>
          <BsAlarm size={25} />
          {time} min
        </div>
        <div>
          <AiOutlinePieChart size={25} />
          {servings} servings
        </div>
        <div>
          <HiOutlineChartBar size={25} />
          {calories} calories
        </div>
      </div>

      <div>
        <h3>Difficulty</h3>
        <div>
          <span>Easy</span>
          <span>Medium</span>
          <span>Hard</span>
        </div>
      </div>
    </div>
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
