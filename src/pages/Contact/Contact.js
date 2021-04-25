import React, { useEffect } from "react";

import ContentBox from "../../shared/ContentBox/ContentBox";
import SocialItem from "../../shared/UIElements/SocialItem";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add("ContactBG");

    let element = document.getElementById("MainHeader");
    element.style.background = "rgba(0, 0, 0, 0.9)";
    element.style.borderBottom = "1px solid #fff";

    return () => {
      document.body.classList.remove("ContactBG");
    };
  }, []);

  return (
    <>
      <ContentBox>
        <div className="ContactContent">
          <h1>Want to talk about code?</h1>
          <p>Click on an Icon below:</p>
          <SocialItem
            link="https://www.facebook.com/4ndyJacko"
            icon="facebook"
            name="Facebook"
          />
          <SocialItem
            link="https://www.instagram.com/4ndyjacko"
            icon="instagram"
            name="Instagram"
          />
          <SocialItem
            link="https://twitter.com/4ndyjacko"
            icon="twitter"
            name="Twitter"
          />
          <SocialItem
            link="https://www.linkedin.com/in/andyjacko"
            icon="linkedin"
            name="LinkedIN"
          />
          <SocialItem
            link="https://github.com/AndyJacko"
            icon="github-square"
            name="GitHub"
          />
          <SocialItem
            link="http://steamcommunity.com/id/wisdommcr"
            icon="steam"
            name="Steam"
          />
          <p className="disclaimer">
            * I am more likely to reply on Facebook and LinkedIN
          </p>
        </div>
      </ContentBox>
    </>
  );
};

export default Contact;
