import { Link } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");

  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>MY.AI</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>
          An AI chatBot powered by Gemini.
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.jpeg"
                  : typingStatus === "human2"
                  ? "/human2.jpeg"
                  : "bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                
                "Human: What's the secret to happiness?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: Happiness is finding meaning in the small things.",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "Human2: Do you think technology can make us happier?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: Technology enhances connection, but true happiness comes from within.",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Homepage;
