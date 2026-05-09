import React from "react";
import Navbar from "./Components/Navbar";
import TexType from "./TextAnimations/TexType";
import BlurText from "./TextAnimations/BlurText";
import BounceCards from "./TextAnimations/BounceCards";
import A_propos from "./Components/A_propos";


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
      <div className="relative h-screen bg-[url('/Background.jpg')] bg-cover opacity-70 bg-center">
        <div className="absolute inset-0 bg-black/20">
          <nav>
            <Navbar />
          </nav>
          <div className="flex justify-center items-center mt-10">
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
          <div className=" flex justify-center items-center mt-10 text-7xl  text-white font-semibold   ">
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
          <div>
            <BlurText
              text="Bati-Pro accompagne vos projets de construction."
              blurAmount={5}
              animationDuration={2000}
              className="text-4xl flex justify-center items-center text-white font-semibold mt-3"
            />
          </div>

          <div>
            <BlurText
              text=" Nous sommes la pour vous aider à concrétiser vos projets de construction."
              blurAmount={5}
              animationDuration={2000}
              className="flex justify-center items-center text-2xl mt-4 text-blue-700 font-bold"
            />
          </div>
          <div className="flex justify-center items-center gap-10 mt-10">
            <button className="btn glass hover:bg-blue-700 text-white font-bold py-2 px-4  rounded-2xl">
              Nos services
            </button>
            <button className="btn glass hover:bg-green-700 text-white font-bold py-2 px-4 rounded-2xl">
              Contactez-nous
            </button>
          </div>
        </div>
      </div>
      <section >
        <A_propos />
      </section>

      <div>
      </div>
    </div>
  );
}

export default App;
