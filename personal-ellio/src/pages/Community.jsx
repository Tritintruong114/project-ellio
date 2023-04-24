import React from "react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authProvider";
function Community() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.isLogin) {
      navigate("/login");
    }
  }, []);
  return <div className="">Comunity</div>;
}

export default Community;
