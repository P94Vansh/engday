"use client"
import Image from "next/image";
import Card from "./components/Card";
import { useRef } from "react";
import Faq from "./components/faq";
import Link from "next/link";
export default function Home() {
  const backgroundImageStyle = {
    backgroundImage: 'url(/bg-img.png)',
    backgroundSize: 'cover', // Ensures the image covers the container
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '80vh', // Adjust as needed
    width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center'

  };
  const backgroundImageStyle2 = {
    backgroundImage: 'url(/bg-cloud.avif)',
    backgroundSize: 'cover', // Ensures the image covers the container
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    opacity: 0.9,
  };
  const cardcontent = [
    { title: "Engineer's Stride", src: "./engstride.jfif", href: "/event/engineerstride" },
    { title: "UU Picasso", src: "./picasso.jfif", href: "/event/picasso" },
    { title: "Crack N Code", src: "./crackncode.jfif", href: "/event/crackncode" },
    { title: "HTML Combat", src: "./webdesign.jfif", href: "/event/htmlcombat" },
    { title: "BGMI Badshah", src: "BGMI-Background-Images.jpg", href: "/event/bgmi-badshah" },
    { title: "Anyday Anime", src: "anime.jfif", href: "/event/anyday-anime" },
    { title: "Mr. & Ms. UU", src: "uu.jfif", href: "/event/mr-ms-uu" },
    { title: "Innovate India", src: "innovateindia.jfif", href: "/event/innovate-india" },
    { title: "Head Scratch", src: "headscratch.jfif", href: "/event/head-scratch" },
    { title: "Digital India", src: "robo.jfif", href: "/event/digital-india" },
    { title: "Pirates", src: "pirates.jfif", href: "/event/pirates" },
    { title: "Life of an Engineer", src: "engineerlife.jfif", href: "/event/life-of-an-engineer" },
    { title: "Cook Without Fire", src: "cookwofire.jfif", href: "/event/cook-without-fire" },
    { title: "Canvas on Faces", src: "canvasonfaces.jfif", href: "/event/canvas-on-faces" },
    { title: "Engineer's Got Talent", src: "talent.jfif", href: "/event/engineers-got-talent" },
    { title: "Character Clash", src: "cosplay.jfif", href: "/event/character-clash" }
  ];
  const para=`Welcome to the forefront of Engineering Innovation at Uttaranchal Institute of Technology (UIT), Uttaranchal University, Dehradun.
        Dear Students, Faculties and Guests,
        In today's ever-evolving technological realm, engineering plays a pivotal role in driving transformative changes across the globe. As the Dean of the Uttaranchal Institute of Technology (UIT) at Uttaranchal University Dehradun, I am excited to outline our vision and dedication to advancing technologies that will shape our future.
        Prof. (Dr.) Sumit Chaudhary
        Director, Uttaranchal Institute of Technology`
  const faqcontent = [{ ques: "What is Engineer's Day?", ans: "A day to celebrate engineering with fun events!" }, { ques: "How do I register for events?", ans: "Fill out the registration link, it's easy!" }, { ques: "What events are happening this year?", ans: "Fun run, Code War, Web War, and more!" }, { ques: "Can I bring my friends?", ans: "Absolutely! The more, the merrier!" }]
  const eventref = useRef()
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 relative" style={backgroundImageStyle}>
        <div className="flex justify-between p-4 w-full">
          <img src="./uit logo.png" className="md:w-[8vw] w-[30vw] absolute top-4 left-2" alt="logo" />
          <img src="./UU-New-Logo.png" className="md:w-[15vw] w-[50vw] bg-white p-3 rounded-xl absolute top-5 right-2" alt="logo" />
          </div>
        <div className="font-bold text-white font-sans text-5xl md:text-8xl">  Engineer&apos;s Day </div>
        <div className=" text-white font-serif md:text-4xl">Unleash Your Inner Genius and Joint the Fun!</div>
        <button className="border-white border-2 font-bold text-xl py-2 px-3 bg-transparent text-white rounded-3xl" onClick={() => {
          eventref.current?.scrollIntoView({
            behavior: 'smooth'
          })
        }}>Explore the events</button>
      </div>
      <div className="md:flex-row sm:flex-row flex flex-col-reverse items-center justify-center text-justify py-7" style={{backgroundColor:"#f0f0f6"}}>
     <div className="flex flex-col gap-5 "> {para.split('\n').map((item,ind)=> <div className="md:w-[60vw]
     sm:w-[40vw] px-12 md:text-xl font-bold"  key={ind}>{item}</div> )} </div>
      <div className="p-12">
        <img className="md:w-[30vw] sm:w-[80vw] w-[75vw] h-[40vh] border-black border-2 rounded-full bg-blue-200 md:h-[63vh]" src="./deansir.png" alt="picture" />
      </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 p-6 h-[120vh] sm:h-[82vh]" >
        <div className="md:flex md:flex-col items-center justify-center gap-3">
          <div className="font-bold text-center text-xl md:text-7xl font-sans">Who We Are</div>
          <br />
          <div className="md:text-2xl font-serif">Welcome to <strong> ENGINEER&apos;S DAY MAHOTSAVA2024 </strong>, the ultimate celebration of engineering brilliance! We are the masterminds behind the most electrifying Engineer&apos;s Day event, where creativity meets competition in a whirlwind of excitement.</div>
          <div className="text-2xl  font-serif">
            Our mission? To showcase the incredible talents of engineers while having a blast!</div>
          <div className="text-2xl font-serif">Join us as we transform ordinary days into extraordinary experiences. Get ready to laugh, learn, and unleash your inner engineer!</div>
        </div>
        <div className="mt-96 md:mt-4 w-[70vw]">
          <img src={"/circle.png"} alt="circle.img" />
        </div>
      </div>
      <div style={{ backgroundColor: '#416165' }} className=" py-10">
        <div style={{ backgroundColor: '#D0CDD7' }} className=" p-14 rounded-2xl w-[80%] mx-auto flex gap-12 flex-col items-center justify-center">
          <div className=" font-bold text-7xl"> Don&apos;t Miss Out on the Fun!</div>
          <div className="font-semibold font-sans text-4xl">Click the below images for registration.</div>
        </div>
        <div ref={eventref} className="text-center font-semibold  text-6xl mt-28">Epic Events</div>
        <div className="flex p-14 flex-wrap gap-10 justify-center">
          {cardcontent.map(item => {
            return <Link key={item.href} href={item.href}> <Card title={item.title} key={item.title} src={item.src} /></Link>
          })}
        </div>
        <div className="text-center font-serif pt-9 font-bold text-5xl">FAQS</div>
        <div className="flex flex-col gap-14 py-10">
          {faqcontent.map(item => {
            return <Faq ques={item.ques} key={item.ans} ans={item.ans} />
          })}
        </div>
      </div>
      <div className="h-72 flex items-center justify-around bg-white">
        <div className="flex flex-col items-center justify-center">
          <div className="text-blue-700 font-semibold text-7xl">500+</div>
          <div className="font-semibold text-3xl"> Participants</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-blue-700 font-semibold text-7xl">10+</div>
          <div className="font-semibold text-3xl"> Exciting Events</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-blue-700 font-semibold text-7xl">2</div>
          <div className="font-semibold text-3xl"> Days of Fun</div>
        </div>
      </div>
      <div className="bg-blue-200">
        <div className="flex pb-16 p-7 items-center gap-7">
          <div className="flex flex-col gap-8 items-center w-[50vw]">
            <div className="text-center font-bold text-6xl">Follow Us Online</div>
            <div className="font-serif text-xl">Be connected with us on instagram for updates.</div>
          </div>
          <div> <img src="followus.jfif" alt="Image" className="w-[50vw] h-[70vh] rounded-xl" /></div>
        </div>
      </div>

    </>
  );
}
