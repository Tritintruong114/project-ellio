import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../config/firebaseConfig";
import { AuthContext } from "../context/authProvider";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../features/fetchData";

function Trading() {
  const { posts } = useSelector((store) => store.fetchData);
  const dispatch = useDispatch();

  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.isLogin) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <section className="px-6 font-poppins">
      <h1 className="text-center py-10 text-6xl font-bold ">Trading ideas</h1>
      <div className="grid sm:grid-cols-2 text-center gap-3">
        {posts?.map((idea) => {
          return (
            <div
              className="w-full p-6  h-full bg-gray-800 text-white rounded-3xl"
              key={idea.slug.current}
            >
              <div className="w-full py-1 flex-col font-light items-center text-sm justify-center gap-3 flex">
                <Link to={`${idea.slug.current}`}>
                  <h1 className="text-3xl font-bold">{idea.title}</h1>
                </Link>
                <div className="flex gap-3 w-full items-center justify-center">
                  <p className="text-right">{idea.publishedAt.slice(0, 10)}</p>
                  <p className="font-handWrite">{idea.name ? idea.name : ""}</p>
                  {idea.authorPicture ? (
                    <img
                      className=" h-6 w-6 rounded-full object-cover"
                      src={idea.authorPicture}
                    ></img>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <Link to={`${idea.slug.current}`}>
                <img
                  className="w-full rounded-xl h-60 sm:h-96 object-cover"
                  src={idea.mainImage.asset.url}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Trading;
