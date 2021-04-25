import React, { useEffect } from "react";

import ContentBox from "../../shared/ContentBox/ContentBox";
import ProjectItem from "../../shared/UIElements/ProjectItem";

import crazyPlaces from "../../assets/projects/CrazyPlaces.jpg";
import burgerBuilder from "../../assets/projects/BurgerBuilder.jpg";
import yoyoAnimation from "../../assets/projects/YoYoAnimation.jpg";
import faceDetector from "../../assets/projects/FaceDetector.jpg";
import pengerzzTattoos from "../../assets/projects/PengerzzTattoos.jpg";

import "./Projects.css";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add("ProjectsBG");

    let element = document.getElementById("MainHeader");
    element.style.background = "rgba(0, 0, 0, 0.9)";
    element.style.borderBottom = "1px solid #fff";

    return () => {
      document.body.classList.remove("ProjectsBG");
    };
  }, []);

  return (
    <>
      <ContentBox>
        <h1>Some Of My Recent Projects</h1>
        <ProjectItem
          left
          image={crazyPlaces}
          name="Crazy Places"
          url="https://crazyplaces.andyjacko.com"
          github="https://github.com/AndyJacko/crazyplaces"
        >
          <p>
            A pretty simple app showcasing user's crazy places. Each place
            contains an image, title, description, address and location on
            Google Maps.
          </p>
          <p>Location and map are both generated using Google Cloud APIs.</p>
          <p>This was a project made during an Academind course.</p>
          <p>
            Stack: MERN
            <br />
            Frontend: React + React Hooks
            <br />
            Backend: NodeJS + ExpressJS
            <br />
            Database: MongoDB
          </p>
        </ProjectItem>

        <ProjectItem
          image={burgerBuilder}
          name="Burger Builder"
          url="https://burgerbuilder.andyjacko.com"
          github="https://github.com/AndyJacko/burgerbuilder-react-redux"
        >
          <p>
            An awesome app to build your own tasty burger. Add or remove burger
            items until you find the perfect burger, then enter your details to
            place the order. An orders page also displays previous orders.
          </p>
          <span>* You can't actually order a real burger, sorry.</span>
          <p>This was a project made during an Academind course.</p>
          <p>
            Frontend: React + React Redux
            <br />
            Database: Google Firebase
          </p>
        </ProjectItem>

        <ProjectItem
          left
          image={yoyoAnimation}
          name="YoYo Animation"
          url="https://yoyoanimation.andyjacko.com"
          github="https://github.com/AndyJacko/yoyoanimation"
        >
          <p>
            I made this little app as part of an open source project to create a
            CSS Only Animation . The rules were pretty simple: only DIVs allowed
            in the HTML file, everything else was to be CSS Only, no images
            allowed.
          </p>
          <p>
            I was either going to be making a YoYo or a group of spinning boxes
            in different colours, the YoYo option won.
          </p>
          <p>Frontend: HTML5 + CSS3</p>
        </ProjectItem>

        <ProjectItem
          image={faceDetector}
          name="Face Detector"
          url="https://facedetector.andyjacko.com"
          github="https://github.com/AndyJacko/facedetector"
        >
          <p>
            A cool app which will allow a user to enter the URL of an image. The
            image goes through the Clarifai API to display a box around a face
            found in the image. An entry counter will tell you how many images
            you have checked for a face.
          </p>
          <p>This was a project made during a Zero To Mastery course.</p>
          <p>
            Stack: PERN
            <br />
            Frontend: React + Tachyons
            <br />
            Backend: NodeJS + ExpressJS
            <br />
            Database: PostgreSQL
          </p>
        </ProjectItem>

        <ProjectItem
          left
          image={pengerzzTattoos}
          name="Pengerzz Tattoos"
          url="http://pengerzztattoos.info"
          github="https://github.com/AndyJacko/pengerzztattoos.info"
        >
          <p>
            I have gotten many of tattoos over the years, most of them from the
            same tattooist. This is the latest version of his website I made and
            maintain for him. Includes video and image galleries of past
            tattoos.
          </p>
          <p>
            If you live in the Manchester area and looking to get some quality
            ink, go and check him out!
          </p>
          <p>
            Stack: LAMP
            <br />
            Frontend: HTML5 + CSS3 + Bootstrap
            <br />
            Backend: PHP
            <br />
            Database: MySQL
          </p>
        </ProjectItem>
      </ContentBox>
    </>
  );
};

export default Projects;
