import { useState } from "react";
import "../styles/ExperienceEntry.css";
import { DialogForm, InputField, InputList } from "./index.jsx";
import { copyCollection } from "../utils/index.js";

export function ExperienceEntry({
  isOpen,
  addExperienceData,
  screen,
  setScreen,
}) {
  const [positionTitle, setPositionTitle] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [highlights, setHighlights] = useState([
    { id: crypto.randomUUID(), text: "" },
  ]);
  const [hasOverflowed, setHasOverflowed] = useState(false);

  if (!isOpen) return;

  const handlePositionTitleChange = (e) =>
    setPositionTitle(e.target.value.trim());
  const handleCompanyChange = (e) => setCompany(e.target.value.trim());
  const handleStartDateChange = (e) => setStartDate(e.target.value.trim());
  const handleEndDateChange = (e) => setEndDate(e.target.value.trim());

  const isCreationPhase = screen.startsWith("creation");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isCreationPhase) {
      const data = { positionTitle, company, startDate, endDate, highlights };
      addExperienceData(data);
      setScreen("edit-cv");
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <DialogForm
      open={isOpen}
      onSubmit={handleSubmit}
      className="experience-entry-dialog"
      heading="Experience Entry"
    >
      <InputField
        {...{
          labelText: "Position Title",
          placeholder: "IT Support Assistant",
          id: "position-title",
          autoFocus: !hasOverflowed,
          required: true,
          onChange: handlePositionTitleChange,
        }}
      />
      <InputField
        {...{
          labelText: "Company Name",
          placeholder: "ABC Technologies",
          id: "company-name",
          autoComplete: "organization",
          required: true,
          spellCheck: true,
          onChange: handleCompanyChange,
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
          labelText: "Date Finished (optional)",
          id: "end-date",
          type: "date",
          max: today,
          onChange: handleEndDateChange,
        }}
      />

      <InputList
        itemNaming={["Highlight", "Highlights"]}
        placeholderTexts={[
          "Reduced Page Load by 15%",
          "Led a team of 12 engineers.",
          "Reduced API response time by 45%",
        ]}
        items={highlights}
        hasOverflowed={hasOverflowed}
        onItemChange={handleHighlightChange}
        onAddItemClick={handleAddHighlightClick}
      />

      <button type="submit">Save</button>
    </DialogForm>
  );
}
