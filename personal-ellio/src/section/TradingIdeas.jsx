import React, { useEffect } from "react";
import { createContext, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import fetchData from "../features/fetchData";

export function IdeaCard({ urlImage, date, status, slug }) {
  return (
    <div className="w-2/5  gap-1 flex justify-center rounded-xl items-center flex-col bg-gray-800 text-white p-1">
      <h1 className="w-full text-xs md:text-lg xl:text-xl text-center">
        👑GOLD {status}
      </h1>
      <p className="text-xs text-opacity-60 text-white">{date}</p>
      <img className="rounded-3xl object-cover h-full" src={urlImage}></img>
      <Link
        to={`trading/${slug}`}
        className="w-fit rounded-full px-3 md:px-6 text-center py-2 sm:py-2 bg-white bg-opacity-30 hover:text-white hover:bg-red-600 "
      >
        See more
      </Link>
    </div>
  );
}
function TradingIdeas() {
  const { posts } = useSelector((store) => store.fetchData);

  return (
    <div className="flex w-full gap-3  p-3 justify-around">
      {posts?.slice(0, 3).map((post) => (
        <IdeaCard
          status={post.title}
          // date={post}
          urlImage={post.mainImage.asset.url}
          slug={post.slug.current}
        />
      ))}
    </div>
  );
}

export default TradingIdeas;
