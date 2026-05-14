import { useState } from "react";
import Navbar from "./Components/Navbar";
import TexType from "./TextAnimations/TexType";
import BlurText from "./TextAnimations/BlurText";
import BounceCards from "./TextAnimations/BounceCards";
import Content from "./Components/Content";




function App() {
  

  const images = [
    "./BTP0.jpg",
    "./BTP1.jpg",
    "./BTP2.jpg",
    "./BTP3.jpg",
    "./BTP4.jpg",
  ];

  const transformStyles = [
    "rotate(5deg) translate(-120px)",
    "rotate(0deg) translate(-55px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(55px)",
    "rotate(-5deg) translate(120px)",
  ];
  return (
    <div className="w-full">
      <div className="relative min-h-screen w-full bg-[url('/Background.jpg')] bg-cover bg-center pb-12">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 w-full flex flex-col">
          <nav>
            <Navbar />
          </nav>
          <div className="flex justify-center items-center mt-10 px-4">
            <div className="hidden sm:block">
              <BounceCards
                className="custom-bounceCards"
                images={images}
                containerWidth={500}
                containerHeight={250}
                animationDelay={1}
                animationStagger={0.08}
                easeType="elastic.out(1, 0.5)"
                transformStyles={transformStyles}
                enableHover={false}
              />
            </div>
            <div className="block sm:hidden">
              <BounceCards
                className="custom-bounceCards"
                images={images}
                containerWidth={300}
                containerHeight={150}
                animationDelay={1}
                animationStagger={0.08}
                easeType="elastic.out(1, 0.5)"
                transformStyles={transformStyles}
                enableHover={false}
              />
            </div>
          </div>
          <div className="flex justify-center items-center mt-10 text-4xl md:text-5xl lg:text-7xl text-white font-semibold text-center px-4">
            <TexType
              text={["Welcome to Bati-Pro", "Bienvenue sur Bati-Pro"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
            />
          </div>
          <div></div>
          <div className="px-4">
            <BlurText
              text="Bati-Pro accompagne vos projets de construction."
              blurAmount={5}
              animationDuration={2000}
              className="text-2xl sm:text-3xl lg:text-4xl flex justify-center text-center items-center text-white font-semibold mt-6"
            />
          </div>

          <div className="px-4">
            <BlurText
              text=" Nous sommes la pour vous aider à concrétiser vos projets de construction."
              blurAmount={5}
              animationDuration={2000}
              className="flex justify-center text-center items-center text-lg sm:text-xl lg:text-2xl mt-4 text-blue-700 font-bold"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 mt-10 px-4">
            <button className="btn glass hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-2xl w-full sm:w-auto">
              Nos services
            </button>
            <button className="btn glass hover:bg-green-700 text-white font-bold py-3 px-6 rounded-2xl w-full sm:w-auto">
              Contactez-nous
            </button>
          </div>
        </div>
      </div>
      <section className="">
        <div>
          <Content />
        </div>
        
      </section>
    </div>
  );
}

export default App;
