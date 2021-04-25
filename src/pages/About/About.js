import React, { useEffect } from "react";

import ContentBox from "../../shared/ContentBox/ContentBox";
import "./About.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add("AboutBG");

    let element = document.getElementById("MainHeader");
    element.style.background = "rgba(0, 0, 0, 0.9)";
    element.style.borderBottom = "1px solid #fff";

    return () => {
      document.body.classList.remove("AboutBG");
    };
  }, []);

  return (
    <ContentBox>
      <div className="AboutContent">
        <h1>Hi, I'm Andy, I play with code...</h1>
        <p>
          I first started coding in BASIC around age 8 on an Amstrad CPC 464,
          typing out the code in old PC Magazines to play games and write
          programs. Since then I have learned to code in many different
          languages, including: C, C++, C#, Java, JavaScript, ASP, PHP, SQL,
          Python, GML (GameMaker Studio) and GDScript (Godot Game Engine).
        </p>
        <p>
          My first commercial websites were created in classic ASP connecting to
          Access databases, and then later, as PHP was becoming more popular I
          became a LAMP Full Stack Developer for over 10 years. I created many
          different kinds of websites using PHP and MySQL. As web development
          technology has continued evolving, I have also added
          PERN/MERN/FERN/MEAN stacks to my skillset.
        </p>
        <p>
          I now create web applications using modern JavaScript: ES6-ES2020,
          NodeJS, ExpressJS, ReactJS, NextJS, TypeScript and Angular using
          PostgreSQL, MongoDB, Firebase and MySQL databases.
        </p>
        <p>
          I have also coded a couple of my own games in Python and GameMaker
          Studio, and I am currently working on a game in Godot.
        </p>
        <h2>I also play with YoYos...</h2>
        <p>
          When I am not playing with code, I am also a{" "}
          <a href="https://yoyo.andyjacko.com" target="_blank" rel="noreferrer">
            YoYo Player
          </a>
          {" and "}
          <a href="http://yoyobusker.com" target="_blank" rel="noreferrer">
            YoYo Busker
          </a>
          .
        </p>
        <p>
          I have been playing YoYo since around 2010 and have travelled to
          contests and yoyo meets in different countries around the world.
        </p>
      </div>
    </ContentBox>
  );
};

export default About;
