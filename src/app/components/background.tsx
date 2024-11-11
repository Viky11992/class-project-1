import React from "react";
import Hero from "./hero";
import Nev from "./nev";
import Image from "next/image";
import myImage from '../../../public/images/background.jpg';


function backGround() {
  return (
    <div className="h-screen w-screen">
        <Image
          src={myImage}
          alt="image"
          className="bg-center bg-cover h-screen w-screen object-cover absolute "
          />
          <Nev/>
          <Hero/>
 
      <div >
      </div>
    </div>
  );
}

export default backGround;
