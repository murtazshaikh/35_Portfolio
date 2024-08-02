import React, { useEffect } from "react";
import Image from "next/image";
import morty from "../../public/images/profile/morty.png";
import eyeSmall from "../../public/images/profile/eye-small.png";
import eyeBig from "../../public/images/profile/eye-big.png";

const Morty = () => {

  const angle = (cx, cy, ex, ey) => {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;
    return deg;
  }

  const mouseMoveFUnc = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const anchor = document.getElementById("anchor");
    if (anchor) {
      const rekt = anchor.getBoundingClientRect();
      const anchorX = rekt.left + rekt.width / 2;
      const anchorY = rekt.top + rekt.height / 2;
  
      const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
  
  
      const eyes = document.querySelectorAll(".eye");
      eyes.forEach((eye) => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
      });
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", mouseMoveFUnc);

    return () => removeEventListener("mousemove", mouseMoveFUnc);
  }, []);

  return (
    <main className="morty-cont">
      <Image id="anchor" width={600} height={600} src={morty} alt="" />
      {/* <div id="eyes"> */}
      <Image src={eyeSmall} alt="eye" className="eye eye-small small-1" />
      <Image src={eyeSmall} alt="eye" className="eye eye-small small-2" />
      <Image src={eyeBig} alt="eye" className="eye eye-big big-1" />
      <Image src={eyeBig} alt="eye" className="eye eye-big big-2" />
      {/* </div> */}
    </main>
  );
};

export default Morty;
