import React from "react";

type Props = {
  title: string;
  text: string;
};

const Card = ({ title, text }: Props) => (
  <div className="bg-white rounded">
    <div className="bg-gray-200 w-full h-52" />
    <div className="p-4">
      <p className="font-semibold ">{title}</p>
      <p>{text}</p>
    </div>
  </div>
);

export default Card;
