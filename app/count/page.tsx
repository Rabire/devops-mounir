"use client";

import Count from "@/components/Count";
import React from "react";
import Image from "next/image";
import useFetchStats from "@/hooks/useFetchStats";

const DATA = [
  { city: "Dieppe", count: 11190, img: "/dieppe.jpg" },
  { city: "Marseille", count: 334, img: "/marseille.jpg" },
  { city: "Berk-sur-mer", count: 2220, img: "/berk.jpg" },
];

const CountPage = () => {
  const { stats } = useFetchStats(true);

  return (
    <main>
      <h1 className="text-3xl text-center my-8 mx-auto bg-white p-4 fixed w-full">
        Cefs volants en temps reel
      </h1>

      <div className="grid grid-cols-3">
        {stats?.stats.map((el) => (
          <div
            key={el.location}
            className="flex flex-col items-center justify-center h-screen relative"
          >
            <Image
              src={el.img}
              alt="bg"
              fill
              className="-z-10 object-cover opacity-60"
            />
            <h2 className="text-xl font-bold mb-6">{el.location}</h2>
            <Count count={el.kiteNumber} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default CountPage;
