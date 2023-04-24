import React from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  console.log(id);
  return <div>Detail: this is page detail {id}</div>;
}

export default Detail;
