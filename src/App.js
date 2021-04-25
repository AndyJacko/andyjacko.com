import React, { useState } from "react";

import MainNavigation from "./shared/Navigation/MainNavigation";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import "./App.css";

const App = () => {
  const [route, setRoute] = useState("home");

  const onRouteChange = (route) => {
    setRoute(route);
  };

  let page = "";
  switch (route) {
    case "home":
      page = <Home />;
      break;
    case "about":
      page = <About />;
      break;
    case "skills":
      page = <Skills />;
      break;
    case "projects":
      page = <Projects />;
      break;
    case "contact":
      page = <Contact />;
      break;
    default:
      page = <About />;
  }

  return (
    <div className="App">
      <main>
        <MainNavigation onRouteChange={onRouteChange} />
        {page}
      </main>
    </div>
  );
};

export default App;
