import React from "react";
import Navbar from "./Components/Navbar";
import TexType from "./TextAnimations/TexType";
import BlurText from "./TextAnimations/BlurText";
import CountUp from "./TextAnimations/CountUp";

function App() {
  return (
    <div className="h-screen bg-[url('/Background.jpg')] bg-cover opacity-70 bg-center">
      <div className="absolute inset-0 bg-black/20">
        <nav>
          <Navbar />
        </nav>
        <div className=" flex justify-center items-center mt-60 text-7xl  text-white font-semibold   ">
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
            className="flex justify-center items-center text-xl mt-4 text-blue-700 font-bold"
          />
        </div>
        <div className="flex justify-center items-center gap-20 mt-10">
          <button className="btn glass hover:bg-blue-700 text-white font-bold py-2 px-4  rounded-2xl">
            Nos services
          </button>
          <button className="btn glass hover:bg-green-700 text-white font-bold py-2 px-4 rounded-2xl">
            Contactez-nous
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
