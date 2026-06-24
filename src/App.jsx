import { useState } from "react";
import { CreateCVButton, CV } from "./components";

function App() {
  const [screen, setScreen] = useState("no cv");

  if (screen === "no cv") {
    return <CreateCVButton {...{ setScreen }} />;
  } else if (screen === "creation") {
    return <CV />;
  }

  return;
}

export default App;
