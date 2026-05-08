import React from "react";
import TrueFocus from "../TextAnimations/TrueFocus";

export default function A_propos() {
  return (
    <div>
      <div className="mt-2.5">
      <TrueFocus
        sentence="A Propos de nous"
        manualMode={false}
        blurAmount={5}
        borderColor="#5227FF"
        animationDuration={0.5}
        pauseBetweenAnimations={1}
      />
      </div>
    </div>
  );
}
