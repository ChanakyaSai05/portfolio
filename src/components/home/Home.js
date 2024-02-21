import React, { useState, useEffect, useRef } from "react";
import Lottie from "react-lottie";
import codingimage from "../../assets/codingimage.json";
import helloimage from "../../assets/helloimage.json";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import "./Home.css";

function Home({ text = "Full Stack Web Developer", delay = 175 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      const nextIndex = currentIndex + 1;
      const nextChar = text[nextIndex];
      setDisplayText(text.slice(0, nextIndex));
      setCurrentIndex(nextIndex);

      if (nextChar) {
        timerRef.current = setTimeout(() => {
          setDisplayText(text.slice(0, nextIndex + 1));
          setCurrentIndex(nextIndex + 1);
        }, delay);
      } else {
        setCurrentIndex(0); // reset currentIndex back to 0
      }
    }, delay);

    return () => clearTimeout(timerRef.current);
  }, [currentIndex, delay, text]);

  const forCodingImage = {
    loop: true,
    autoplay: true,
    animationData: codingimage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const forHello = {
    loop: true,
    autoplay: true,
    animationData: helloimage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="container">
      <div className="textComponent">
        <div className="helloimage">
          <Lottie options={forHello} />
        </div>
        <div>
          <span className="text3">I'm {" "}</span>{" "}
          <span className="text3">Chanakya Sai</span>
        </div>
        <div>
          <span className="text4">I work as a </span>{" "}
          <span className="text5">
            {displayText}
            <span className="Cursor">|</span>
          </span>
        </div>
        <div>
          <button
            className="connectbutton"
            role="link"
            onClick={() =>
              openInNewTab(
                "https://www.linkedin.com/in/murikipudi-chanakya-sai-54a4a0ba/"
              )
            }
          >
            Connect with me
            <div className="arrowSign">{">"}</div>
          </button>
        </div>
      </div>
      <div className="imageComponent">
        <Lottie options={forCodingImage} />
      </div>
    </div>
  );
}

export default Home;
