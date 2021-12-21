import React from "react";
import "./App.css";
import github from "./assets/gh.png";
import linkedin from "./assets/li.png";
import instagram from "./assets/in.png";
import twitter from "./assets/twitter.png";
import youtube from "./assets/youtube.png";
import discord from "./assets/discord.png";


function App() {
  return (
    <div className="container">
      <div className="heading">
        <h1 className="title"> Epic Dev </h1>
      </div>

      <div className="social-icons-container">
        <a href="https://github.com/EpicDevv" className="social-icon">
          <img src={github} alt="social" />
        </a>
        <a
          href="https://www.linkedin.com/in/zayne-lovecraft-0ba3a621a/"
          className="social-icon"
        >
          <img src={linkedin} alt="social" />
        </a>
        <a href="https://www.instagram.com/script_daddy/" className="social-icon">
          <img src={instagram} alt="social" />
        </a>
        <a href="https://twitter.com/epic_devv" className="social-icon">
          <img src={twitter} alt="social" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCSm3TslJkZBoYs-qFC9G_4Q"
          className="social-icon"
        >
          <img src={youtube} alt="social" />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=100071547166443"
          className="social-icon"
        >
          <img src={discord} alt="social" />
        </a>
      </div>
      <div className="bio">
        <p className="bio-text">Follow to join the #1 coding community !</p>
       
      </div>

    </div>
  );
}

export default App;
