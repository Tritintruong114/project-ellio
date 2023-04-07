import React from "react";
import { createContext, useContext } from "react";
import { Link } from "react-router-dom";

export function IdeaCard({ urlImage, date, status }) {
  return (
    <div className="w-2/5  gap-1 flex justify-center rounded-xl items-center flex-col bg-gray-800 text-white p-1">
      <h1 className="w-full text-xs md:text-lg xl:text-xl text-center">
        👑GOLD {status}
      </h1>
      <p className="text-xs text-opacity-60 text-white">{date}</p>
      <img className="rounded" src={urlImage}></img>
      <Link className="w-fit rounded-full px-1 text-xs text-center py-1 bg-white bg-opacity-30 hover:text-red-600 ">
        See more
      </Link>
    </div>
  );
}
function TradingIdeas() {
  return (
    <div className="flex w-full gap-3  p-3 justify-around">
      <IdeaCard
        status={"BUY"}
        date={"22/3/2022"}
        urlImage={"https://s3.tradingview.com/b/B0DKHk1H_mid.webp"}
      />
      <IdeaCard
        date={"22/3/2022"}
        status={"SELL"}
        urlImage={"https://s3.tradingview.com/b/B0DKHk1H_mid.webp"}
      />
      <IdeaCard
        status={"SELL"}
        date={"22/3/2022"}
        urlImage={"https://s3.tradingview.com/b/B0DKHk1H_mid.webp"}
      />
    </div>
  );
}

export default TradingIdeas;
