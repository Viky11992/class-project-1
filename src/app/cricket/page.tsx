import React from "react";
import Image from "next/image";
import Cover from "../../../public/images/jugni.jpg";
import Pic from "../../../public//images//jjjj.jpg";
import Pic2 from "../../../public//images/gettyimages-1641569-612x612.jpg";
import Pic3 from '../../../public/images/world cup.jpg';
import Pic4 from '../../../public/images//young (2).png';
import Nev from '../components/nev';

function cricket() {
  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <Image src={Cover} alt='cover-image' className="h-ful w-full bg-center bg-cover absolute opacity-40"/>

      <Nev />
      <div className="h-full w-full p-10 flex gap-20 relative">
        <div className="h-1/3 w-1/5  rounded p-4">
          <Image src={Pic} alt="images" className="h-full w-full hover:p-2 " />
          <h1 className="mt-5 text-2xl font-sans font-bold text-red-600 capitalize ">
            debu:
          </h1>
          <p className="text-sm font-serif font-semibold text-black capitalize ">
            Imran Khan made his debut for Pakistan in Test cricket in 1971
            against England at the age of 18. His One Day International (ODI)
            debut followed in 1974. Development: Initially, Imran was known more
            for his bowling, a fast bowler with pace and aggression. Over time,
            he evolved into a formidable all-rounder, known for his lethal swing
            bowling and powerful batting.
          </p>
        </div>
        <div className="h-1/3 w-1/5 rounded p-4 ">
          <Image src={Pic2} alt="images" className="h-full w-full hover:p-2 " />
          <h1 className="mt-5 text-2xl font-sans font-bold text-red-600 capitalize ">
          Becoming Captain:
          </h1>
          <p className="text-sm font-serif font-semibold text-black capitalize ">
          Imran Khan took over the captaincy of Pakistan in 1982. Under his leadership, Pakistan grew into a competitive force in world cricket. He led the team with a mixture of passion, resilience, and tactical acumen.
          Leadership Style: As a captain, he inspired his teammates to perform beyond expectations.
          </p>
        </div>
        <div className="h-1/3 w-1/5 rounded p-4 ">
          <Image src={Pic3} alt="images" className="h-full w-full hover:p-2" />
          <h1 className="mt-5 text-2xl font-sans font-bold text-red-600 capitalize ">
          The World Cup:
          </h1>
          <p className="text-sm font-serif font-semibold text-black capitalize ">
          992 Cricket World Cup: Imran Khans greatest achievement came at the twilight of his career when he led Pakistan to its first and only World Cup victory in 1992. Pakistan had a shaky start in the tournament, but under his inspirational leadership, they bounced back and won the final against England. His iconic speech before the final, where he urged his team to fight like cornered tigers, remains legendary.
          </p>
        </div>
        <div className="h-1/3 w-1/5 rounded p-4 ">
          <Image src={Pic4} alt="images" className="h-full w-full hover:p-2 " />
          <h1 className="mt-5 text-2xl font-sans font-bold text-red-600 capitalize ">
          Retirement:
          </h1>
          <p className="text-sm font-serif font-semibold text-black capitalize ">Retirement After the World Cup: Following the World Cup victory, Imran Khan retired from international cricket at the age of 39. His legacy as one of the greatest all-rounders was cemented, with his ability to single-handedly change the course of a game with either bat or ball.</p>
        </div>
      </div>
     
    </div>
  );
}

export default cricket;
