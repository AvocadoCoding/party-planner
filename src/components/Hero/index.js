import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }} alt="Picture of Aurora Borealis">
      {props.children}
    </div>
  );
  
  // return (
  //   <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
  //   <div style="width:100%;height:0;padding-bottom:47%;position:relative;">
  //     <iframe src="https://giphy.com/embed/sULKEgDMX8LcI" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
  //   </div>
  // );
}

export default Hero;
