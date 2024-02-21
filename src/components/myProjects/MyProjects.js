import React, { useState, useEffect, useRef } from "react";
import { Row } from "reactstrap";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import "./myProjects.css";

function MyProjects({ text = "Full Stack Web Developer", delay = 175 }) {
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
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="main_about_container_projects">
      <header className="about_container_projects">
        <h1 className="header_projects">My Projects</h1>
        <p className="sub_header_projects">
          <hr color="red" className="hr_line" />
          <p className="sub_sub_header_projects">my works</p>
          <hr color="red" className="hr_line" />
        </p>
      </header>
      <div className="inner_text">
        <div className="name_with_btn_projects">
          <h2 className="name_intro_projects">
            I'm Nabarun Jyoti Boruah And I'm a{" "}
            <span className="frontend_text">
              {displayText}
              <span className="CursorAbout">|</span>
            </span>
          </h2>
        </div>

        <div className="verticalLine_projects"></div>

        {/* <div className="para_text_projects"> */}
        <Row className="firstRow">
          <div className="box">
            <h3 className="title">Amazon Clone</h3>
            <div className="content">
              <a href="#" className="content-link">
                Go there <span className="arrow_projects">{">>"}</span>
              </a>
            </div>
          </div>
          <div className="box">
            <h3 className="title">YouTube Clone</h3>
            <div className="content">
              <a href="#" className="content-link">
                Go there <span className="arrow_projects">{">>"}</span>
              </a>
            </div>
          </div>
          <div className="box">
            <h3 className="title">Book Review Blog</h3>
            <div className="content">
              <a
                href="#"
                className="content-link"
                onClick={() =>
                  openInNewTab("https://radiant-piroshki-3b251d.netlify.app/")
                }
              >
                Go there <span className="arrow_projects">{">>"}</span>
              </a>
            </div>
          </div>
        </Row>
        <Row className="secondRow">
          <div className="box">
            <h3 className="title">Inshorts Clone</h3>
            <div className="content">
              <a href="#" className="content-link">
                Go there <span className="arrow_projects">{">>"}</span>
              </a>
            </div>
          </div>
          <div className="box">
            <h3 className="title">Oxford Website</h3>
            <div className="content">
              <a
                href="#"
                className="content-link"
                onClick={() => openInNewTab("https://um5pe.csb.app/")}
              >
                Go there <span className="arrow_projects">{">>"}</span>
              </a>
            </div>
          </div>
          <div className="box">
            <h3 className="title">Inshorts Clone</h3>
            <div className="content">
              <a href="#" className="content-link">
                Go there <span className="arrow_projects">{">>"}</span>
              </a>
            </div>
          </div>
        </Row>
        <Row className="thirdRow">
          <div className="box">
            <h3 className="title">Inshorts Clone</h3>
            <div className="content">
              <a href="#" className="content-link">
                Go there <span className="arrow_projects">{">>"}</span>
              </a>
            </div>
          </div>
          <div className="box">
            <h3 className="title">Oxford Website</h3>
            <div className="content">
              <a
                href="#"
                className="content-link"
                onClick={() => openInNewTab("https://um5pe.csb.app/")}
              >
                Go there <span className="arrow_projects">{">>"}</span>
              </a>
            </div>
          </div>
          <div className="box">
            <h3 className="title">Inshorts Clone</h3>
            <div className="content">
              <a href="#" className="content-link">
                Go there <span className="arrow_projects">{">>"}</span>
              </a>
            </div>
          </div>
        </Row>
      </div>
    </div>
    // </div>
  );
}

export default MyProjects;
