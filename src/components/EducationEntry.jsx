import { useState } from "react";
import "../styles/EducationEntry.css";
import { DialogForm, InputField, InputList } from "./index.jsx";
import { copyCollection } from "../utils/index.js";

export function EducationEntry({
  isOpen,
  screen,
  setScreen,
  addEducationData,
}) {
  const [studyTitle, setStudyTitle] = useState("");
  const [school, setSchool] = useState("");
  const [startDate, setStartDateChange] = useState("");
  const [endDate, setEndDate] = useState("");
  const [highlights, setHighlights] = useState([
    { id: crypto.randomUUID(), text: "" },
  ]);
  const [hasOverflowed, setHasOverflowed] = useState(false);

  if (!isOpen) return;

  const handleStudyTitleChange = (e) => setStudyTitle(e.target.value);
  const handleSchoolChange = (e) => setSchool(e.target.value);
  const handleStartDateChange = (e) => setStartDateChange(e.target.value);
  const handleEndDateChange = (e) => setEndDate(e.target.value);

  const handleAddHighlightClick = () => {
    highlights.push({ id: crypto.randomUUID(), text: "" });
    if (highlights.length === 3) setHasOverflowed(true);

    setHighlights([...copyCollection(highlights)]);
  };

  const handleHighlightChange = (e) => {
    const el = e.target;
    const { value } = el;
    const { id } = el.dataset;
    const targetHighlight = highlights.find((highlight) => highlight.id === id);
    targetHighlight.text = value;
    setHighlights([...copyCollection(highlights)]);
  };

  const isCreationPhase = screen.startsWith("creation");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isCreationPhase) {
      const data = { studyTitle, school, startDate, endDate, highlights };
      addEducationData(data);
      setScreen("creation-experience");
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <DialogForm
      open={isOpen}
      onSubmit={handleSubmit}
      className="education-entry-dialog"
      heading="Education Entry"
    >
      <InputField
        {...{
          labelText: "Title of Study",
          placeholder: "Bachelor of Science in Computer Science",
          id: "study-title",
          autoFocus: !hasOverflowed,
          required: true,
          onChange: handleStudyTitleChange,
        }}
      />
      <InputField
        {...{
          labelText: "School Name",
          placeholder: "University of California, Los Angeles",
          id: "school-name",
          autoComplete: "organization",
          required: true,
          spellCheck: true,
          onChange: handleSchoolChange,
        }}
      />
      <InputField
        {...{
          labelText: "Date Started",
          id: "start-date",
          type: "date",
          required: true,
          max: today,
          onChange: handleStartDateChange,
        }}
      />
      <InputField
        {...{
          labelText: "Date Ended (optional)",
          id: "end-date",
          type: "date",
          max: today,
          onChange: handleEndDateChange,
        }}
      />

      <InputList
        itemNaming={["Highlight", "Highlights"]}
        placeholderTexts={[
          "GPA 4.0",
          "Science Fair winner",
          "Perfect attendance award",
        ]}
        items={highlights}
        hasOverflowed={hasOverflowed}
        onItemChange={handleHighlightChange}
        onAddItemClick={handleAddHighlightClick}
      />

      <button type="submit">{isCreationPhase ? "Next" : "Save"}</button>
    </DialogForm>
  );
}
