import React from "react";
import jsBadge from "../assets/images/js-badge.svg";

export interface ICard {
  id: string; 
  name: string;
  image: string;
  order: number;
  isFlipped?: boolean;
  passed?: boolean;
}

interface GameCardProps {
  card: ICard;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const GameCard: React.FC<GameCardProps> = ({ card, onClick }) => {
  return (
    <div
      className={`memory-card${card.isFlipped ? " flip" : ""}`}
      onClick={onClick}
      style={{ order: card.order }}
      data-testid={card.id}
    >
      <img className="front-face" src={card.image} alt="Card" />
      <img className="back-face" src={jsBadge} alt="JS Badge" />
    </div>
  );
};

export default GameCard;
