import React from "react";
import Navbar from "./Components/Navbar";
import TexType from "./TextAnimations/TexType";
import BlurText from "./TextAnimations/BlurText";


function App() {
  return (
    <div className="h-screen bg-[url('/Background.jpg')] bg-cover opacity-75 bg-center">
      <nav>
        <Navbar />
      </nav>
      <div>
       
      </div>
      <div className="text-5xl text-white font-bold ml-5 mt-60 ">
        <TexType
          text={["Welcome to Bati-Pro", "Bienvenue sur Bati-Pro"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          cursorCharacter="_"
          texts={[
            "Welcome to React Bits! Good to see you!",
            "Build some amazing experiences!",
          ]}
          deletingSpeed={50}
          variableSpeedEnabled={false}
          variableSpeedMin={60}
          variableSpeedMax={120}
          cursorBlinkDuration={0.5}
        />
      </div>
      <div>
        <BlurText
          text="Your construction project, our expertise."
          blurAmount={5}
          animationDuration={2000}
          className="text-2xl text-blue-700 font-semibold mt-5 ml-5"
        />
      </div>
    </div>
  );
}

export default App;
