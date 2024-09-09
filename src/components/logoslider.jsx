
import  { useEffect } from "react";
import "./logoslider.css"; 
import mongo from '../assets/mongo.png'
import express from '../assets/express.svg'
import node from '../assets/node.svg'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.svg'
import gitlogo from '../assets/gitlogo.svg'
import github from '../assets/github.png'
import sql from '../assets/sql.svg'
import java from '../assets/java.svg'
import python from '../assets/python.png'
import chatgpt from '../assets/chatgpt.svg'

const LogoSlider = () => {
  
    
    
useEffect(() => {
    
    const copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
  }, []);
  return (
    <>
    <div className="logos">
      <div className="logos-slide">
        <img src={mongo} alt="mongoDB" />
        <img src={express} alt="express.js" />
        <img src={node} alt="node.js" />
        <img src={gitlogo} alt="git" />
        <img src={html} alt='html' />
        <img src={css} alt="css" />
        <img src={react} alt='react' />
        <img src={js} alt='javascript' />
        <img src={github} alt="github" />
        <img src={sql} alt="sql" />
        <img src={java} alt="java" />
        <img src={python} alt="python" />
        <img src={chatgpt} alt="" />
      </div>
    </div>
    
    </>
  )
}

export default LogoSlider