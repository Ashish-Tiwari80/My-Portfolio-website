import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import profile from "../assets/Profile_pic.jpg";
import "../index.css"
import { Link } from "react-router-dom";

export default function Home() {
  const images = {
    width: "200px", 
    height: "200px", 
    objectFit: "cover",
    border: "8px solid gray"
  };
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web_Developer", "DSA_Enthusiast", "Tech_Explorer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container1">
      <div className="a  ms-5">
        <h1 className="display-4">Ashish Tiwari</h1>
        <p className="lead mt-3">
          I'm <span ref={el} style={{letterSpacing: "5px"}} />
        </p>
      </div>
     <img className="rounded-circle b ms-5" style={images} src={profile} alt="..." />
     <div id="btn">
      <button className="btn btn-info"><Link className="text-decoration-none text-black" to='/about'>About Me</Link></button>
     </div>
    </div>
  );
}