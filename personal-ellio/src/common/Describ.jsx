import React from "react";

function Describ({ desc }) {
  return (
    <div className="flex items-center">
      <img
        className="h-6"
        src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png"
      ></img>
      <p className="text-sm">{desc}</p>
    </div>
  );
}

export default Describ;
