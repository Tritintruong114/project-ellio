import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../config/firebaseConfig";
import { AuthContext } from "../context/authProvider";
function Trading() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.isLogin) {
      navigate("/login");
    }
  }, []);
  return <div>Trading</div>;
}

export default Trading;
