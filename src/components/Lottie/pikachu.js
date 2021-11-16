import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const Pikachu = () => {
  const elementopika = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: elementopika.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../images/pikachu.json"),
    });
    return () => {
      lottie.destroy();
    };
  }, []);

  return (
    <>
    
        <div
        
          ref={elementopika}
         
        ></div>
     
    </>
  );
};

export default Pikachu;