import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../config/firebaseConfig";
import { AuthContext } from "../context/authProvider";
import { client } from "../lib/client";
import { format } from "date-fns";

function Trading() {
  const [stories, setStories] = useState([]);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.isLogin) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        body,
        publishedAt,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt,
        },
        "name": author -> name,
      }`
      )
      .then((data) => {
        console.log(data);
        setStories(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section>
      <h1 className="text-center font-bold ">This is trading ideas</h1>
      <div className="grid grid-cols-2 text-center">
        {stories?.map((idea) => {
          return (
            <div>
              <h1 key={idea.slug.current}>{idea.title}</h1>
              <img></img>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Trading;
