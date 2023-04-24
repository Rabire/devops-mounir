import React from "react";

type Props = {
  count: number;
};

const Count = ({ count }: Props) => {
  const formatedCount = count.toString().split("");

  return (
    <div className="border-8 border-black rounded-md">
      {formatedCount.map((char, index) => (
        <span
          key={index}
          className="p-1 text-white bg-gray-800 last:text-black last:bg-purple-500"
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default Count;
