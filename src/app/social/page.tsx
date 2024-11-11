import React from "react";
import Image from "next/image";
import Social from '../../../public/images/jan3.jpg';
import Hospital from "../../../public//images//jan5.png";
import Namal from '../../../public/images/jan7.jpg';
import Foundation from "../../../public/images/jan8.png";
import Nev from '../components/nev';

function social() {
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <Nev />
      <Image src={Social} alt="image" className="h-full w-full absolute" />
      <div className="h-2/6 w-full  relative">
        <Image
          src={Hospital}
          alt=""
          className=" h-full w-full opacity-50 absolute"
        />
        <h1 className="text-red-400 font-bold font-sans text-4xl capitalize text-center p-4 relative">
          shoukat khanam cancer hospital:
        </h1>
        <p className="p-4 font-serif font-semibold text-white  text-sm relative">
          Inspiration: Imran Khan founded Shaukat Khanum Memorial Cancer
          Hospital in memory of his mother, Shaukat Khanum, who passed away from
          cancer. During her illness, he saw the lack of cancer treatment
          facilities in Pakistan, which motivated him to build a hospital where
          the poor could receive free treatment. Establishment: The hospital was
          established in Lahore in 1994. It is one of the largest tertiary care
          hospitals in Pakistan. Free Treatment: A significant portion of the
          patients receive free cancer treatment, funded through donations.
          Imran Khan spearheaded fundraising campaigns both in Pakistan and
          internationally, raising millions of dollars for the hospital.
          Expansion: SKMCH has expanded, with additional hospitals in Peshawar
          and Karachi, continuing to provide cancer treatment and research
          facilities.
        </p>
      </div>
      <div className="h-2/6 w-full relative">
        <Image src={Namal} alt="" className=" h-full w-full opacity-50 absolute" />
        
        <p className="p-4 pt-28 font-serif font-semibold text-white  text-sm relative">Vision: Imran Khans vision for Namal University was to create an institution that would provide worldclass education in rural areas of Pakistan His goal was to empower the youth through quality education enabling them to contribute to the countrys development
Establishment: Founded in 2008 in Mianwali his hometown Namal University is affiliated with the University of Bradford in the UK The university offers degree programs in fields like computer science and engineering
Focus on Accessibility: The university aims to make higher education accessible to students from underprivileged backgrounds offering scholarships and financial aid to deserving students</p>
      </div>
      <div className="h-2/6 w-full  relative">
        <Image src={Foundation} alt="" className=" h-3/5 w-full opacity-60 absolute" />
        <p className="pt-6 pl-64 font-serif font-semibold text-black  text-sm relative"> Focus: The Imran Khan Foundation IKF was created to help with disaster relief and poverty alleviation in Pakistan. It has been active in providing assistance during natural disasters such as floods and earthquakes.
Flood Relief: IKF played a significant role in the aftermath of the devastating 2010 floods in Pakistan providing food shelter and medical aid to affected families The foundation worked on rehabilitation and rebuilding homes and communities.
Welfare Projects: The foundation has also been involved in community development projects such as building water wells providing basic healthcare and creating employment opportunities for rural communities.</p>
      </div>
    </div>
  );
}

export default social;
