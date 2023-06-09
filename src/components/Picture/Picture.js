import React, { useState } from "react";
import PictureContainer from "./Picture.styles";

function Picture({ src }) {
  const [className, setClassname] = useState("dnone");

  
  return (
    <PictureContainer>
      <button onClick={() => setClassname("active")}>
        <img className="picture" src={src}></img>
      </button>

      <div className={className}>
        <div className="overlay">
          <div className="content">
            <img className="picturebig" src={src}></img>
          </div>
          <button className="closebutton" onClick={() => setClassname("dnone")}>X</button>
        </div>
      </div>
    </PictureContainer>
  );
}

export default Picture;
