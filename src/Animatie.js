import React, { useEffect } from 'react';
import { Power3, Expo, gsap} from 'gsap';
import anime from 'animejs/lib/anime.es.js';
import "./Animatie.css"
import { Link } from 'react-router-dom';


const Animatie = () => {
  useEffect(() => {

    gsap.from(
        ".titles > div",
        {
            duration: 0.8,
            x: "-60",
            stagger: 2,
            ease: Power3.easeInOut,
            opacity: "0",
        },
        
    );

    gsap.to(
        ".titles > div",
        {
            duration: 0.8,
            x: "60",
            stagger: 2,
            delay: 1.2,
            ease: Power3.easeInOut,
            opacity: "1",
        },
        
    );
    gsap.to(
        ".titles > div",
        {
            duration: 0.8,
            x: "60",
            stagger: 2,
            delay: 1.2,
            ease: Power3.easeInOut,
            opacity: "0",
        },
        
    );

    gsap.from(
        "li",
        {
            duration: 3,
            x: "-1600",
            delay: 4.2,
            stagger:  0.16,
            ease: Expo.easeInOut,
        },
    );

    gsap.to(
        "li",
        
        {
            duration: 2.6,
            x: "1600",
            delay: 6.8,
            stagger: 0.2,
            ease: Expo.easeInOut,
        },
        
    );

    gsap.from(
        "button",
        {
            x: 100,
            //delay: 7,
            duration: 10,
            opacity: 0,
            ease: Expo.easeInOut,
        },
    );

    let textWrapper = document.querySelector(".header");
     textWrapper.innerHTML = textWrapper.textContent.replace(
       /\S/g,
       "<span class='letter'>$&</span>"
     );

     anime.timeline().add({
       targets: ".header .letter",
       opacity: [0, 1],
       translateY: [80, 0],
       translateZ: 0,
       easing: "easeOutExpo",
       duration: 2000,
       delay: (el, i) => 8400 + 40 * i,
     });
   }, []
  );

  return (
    <div className="container">
         <Link to="/signup">
         <button className="hover-button"> Join Beta</button>
         </Link>
       
          <h1 className="header">
              23F * 734 <br />&nbsp; &nbsp; (8) &.09 <br />0x2_ U3
          </h1>

          <div className="titles">
              <div className="title title-1"><h1>Unleash</h1></div>
              <div className="title title-2"><h1>The</h1></div>
              <div className="title title-3"><h1>Potential</h1></div>
          </div>
          <ul className="blocks">
              <li className="block-1 block"></li>
              <li className="block-2 block"></li>
              <li className="block-3 block"></li>
              <li className="block-4 block"></li>
              <li className="block-5 block"></li>
              <li className="block-6 block"></li>
          </ul>
          
      </div>
  );
}

export default Animatie;
