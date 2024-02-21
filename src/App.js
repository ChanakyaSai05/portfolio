import "./App.css";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";
import MyProjects from "./components/myProjects/MyProjects";
import ContactMe from "./components/contactMe/ContactMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, useCallback, useRef } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { Button } from "./Styles";
import { useState } from "react";
import { useEffect } from "react";
import MyExp from "./components/experience/MyExp";

function App() {
  const [visible, setVisible] = useState(false);
  const [homeRef, aboutRef, skillsRef, expRef, contactRef] = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];
  const [value, setValue] = useState("1");

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (
      scrollPosition >= contactRef.current.offsetTop - 20 ||
      scrollPosition > expRef.current.offsetTop + 200
    ) {
      setValue("5"); // Set value to '5' when in the "contact" section
    } else if (
      scrollPosition >= expRef.current.offsetTop - 20 ||
      scrollPosition > skillsRef.current.offsetTop + 200
    ) {
      setValue("4"); // Set value to '4' when in the "experience" section
    } else if (
      scrollPosition >= skillsRef.current.offsetTop - 20 ||
      scrollPosition > aboutRef.current.offsetTop + 200
    ) {
      setValue("3"); // Set value to '3' when in the "skills" section
    } else if (
      scrollPosition >= aboutRef.current.offsetTop - 20 ||
      scrollPosition > homeRef.current.offsetTop + 200
    ) {
      setValue("2"); // Set value to '2' when in the "about" section
    } else {
      setValue("1"); // Set value to '1' when in the "home" section
    }
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        expRef={expRef}
        contactRef={contactRef}
        value={value}
        setValue={setValue}
      />
      <section id="home" ref={homeRef}>
        <Home />
      </section>
      <section id="about" ref={aboutRef}>
        <About />
      </section>
      <section id="skills" ref={skillsRef}>
        <Skills />
      </section>
      <section id="exp" ref={expRef}>
        <MyExp />
      </section>
      <section id="contact" ref={contactRef}>
        <ContactMe />
      </section>
    </div>
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route exact path="/" element={<Home />} />
    //   </Routes>
    //   <Routes>
    //     <Route exact path="/about" element={<About />} />
    //   </Routes>
    //   <Routes>
    //     <Route exact path="/skills" element={<Skills />} />
    //   </Routes>
    //   <Routes>
    //     <Route exact path="/projects" element={<MyProjects />} />
    //   </Routes>
    //   <Routes>
    //     <Route exact path="/contact" element={<ContactMe />} />
    //   </Routes>

    //   <Button>
    //     <FaArrowCircleUp
    //       onClick={scrollToTop}
    //       style={{ display: visible ? "inline" : "none" }}
    //     />
    //   </Button>
    //   <footer className="footer">
    //     Created By{" "}
    //     <a
    //       className="nameFooter"
    //       role="link"
    //       onClick={() =>
    //         openInNewTab(
    //           "https://www.linkedin.com/in/nabarun-jyoti-boruah-b1b126226/"
    //         )
    //       }
    //     >
    //       Nabarun Jyoti Boruah
    //     </a>{" "}
    //     | <span className="copySymbol">&copy;</span> 2023 All rights reserved
    //   </footer>
    // </Router>
  );
}

export default App;
