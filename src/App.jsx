import { useState } from "react";
import {
  CreateCVButton,
  CV,
  PersonalEntry,
  EducationEntry,
} from "./components/index.jsx";

function App() {
  const [screen, setScreen] = useState("no cv");
  const [personalData, setPersonalData] = useState({});
  const [education, setEducationData] = useState([]);

  const addEducationData = (data) => {
    education.push(data);
    setEducationData([...education]);
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
  }

  return <CV>{content}</CV>;
}

export default App;
