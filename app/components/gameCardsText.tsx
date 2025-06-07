import aurelia from "./assets/images/aurelia.svg";
import angular from "./assets/images/angular.svg";
import ember from "./assets/images/ember.svg";
import vue from "./assets/images/vue.svg";
import backbone from "./assets/images/backbone.svg";
import reactImg from "./assets/images/react.svg"; // renamed to avoid conflict with react library

// We can define an ICard interface here as well or import from GameCard.tsx if you prefer.
// For this example, we'll define it again to ensure type compatibility.
export interface ICard {
  id: number;
  name: string;
  image: string;
  order: number;
  isFlipped: boolean;
  passed?: boolean;
}

const cards: ICard[] = [
  { id: 1, name: "aurelia", image: aurelia, order: 0, isFlipped: false },
  { id: 2, name: "aurelia", image: aurelia, order: 0, isFlipped: false },
  { id: 3, name: "angular", image: angular, order: 0, isFlipped: false },
  { id: 4, name: "angular", image: angular, order: 0, isFlipped: false },
  { id: 5, name: "ember", image: ember, order: 0, isFlipped: false },
  { id: 6, name: "ember", image: ember, order: 0, isFlipped: false },
  { id: 7, name: "vue", image: vue, order: 0, isFlipped: false },
  { id: 8, name: "vue", image: vue, order: 0, isFlipped: false },
  { id: 9, name: "backbone", image: backbone, order: 0, isFlipped: false },
  { id: 10, name: "backbone", image: backbone, order: 0, isFlipped: false },
  { id: 11, name: "react", image: reactImg, order: 0, isFlipped: false },
  { id: 12, name: "react", image: reactImg, order: 0, isFlipped: false },
];

export const cardsData: ICard[] = cards.map((card) => ({
  ...card,
  order: Math.floor(Math.random() * 12),
}));
