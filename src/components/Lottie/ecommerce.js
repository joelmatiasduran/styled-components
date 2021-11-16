import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const Ecommerce = () => {
  const elementomerce = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: elementomerce.current,
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
        
          ref={elementomerce}
         
        ></div>
     
    </>
  );
};

export default Ecommerce;