import React from "react";
import TrueFocus from "../TextAnimations/TrueFocus";
import BlurText from "../TextAnimations/BlurText";

export default function A_propos() {
  return (
    <div>
      <div className="relative h-screen bg-[url('/bg1.jpg')] bg-cover bg-center">
        <div class="absolute inset-0 bg-black/20">
            <BlurText
              text="À propos de nous"
              blurAmount={5}
              animationDuration={2000}
              className="flex justify-center items-center font-bold text-4xl text-white mt-10"
            />
        
          <section>
            <div className="">
              <img
                className="rounded-2xl ml-5 w-150  mt-30"
                src="./BTP3.jpg"
                alt=""
                srcset=""
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
