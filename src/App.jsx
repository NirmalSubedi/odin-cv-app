import { useState } from "react";
import {
  CreateCVButton,
  CV,
  PersonalEntry,
  EducationEntry,
  ExperienceEntry,
} from "./components/index.jsx";

function App() {
  const [screen, setScreen] = useState("no cv lorem");
  const [personalData, setPersonalData] = useState({});
  const [education, setEducationData] = useState([]);
  const [experience, setExperienceData] = useState([]);

  const addEducationData = (data) => {
    education.push(data);
    setEducationData([...education]);
  };

  const addExperienceData = (data) => {
    education.push(data);
    setExperienceData([...experience]);
  };

  if (screen === "no cv") {
    return <CreateCVButton {...{ setScreen }} />;
  }

  let content = null;
  if (screen === "creation-personal") {
    content = (
      <PersonalEntry
        {...{
          screen,
          setScreen,
          isOpen: true,
          personalData,
          setPersonalData,
        }}
      />
    );
  } else if (screen === "creation-education") {
    content = (
      <EducationEntry
        {...{
          screen,
          setScreen,
          isOpen: true,
          addEducationData,
        }}
      />
    );
  } else if (screen === "creation-experience") {
    content = (
      <ExperienceEntry
        {...{
          screen,
          isOpen: true,
          setScreen,
          addExperienceData,
        }}
      />
    );
  }

  content = (
    <>
      <header className="personal">
        <div className="person">
          <h1 className="name">
            John Doe
            <button
              className="edit-btn"
              type="button"
              aria-label="Edit Personal Information"
            >
              Edit
            </button>
          </h1>
          <p className="title">Software Engineer</p>
        </div>
        <div className="contact">
          <p className="location">Los Angeles, CA</p>
          <p className="phone-number">(123) 456-7890</p>
          <p className="email">johndoe@gmail.com</p>
        </div>
      </header>

      <div className="body-container">
        <section className="education">
          <h2>
            Academic Background
            <button
              type="button"
              className="add-btn"
              aria-label="Add Additional Education Information"
            >
              Add
            </button>
          </h2>
          <div className="education-entry">
            <h3 className="study-title">
              Bachelor of Science in Computer Science
              <button
                type="button"
                className="edit-btn"
                aria-label="Edit Education Information"
              >
                Edit
              </button>
            </h3>
            <p className="school">University of California, Los Angeles</p>
            <p className="date-range">
              <em className="start-time">May 2022</em> -{" "}
              <em className="end-time">June 2024</em>
            </p>
            <ul className="highlights">
              <li>GPA: 3.9/4.0</li>
              <li>Graduate Scholarship Recipient</li>
              <li>
                Capstone Project:Predictive Analytics for Healthcare Outcomes
              </li>
            </ul>
          </div>
          <div className="education-entry">
            <h3 className="study-title">
              Bachelor of Science in Cybersecurity
              <button
                type="button"
                className="edit-btn"
                aria-label="Edit Education Information"
              >
                Edit
              </button>
            </h3>
            <p className="school">
              California State Polytechnic University, Pomona
            </p>
            <p className="date-range">
              <em className="start-time">May 2018</em> -{" "}
              <em className="end-time">June 2022</em>
            </p>
          </div>
        </section>
        <section className="experience">
          <h2>
            Professional Experience
            <button
              type="button"
              className="add-btn"
              aria-label="Add Additional Professional Experience Information"
            >
              Add
            </button>
          </h2>
          <div className="experience-entry">
            <h3 className="position-title">
              Software Development Intern
              <button
                type="button"
                className="edit-btn"
                aria-label="Edit Experience Information"
              >
                Edit
              </button>
            </h3>
            <p className="additional-information">
              <span className="company-name">ABC Technologies</span>
              {" | "}
              <em className="start-time">May 2022</em> -{" "}
              <em className="end-time">June 2024</em>
            </p>
            <ul className="highlights">
              <li>
                Developed web application features using JavaScript and React.
              </li>
              <li>
                {" "}
                Collaborated with a team of 5 developers on bug fixes and
                testing.
              </li>
              <li> Reduced page load times by 15%.</li>
            </ul>
          </div>
          <div className="experience-entry">
            <h3 className="position-title">
              IT Support Assistant
              <button
                type="button"
                className="edit-btn"
                aria-label="Edit Experience Information"
              >
                Edit
              </button>
            </h3>
            <p className="additional-information">
              <span className="company-name">XYZ University</span>
              {" | "}
              <em className="start-time">January 2024</em> -{" "}
              <em className="end-time">May 2025</em>
            </p>
            <ul className="highlights">
              <li>Provided technical support to students and staff.</li>
              <li> Resolved hardware and software issues.</li>
            </ul>
          </div>
        </section>
      </div>

      <button type="button" className="read-mode-btn">
        Read Mode
      </button>
    </>
  );

  return <CV className="cv">{content}</CV>;
}

export default App;
