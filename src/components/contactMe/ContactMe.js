import React, { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { Card, Col, Row } from "reactstrap";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Map from "../map/Map";
import linkedin from "../.././assets/linkedin.png";
import github from "../.././assets/github.png";
import twitter from "../.././assets/twitter.png";
import VerifiedSharpIcon from "@mui/icons-material/VerifiedSharp";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import "./ContactMe.css";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 455,
    bgcolor: "background.paper",
    border: "1px solid red",
    color: "black",
    boxShadow: 22,
    p: 5,
  };

  const handleSubmit = (event) => {
    handleOpen();
    event.preventDefault();

    if (!name || !email || !message) {
      setErrorMessage(
        "Looks like you missed something. Please fill in all the fields."
      );
      return;
    }

    // submit form data to email service
    sendEmail(name, email, message)
      .then(() => {
        setSuccessMessage("Your message sent successfully");
        setName("");
        setEmail("");
        setMessage("");
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage("An error occurred, please try again later");
        console.error(error);
      });
  };
  async function sendEmail(name, email, message) {
    // Initialize the EmailJS SDK
    const emailjs = require("emailjs-com");
    emailjs.init("g5UKfbgToYNCpHwqQ");

    // Set the email parameters
    const params = {
      from_name: name,
      from_email: email,
      message: message,
      to_name: "Recipient Name",
      // to_email: "nabarunjyotiboruah@gmail.com",
      to_email: "chanakyasai5@gmail.com",
      subject: "New message from contact form",
    };

    // Send the email using the EmailJS send method
    try {
      await emailjs.send("service_5np7bpe", "template_ovrm85u", params);
      return { success: true, message: "Message sent successfully" };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: "An error occurred, please try again later",
      };
    }
  }

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <Card className="top_about_container">
      <div className="main_about_container_contact">
        <header className="about_container_contact">
          <h1 className="header">Contact Me</h1>
          <p className="sub_header_contact">
            <hr color="red" className="hr_line" />
            <p className="sub_sub_header">get in touch</p>
            <hr color="red" className="hr_line" />
          </p>
        </header>
        {screenWidth < 1425 ? (
          <div className="total_con_2">
            <Row className="name_email_address_hor">
              <div className="name_address_email">
                <div className="avatar">
                  <PersonIcon
                    className="icons"
                    sx={{ color: "red", fontSize: 55 }}
                  />
                </div>
                <div className="NameRow">
                  <h4 className="name_2">Name</h4>
                  <div className="contactMe_sub_sub_header">Chanakya Sai</div>
                </div>
              </div>
              <div className="name_address_email">
                <Row className="avatar">
                  <EmailIcon
                    className="icons"
                    sx={{ color: "red", fontSize: 55 }}
                  />
                </Row>
                <Row className="emailRow">
                  <h4 className="email_2">Email</h4>
                  <div className="contactMe_sub_sub_header">
                    <a href="mailto:chanakyasai5@gmail.com">
                      chanakyasai5@gmail.com
                    </a>
                  </div>
                </Row>
              </div>
            </Row>
            <div className="inner_text_contact">
              <p className="para_text_contact">
                <h3 className="react_haeder">Reach out to me!</h3>
                <p className="paraText">
                  Thanks for visiting my portfolio website! If you're interested
                  in working together, please feel free to contact me using the
                  form below. I'm open to freelance opportunities and would love
                  to hear about potential job openings in my field.
                </p>
              </p>
              <div>
                <Row>
                  <TextField
                    id="outlined-basic"
                    className="placeholder"
                    label="Name"
                    color="error"
                    margin="dense"
                    variant="outlined"
                    type="text"
                    fullWidth
                    size="small"
                    value={name}
                    // sx={{ marginRight: "15px", width: "21.5rem" }}
                    onChange={(event) => setName(event.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    className="placeholder"
                    label="Email"
                    color="error"
                    margin="dense"
                    variant="outlined"
                    type="email"
                    fullWidth
                    size="small"
                    value={email}
                    // sx={{ width: "21.5rem" }}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Row>
                <Row>
                  <TextField
                    id="standard-multiline-static"
                    className="placeholder"
                    label="Your Message"
                    color="error"
                    multiline
                    fullWidth
                    margin="dense"
                    rows={3}
                    variant="outlined"
                    value={message}
                    size="small"
                    onChange={(event) => setMessage(event.target.value)}
                  />
                </Row>
              </div>
              <div className="sendButton1">
                <button className="sendButton" onClick={handleSubmit}>
                  SEND MESSAGE
                  <SendIcon
                    className="sendicon"
                    sx={{ fontSize: 22, marginLeft: "5px" }}
                  />
                </button>
                {successMessage && (
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        sx={{
                          color: "green",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <VerifiedSharpIcon sx={{ fontSize: 50 }} />
                        Thank You!
                      </Typography>
                      <hr />
                      <Typography
                        id="modal-modal-description"
                        sx={{
                          mt: 2,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {successMessage}
                      </Typography>
                    </Box>
                  </Modal>
                )}
                {errorMessage && (
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        sx={{
                          color: "red",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <NewReleasesIcon sx={{ fontSize: 50 }} />
                        Some Error Occured!
                      </Typography>
                      <hr />
                      <Typography
                        id="modal-modal-description"
                        sx={{
                          mt: 2,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {errorMessage}
                      </Typography>
                    </Box>
                  </Modal>
                )}
              </div>
            </div>
            {/* <div className="contact_right_div_container">
              <div className="name_with_btn_contact">
                <Col className="hover-icons">
                  <div
                    className="hover-div-contact"
                    onClick={() =>
                      openInNewTab(
                        "https://www.linkedin.com/in/nabarun-jyoti-boruah-b1b126226/"
                      )
                    }
                  >
                    <img src={linkedin} alt="linkedin" className="linkedin" />
                    <div className="contents">LinkedIn</div>
                  </div>
                  <div
                    className="hover-div-contact"
                    onClick={() =>
                      openInNewTab("https://github.com/nabarun123")
                    }
                  >
                    <img src={github} alt="github" />
                    <div className="contents">Github</div>
                  </div>
                  <div
                    className="hover-div-contact"
                    onClick={() =>
                      openInNewTab("https://twitter.com/nabarun_jyoti")
                    }
                  >
                    <img src={twitter} alt="twitter" />
                    <div className="contents">Twitter</div>
                  </div>
                </Col>
              </div>
            </div> */}
          </div>
        ) : (
          <div className="secondContainer">
            <div className="inner_text_contact">
              <p className="para_text_contact">
                <h3 className="react_haeder">Reach out to me!</h3>
                <p className="paraText">
                  Thanks for visiting my portfolio website! If you're interested
                  in working together, please feel free to contact me using the
                  form below. I'm open to freelance opportunities and would love
                  to hear about potential job openings in my field.
                </p>
              </p>
              <div>
                <Row>
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    color="error"
                    margin="dense"
                    variant="outlined"
                    type="text"
                    size="small"
                    value={name}
                    sx={{ marginRight: "15px", width: "21.5rem" }}
                    onChange={(event) => setName(event.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    color="error"
                    margin="dense"
                    variant="outlined"
                    type="email"
                    size="small"
                    value={email}
                    sx={{ width: "21.5rem" }}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Row>
                <Row>
                  <TextField
                    id="standard-multiline-static"
                    label="Your Message"
                    color="error"
                    multiline
                    fullWidth
                    margin="dense"
                    rows={3}
                    variant="outlined"
                    value={message}
                    size="small"
                    onChange={(event) => setMessage(event.target.value)}
                  />
                </Row>
              </div>

              <div className="sendButton1">
                <button className="sendButton" onClick={handleSubmit}>
                  SEND MESSAGE
                  <SendIcon sx={{ fontSize: 22, marginLeft: "5px" }} />
                </button>
                {successMessage && (
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        sx={{
                          color: "green",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <VerifiedSharpIcon sx={{ fontSize: 50 }} />
                        Thank You!
                      </Typography>
                      <hr />
                      <Typography
                        id="modal-modal-description"
                        sx={{
                          mt: 2,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {successMessage}
                      </Typography>
                    </Box>
                  </Modal>
                )}
                {errorMessage && (
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        sx={{
                          color: "red",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <NewReleasesIcon sx={{ fontSize: 50 }} />
                        Some Error Occured!
                      </Typography>
                      <hr />
                      <Typography
                        id="modal-modal-description"
                        sx={{
                          mt: 2,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {errorMessage}
                      </Typography>
                    </Box>
                  </Modal>
                )}
              </div>
            </div>
            <div className="contact_right_div_container">
              <div className="verticalLine_contact"></div>
              <div className="name_with_btn_contact">
                <Col className="name_address_email">
                  <div className="avatar">
                    <PersonIcon sx={{ color: "red", fontSize: 55 }} />
                  </div>
                  <div className="NameRow">
                    <h4>Name</h4>
                    <div className="contactMe_sub_sub_header">Chanakya Sai</div>
                  </div>
                </Col>
                <Col className="name_address_email">
                  <a
                    href="mailto:chanakyasai5@gmail.com"
                    style={{ color: "black" }}
                  >
                    <div style={{display:"flex"}}>
                      <Row className="avatar">
                        <EmailIcon sx={{ color: "red", fontSize: 55 }} />
                      </Row>
                      <Row className="emailRow">
                        <h4>Email</h4>
                        <div className="contactMe_sub_sub_header">
                          chanakyasai5@gmail.com
                        </div>
                      </Row>
                    </div>
                  </a>
                </Col>
                <Col className="name_address_email">
                  <Row className="avatar">
                    <LocationOnIcon sx={{ color: "red", fontSize: 55 }} />
                  </Row>
                  <Row className="addressRow">
                    <h4>Address</h4>
                    <div className="contactMe_sub_sub_header">
                      Telangana, India
                    </div>
                  </Row>
                </Col>
                <Col className="hover-icons">
                  <div
                    className="hover-div-contact"
                    onClick={() =>
                      openInNewTab(
                        "https://www.linkedin.com/in/nabarun-jyoti-boruah-b1b126226/"
                      )
                    }
                  >
                    <img src={linkedin} alt="linkedin" className="linkedin" />
                    <div className="contents">LinkedIn</div>
                  </div>
                  <div
                    className="hover-div-contact"
                    onClick={() =>
                      openInNewTab("https://github.com/nabarun123")
                    }
                  >
                    <img src={github} alt="github" />
                    <div className="contents">Github</div>
                  </div>
                  <div
                    className="hover-div-contact"
                    onClick={() =>
                      openInNewTab("https://twitter.com/nabarun_jyoti")
                    }
                  >
                    <img src={twitter} alt="twitter" />
                    <div className="contents">Twitter</div>
                  </div>
                </Col>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}

export default ContactMe;
