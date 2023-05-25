import mainphoto1 from "../../assets/mainphoto.png";
import mainphoto2 from "../../assets/mainphoto2.png";
import mainphoto3 from "../../assets/mainphoto3.png";
import React, { useState,useEffect } from "react";
import MainContainer from "./Main.styles";
import pj2 from '../../assets/pj2.png'

const banners = [
  {
    bgimage: mainphoto1,
    mbimage:pj2
  },
  {
    bgimage: mainphoto2,
    mbimage:pj2
  },
  {
    bgimage: mainphoto3,
    mbimage:pj2
  },
];

function Main() {

  const [index, setIndex] = useState(0);

  const changeBanner = () => {
    setIndex((prevIndex) => {
      if (prevIndex >= banners.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const prevBanner = () => {
    setIndex((prevIndex) => {
      if (prevIndex === 0) {
        return banners.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(changeBanner, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <MainContainer bgimage={banners[index].bgimage}  mbimage={banners[index].mbimage}>
      
    
        {/* <button className="leftbutton" onClick={prevBanner}>
          {"<"}
        </button>
        <button className="rightbutton" onClick={changeBanner}>
          {">"}
        </button> */}
      
    </MainContainer>
  );
}

export default Main;