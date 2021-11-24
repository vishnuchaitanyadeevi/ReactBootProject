import { useTranslation } from 'react-i18next';
import Board from 'react-trello';

import CustomCard from './CustomeCard';
import CustomLaneHeader from './CustomLaneHeader';

import { serviceData } from './data';

import './ServiceBoard.css';

export default function ServiceBoard() {
  const { t } = useTranslation();

  const onCardClickHandler = (cardId, cardDetails, laneId) => {
    alert(`${cardId} clicked from ${laneId}`);
    console.log(`${cardId} clicked from ${laneId}: `, cardDetails);
  };

  const onCardDragEndHandler = (cardId, sourceLaneId, targetLaneId, position, cardDetails) => {
    alert(`${cardId} moved from ${sourceLaneId} to ${targetLaneId} to ${position}`);
    console.log(`${cardId} moved from ${sourceLaneId} to ${targetLaneId} to ${position}: `, cardDetails);
  };

  const onLaneClickHandler = (laneId) => {
    alert(`${laneId} clicked`);
    console.log(`${laneId} clicked`);
  };

  const onDataChangeHandler = (newData) => console.log(`Data Changed: `, newData);

  return (
    <Board
      components={{ Card: CustomCard, LaneHeader: CustomLaneHeader }}
      data={serviceData}
      draggable
      tagStyle={{ fontSize: '80%' }}
      style={{
        backgroundColor: '#000'
      }}
      onCardClick={onCardClickHandler}
      handleDragEnd={onCardDragEndHandler}
      onLaneClick={onLaneClickHandler}
      onDataChange={onDataChangeHandler}
    />
  );
}
