import { useTranslation } from 'react-i18next';
import Board from 'react-trello';

import CustomCard from './CustomCard';
import CustomLaneHeader from './CustomLaneHeader';

import './ServiceBoard.css';

export default function ServiceBoard({ data = [], onCardClick }) {
  const { t } = useTranslation();

  const onCardClickHandler = (cardId, cardDetails, laneId) => onCardClick(cardId, cardDetails, laneId);

  const onCardDragEndHandler = (cardId, sourceLaneId, targetLaneId, position, cardDetails) => {
    alert(`${cardId} moved from ${sourceLaneId} to ${targetLaneId} to ${position}`);
    console.log(`${cardId} moved from ${sourceLaneId} to ${targetLaneId} to ${position}: `, cardDetails);
  };

  const onLaneClickHandler = (laneId) => console.log(`${laneId} clicked`);

  const onDataChangeHandler = (newData) => console.log(`Data Changed: `, newData);

  return (
    <Board
      components={{ Card: CustomCard, LaneHeader: CustomLaneHeader }}
      data={{ lanes: data }}
      tagStyle={{ fontSize: '80%' }}
      style={{
        backgroundColor: 'transparent',
        height: '75vh'
        // overflowY: 'auto'
      }}
      onCardClick={onCardClickHandler}
      handleDragEnd={onCardDragEndHandler}
      onLaneClick={onLaneClickHandler}
      onDataChange={onDataChangeHandler}
    />
  );
}
