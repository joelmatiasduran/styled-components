import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const BitcoinLottie = () => {
  const elementottie = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: elementottie.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../images/bitcoinlottie.json"),
    });
    return () => {
      lottie.destroy();
    };
  }, []);

  return (
    <>
    
        <div
        
          ref={elementottie}
         
        ></div>
     
    </>
  );
};

export default BitcoinLottie;