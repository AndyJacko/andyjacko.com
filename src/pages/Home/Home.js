import React, { useEffect } from "react";
import Particles from "react-tsparticles";

import PageHeader from "../../shared/PageHeader/PageHeader";

import particleOptions from "./ParticleOptions";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add("HomeBG");
    document.getElementById("logo").style.display = "none";

    let element = document.getElementById("MainHeader");
    element.style.background = "rgba(0, 0, 0, 0.0)";
    element.style.borderBottom = "none";

    return () => {
      document.body.classList.remove("HomeBG");
      document.getElementById("logo").style.display = "block";
    };
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        className="particles"
        options={particleOptions}
      />

      <PageHeader />
    </>
  );
};

export default Home;
