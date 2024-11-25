import React from "react";
import { BentoGrid } from "react-bento";

interface MyBentoGridProps {
  items: {
    id: number;
    width: number;
    height: number;
    children: React.ReactNode;
  }[];
}

const MyBentoGrid: React.FC<MyBentoGridProps> = ({ items }) => {
  return (
    <div className="container mx-auto">
    <BentoGrid
      items={items.map((item) => ({
        ...item,
        key: item.id, 
      }))}
      gridCols={10}
      rowHeight={100}
      classNames={{
        container: "grid gap-7",
      }}
    />
    </div>
  );
};

export default MyBentoGrid;
