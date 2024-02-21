import React, { useState, useEffect, useRef } from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import "./About.css";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

function About({ text = "Full Stack Web Developer", delay = 175 }) {
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
    <>
      <Card className="top_about_container">
        <CardBody className="main_about_container">
          <header className="about_container">
            <h1 className="header">About Me</h1>
            <p className="sub_header">
              <hr color="red" className="hr_line" />
              <p className="sub_sub_header">who am i</p>
              <hr color="red" className="hr_line" />
            </p>
          </header>
          <div className="inner_text">
            <div className="name_with_btn">
              <h2 className="name_intro">
                I'm Chanakya Sai
                <div>
                  {/* <span>I work as a </span> */}
                  <span className="frontend_text">
                    {displayText}
                    <span className="CursorAbout">|</span>
                  </span>
                </div>
              </h2>
              <button className="download_Btn" role="link">
                <div className="downloadIcon">
                  <FileDownloadOutlinedIcon />
                </div>
                <div className="downloadText">
                  <a href="/Chanakya_Resume_latest.pdf" download>
                    Download My CV
                  </a>
                </div>
              </button>
            </div>

            <div className="verticalLine"></div>
            <p className="para_text">
              {/* <b>Hey there!</b> I'm Nabarun Jyoti Boruah, a{" "}
              <b>React JS developer</b> with two years of experience crafting
              dynamic web applications. Specializing in intuitive{" "}
              <b>
                UI design, robust state management, and seamless API integration
              </b>
              , I'm passionate about solving complex problems and delivering
              user-friendly solutions.
              <br />
              <br />
              Outside of coding, I'm active in the tech community, attending
              meetups, contributing to open-source projects, and staying updated
              on the latest trends. When I'm not coding, you'll find me
              outdoors, immersed in a good book, or experimenting in the
              kitchen.
              <br />
              <br />
              I'm always eager to <b>connect</b> with fellow developers,{" "}
              <b>collaborate</b> on exciting projects, and contribute to the
              ever-evolving world of web development. Feel free to reach out—{" "}
              <b>I'd love to chat!</b> */}
              <p>
                <b>Hi there!</b> I'm <b>Murikipudi Chanakya Sai</b>, a passionate{" "}
                <b>Full Stack Web Developer</b> with a strong foundation in
                building dynamic and engaging applications. My journey in the
                tech world has led me to master the art of crafting seamless
                user experiences from both ends – the{" "}
                <b>frontend and the backend.</b>
              </p>
              <p>
                <b>On the frontend,</b> I'm skilled in developing with{" "}
                <b>React and Next.js</b>, transforming concepts into
                user-friendly interfaces. My focus is on creating seamless
                experiences and captivating designs.
              </p>
              <p>
                <b>In the backend,</b> I'm experienced with{" "}
                <b>Node.js and Express</b>, managing the behind-the-scenes
                operations that make apps run well. I enjoy creating <b>APIs</b>{" "}
                that help the frontend talk to the database effectively,
                ensuring smooth data flow and strong features.
              </p>
              <p>
                <b>Speaking of databases,</b> I have hands-on experience with
                both
                <b> MySQL and MongoDB.</b> From structured relational databases
                to flexible NoSQL solutions, I've successfully designed and
                implemented data storage strategies that align with project
                requirements.
              </p>
            </p>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default About;
