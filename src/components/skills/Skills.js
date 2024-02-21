import React, { useEffect, useState } from "react";
import "./Skills.css";
import html from "../.././assets/html.png";
import css from "../.././assets/css.png";
import js from "../.././assets/js.jpg";
import react from "../.././assets/react.png";
import nextjs from "../.././assets/nextjs.png";
import redux from "../.././assets/redux.png";
import mui from "../.././assets/mui.png";
import git from "../.././assets/git.png";
import bootstrap from "../.././assets/bootstrap.png";
import reactbootstrap from "../.././assets/reactbootstrap.png";
import { Card, CardBody, Row } from "reactstrap";

function Skills() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Card className="top_about_container_skills">
      <CardBody className="main_about_container_skills">
        <header className="about_container_skills">
          <h1 className="header">My Skills</h1>
          <p className="sub_header_skills">
            <hr color="red" className="hr_line" />
            <p className="sub_sub_header">what i know</p>
            <hr color="red" className="hr_line" />
          </p>
        </header>

        <div className="inner_text_skills">
          <p className="para_text_skills">
            {/* As a <b>React JS developer</b>, i have a range of valuable skills
            that enables me to build robust, dynamic web applications. My
            expertise in <b>React.js</b>, a popular Javascript library, allows
            me to create reusable UI components, efficiently manage state and
            data flow, and implementaing a virtual DOM for lightning-fast
            rendering.
            <br />
            <br />
            In addition to these technical abilities, I also have solid
            understanding of modern web development concepts and technologies,
            such as <b>HTML5, CSS3, Javascript and RESTful APIs</b>. I have firm
            knowledge in some of the CSS libraries such as{" "}
            <b>Bootstrap, Reactstrap, MaterialUI</b> etc. I also have experience
            working with other tools and frameworks commonly used in the
            React.js ecosystem, such as <b>Redux, React Router, JSON, Axios</b>.
            <br />
            <br />I have the ability to communicate effectively with other
            developers, product managers, and stakeholders, as well as my
            attention to detail and problem-solving skills, make me an
            indispensable member of any web development team. */}
            <ul>
              <li>
                <strong>Frontend Development:</strong> JavaScript, React JS,
                Next JS, Redux, HTML 5, CSS 3, Bootstrap
              </li>
              <li>
                <strong>Backend Development:</strong> Node.js, Express, REST
                API, GraphQL
              </li>
              <li>
                <strong>Databases:</strong> MongoDB, MySQL
              </li>
              <li>
                <strong>ORM:</strong> Sequelize
              </li>
              <li>
                <strong>Real-time Communication:</strong> WebSocket
              </li>
              <li>
                <strong>Version Control:</strong> GitHub
              </li>
            </ul>
          </p>

          <div className="verticalLine_skills"></div>

          <div className="name_with_btn_skills">
            <Row>
              <div
                className="hover-div"
                onClick={() =>
                  openInNewTab(
                    "https://developer.mozilla.org/en-US/docs/Web/HTML"
                  )
                }
              >
                <img src={html} alt="HTML5" />
                <div className="contents">HTML5</div>
              </div>
              <div
                className="hover-div"
                onClick={() =>
                  openInNewTab(
                    "https://developer.mozilla.org/en-US/docs/Web/CSS"
                  )
                }
              >
                <img src={css} alt="CSS3" />
                <div className="contents">CSS3</div>
              </div>
              <div
                className="hover-div"
                onClick={() =>
                  openInNewTab(
                    "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  )
                }
              >
                <img src={js} alt="Javascript" />
                <div className="contents">JS</div>
              </div>
            </Row>
            <Row>
              <div
                className="hover-div"
                onClick={() => openInNewTab("https://reactjs.org/")}
              >
                <img src={react} alt="REACT" />
                <div className="contents">REACT JS</div>
              </div>
              <div
                className="hover-div"
                onClick={() => openInNewTab("https://redux.js.org/")}
              >
                <img src={redux} alt="REDUX" />
                <div className="contents">REDUX</div>
              </div>
              <div
                className="hover-div"
                onClick={() => openInNewTab("https://git-scm.com/")}
              >
                <img src={git} alt="git" />
                <div className="contents">GIT</div>
              </div>
            </Row>
            <Row>
              <div
                className="hover-div"
                onClick={() => openInNewTab("https://getbootstrap.com/")}
              >
                <img src={bootstrap} alt="bs" />
                <div className="contents">BS</div>
              </div>
              <div
                className="hover-div"
                onClick={() =>
                  openInNewTab("https://react-bootstrap.github.io/")
                }
              >
                <img src={reactbootstrap} alt="reactbootstrap" />
                <div className="contents">React BS</div>
              </div>
              <div
                className="hover-div"
                onClick={() => openInNewTab("https://mui.com/")}
              >
                <img src={mui} alt="MUI" />
                <div className="contents">MUI</div>
              </div>
            </Row>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default Skills;
