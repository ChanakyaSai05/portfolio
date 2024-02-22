import React from "react";
import { Card } from "reactstrap";
import "./MyExp.css";
function MyExp() {
  return (
    <Card className="top_exp_container">
      <div className="main_exp_container_contact">
        <header className="about_exp_contact">
          <h1 className="header">Experience</h1>
          <p className="sub_header_contact">
            <hr color="red" className="hr_line" />
            <p className="sub_sub_header">My Journey</p>
            <hr color="red" className="hr_line" />
          </p>
        </header>
        {/* <div className="exp_container">
          <div className="company_name">
            <u>Chipster Technologies</u>
          </div>
          <p>(from August 1st, 2022 to Present)</p>
          <p className="expDetails">
            As a Software Development Engineer at Chipster Technologies, I've
            been at the forefront of the Ria-app project, a key component of
            IQCIO's Fintech initiative. Currently, the platform is undergoing
            rigorous testing, aimed at providing comprehensive analysis of
            global stock markets to empower investors with valuable insights.
          </p>
          <p className="expDetails">
            Utilizing ReactJS, I have spearheaded the development of a
            sophisticated web application for Ria-app. One of its standout
            features is the integration of interactive charts, meticulously
            designed for financial data visualization. These charts not only
            enhance user experience but also facilitate seamless navigation
            through complex market trends, ensuring users can make informed
            decisions with confidence.
          </p>
          <p className="expDetails">
            My journey in the fintech realm has not only honed my technical
            skills but has also deepened my understanding of the industry
            landscape. Thriving in fast-paced environments, I am adept at
            delivering high-quality software solutions using agile
            methodologies, ensuring that our products consistently meet and
            exceed customer expectations.
          </p>
          <p className="expDetails">
            In addition to steering the Ria-app project, I have also played a
            pivotal role in laying the groundwork for our upcoming venture,
            colledge.us. Leveraging my expertise and insights gained from the
            fintech realm, I have actively contributed to shaping the vision of
            this multifaceted platform. Through my efforts, I have been
            instrumental in conceptualizing innovative solutions aimed at
            revolutionizing job seeking and student recruitment processes. By
            bridging the gap between talent and opportunity, colledge.us is
            poised to make a significant impact in the education and employment
            sectors.
          </p>
          <p className="expDetails">
            Technologies used:{" "}
            <b>
              React JS, Redux, Axios, Javascript, HTML, CSS, Tailwind CSS,
              Reactstrap, Bootstrap, Material UI
            </b>
            {""} etc.
          </p>
        </div> */}
        <div className="experience_container">
          <div className="experience-item">
            <h3>Mern Stack Developer</h3>
            <p>Infiniticube Services Pvt. Ltd, Hyderabad, India</p>
            <p>November 2022 - Present</p>
            <ul>
              <li>
                Developed various applications in the MERN stack to meet client
                requirements.
              </li>
              <li>
                Created multiple backend APIs and contributed to the development
                of four frontend applications.
              </li>
              <li>
                Actively participated in production deployments, resolved
                production issues, and conducted code reviews.
              </li>
            </ul>
            <h4>Projects:</h4>
            <ol>
              <li>
                <strong>Janz Medical Supply:</strong> Contributed to the
                development of an E-commerce platform simplifying medical
                equipment purchases.
              </li>
              <li>
                <strong>MTM Logix:</strong> Assisted in developing the Logix
                project, improving collaboration between sales and pricing teams
                for efficient quote creation and approval, and optimizing
                container transportation.
              </li>
              <li>
                <strong>Vison:</strong> Contributed to the Vison project, an
                AI-driven platform enabling template-based content generation.
              </li>
            </ol>
          </div>

          {/* <div className="experience-item">
            <h3>Software / Electrical Engineer</h3>
            <p>Raja Rajeshwara Electricals, Hyderabad, India</p>
            <p>September 2018 - October 2022</p>
            <ul>
              <li>
                Played a dual role as both Electrical and Software Engineer,
                contributing to various projects within the organization.
              </li>
              <li>
                Assisted in setting up electrical infrastructure in office
                spaces and commercial buildings.
              </li>
              <li>
                Collaborated with the software team to develop web applications
                associated with projects.
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </Card>
  );
}

export default MyExp;
