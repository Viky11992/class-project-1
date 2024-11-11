import React from "react";
import Image from "next/image";
import Bg from '../../../public//images//pngegg (1).png';

import Nev from '../components/nev';

function politcs() {
  return (
    <div className="h-screen w-screen bg-zinc-950 relative overflow-hidden">
      <Image
        src={Bg}
        alt="image"
        className="h-full w-full absolute opacity-30"
      ></Image>
      <Nev />
      <div className="h-full w-full ">
        <div className="h-2/4 w-4/5  ml-36 p-4 ">
          <h1 className="font-bold text-4xl text-red-700 text-center p-2 capitalize">
            overview
          </h1>
          <h1 className="font-semibold text-white capitalize text-1xl">
            Founding Pakistan Tehreek-e-Insaf PTI 1996 After a highly
            successful cricket career, including leading Pakistan to a World Cup
            victory in 1992 Imran Khan transitioned to politics with the aim of
            reforming the country He founded PTI on April 25 1996 Key Points:
            PTIs early mission focused on fighting corruption establishing
            justice and improving governance in Pakistan Initially PTI
            struggled to gain significant political traction with Imran being
            the sole party member to win a seat in the 2002 general elections
            2 Early Struggles and Opposition Politics 1996 to 2011 For over a
            decade, PTI remained a minor political force, and Imran Khan worked
            persistently to build the partys structure and support base. Key
            Points: PTI boycotted the 2008 general elections, Imran Khans
            popularity surged in the late 2005 especially among young voters
            and the urban middle class His strong stance against corruption and
            foreign military involvement in Pakistans affairs resonated with
            many This period saw Khan actively opposing US drone strikes and
            Pakistans alliance in the War on Terror
          </h1>
        </div>
        <div className="h-60 w-full mt-1 flex">
          <div className="h-full w-1/4 p-4">
            <h1 className="text-2xl text-center text-red-700 font-sans font-bold">
              Early Struggles
            </h1>
            <p className=" text-l text-white font-semibold font-serif">
              PTIs performance in the 1997 and 2002 general elections was
              disappointing, with limited success Khan was a vocal critic of
              corruption in government and advocated for transparency and
              accountability though it took time for these messages to resonate
              with the public.
            </p>
          </div>
          <div className="h-full w-1/4 p-4">
            <h1 className="text-2xl text-center text-red-700 font-sans font-bold">
              2013 Elections
            </h1>
            <p className=" text-l text-white font-semibold font-serif">
              PTI emerged as a major political force in the 2013 general
              elections becoming the second-largest party in terms of votes and
              the third largest in the National Assembly Khans campaign
              emphasized a New Pakistan focused on justice healthcare and
              education
            </p>
          </div>
          <div className="h-full w-1/4 p-4">
            <h1 className="text-2xl text-center text-red-700 font-sans font-bold">
              2018 Elections
            </h1>
            <p className=" text-l text-white font-semibold font-serif">
              PTI achieved its greatest success in the 2018 general elections
              securing a majority in the National Assembly Imran Khan was
              elected Prime Minister of Pakistan His campaign focused on
              anti corruption, social welfare programs and improving Pakistans
              international image
            </p>
          </div>
          <div className="h-full w-1/4 p-4">
            <h1 className="text-2xl text-center text-red-700 font-sans font-bold">
              As Prime Minister
            </h1>
            <p className=" text-l text-white font-semibold font-serif">
              As Prime Minister Khan initiated various reforms including
              launching the Ehsaas Program for poverty alleviation and focusing
              on the countrys financial stability He also advocated for
              foreign policy independence and acoordin to country intrest not
              others
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default politcs;
