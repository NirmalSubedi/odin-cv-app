import { useState } from "react";
import { CreateCVButton, CV, PersonalEntry } from "./components";

function App() {
  const [screen, setScreen] = useState("no cv");

  if (screen === "no cv") {
    return <CreateCVButton {...{ setScreen }} />;
  } else if (screen === "creation-personal") {
    return (
      <>
        <CV>
          <PersonalEntry isOpen={true} screen={screen} />
        </CV>
      </>
    );
  }

  return;
}

export default App;
