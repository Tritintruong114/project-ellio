import React from "react";
// import {} from "";
import { useEffect, useContext } from "react";
import { AuthContext } from "../context/authProvider";
import { useNavigate } from "react-router-dom";

function Education() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.isLogin) {
      navigate("/login");
    }
  }, []);
  return <div>Education</div>;
}

export default Education;
