import { useState } from "react";
import {
  CreateCVButton,
  CV,
  PersonalEntry,
  EducationEntry,
  ExperienceEntry,
} from "./components/index.jsx";

function App() {
  const [screen, setScreen] = useState("no cv");
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

  return <CV>{content}</CV>;
}

export default App;
