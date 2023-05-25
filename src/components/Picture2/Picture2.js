import React, { useState } from "react";
import PictureContainer2 from "./Picture2.styles";

function Picture2({ src }) {
  const [className, setClassname] = useState("dnone");

  if(className === "active") {
    document.body.classList.add('active-pic')
  } else {
    document.body.classList.remove('active-pic')
  }
  
  return (
    <PictureContainer2>
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
    </PictureContainer2>
  );
}

export default Picture2;
