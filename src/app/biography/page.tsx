import React from "react";
import Image from "next/image";
import Bg from '../../../public/images/ik.jpg';

import Nev from "../components/nev";

function biography() {
  return (
    <div className="h-screen w-screen bg-zinc-950 relative overflow-hidden">
      <Image
        src={Bg}
        alt="image"
        className="h-full w-full absolute opacity-30"
      ></Image>

      <Nev />
      <div className="h-full w-4/5 bg-zinc-50 ml-40 rounded p-5">
        <h1 className="text-red-600 relative text-bold text-4xl capitalize font-bold hover:text-white">
          early life:
        </h1>
        <p className="text-zinc-800 relative text-bold text-1xl capitalize font-semibold">
          Born on October 5 1952, in Lahore Pakistan. Educated at Aitchison
          College in Lahore and later at the University of Oxford where he
          studied Philosophy Politics, and Economics PPE
        </p>
        <h1 className="text-red-600 relative text-bold text-4xl capitalize font-bold hover:text-white">
          cricket carrer:
        </h1>
        <p className="text-zinc-800 relative text-bold text-1xl capitalize font-semibold">
          Joined Pakistans national cricket team in 1971 Captained Pakistan to
          win the 1992 Cricket World Cup marking a historic victory Retired
          from cricket as a legendary allrounder with a celebrated career
        </p>
        <h1 className="text-red-600 relative text-bold text-4xl capitalize font-bold hover:text-white">
          philantrophy:
        </h1>
        <p className="text-zinc-800 relative text-bold text-1xl capitalize font-semibold">
          Founded the Shaukat Khanum Memorial Cancer Hospital in 1994 inspired
          by his mothers battle with cancer Established Namal University to
          provide quality education to rural communities
        </p>
        <h1 className="text-red-600 relative text-bold text-4xl capitalize font-bold hover:text-white">
          Political Career:
        </h1>
        <p className="text-zinc-800 relative text-bold text-1xl capitalize font-semibold">
          Founded the political party Pakistan TehreekeInsaf PTI in 1996
          aiming to bring justice accountability and anticorruption reforms.
          Led PTI to win the 2018 general elections and became the 22nd Prime
          Minister of Pakistan His tenure focused on economic reform
          anti corruption measures and foreign policy
        </p>
        <h1 className="text-red-600 relative text-bold text-4xl capitalize font-bold hover:text-white">
        Legacy and Influence:
        </h1>
        <p className="text-zinc-800 relative text-bold text-1xl capitalize font-semibold">
        Imran Khan remains a prominent figure in Pakistan known for his contribution to sports philanthropy and politics
        His legacy is defined by his commitment to social justice healthcare reform and improving education in Pakistan
        alos engage the youth op pakistan in political and gave wisdom about our basic fundamentals
        </p>
      </div>
    </div>
  );
}

export default biography;
