import { useState } from "react";
import "../styles/PersonalEntry.css";
import { DialogForm, InputField } from "./index";

export function PersonalEntry({
  isOpen,
  screen,
  setScreen,
  personalData,
  setPersonalData,
}) {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");

  if (!isOpen) return;

  const handleNameChange = (e) => setName(e.target.value.trim());
  const handleProfessionChange = (e) => setProfession(e.target.value.trim());
  const handleEmailChange = (e) => setEmail(e.target.value.trim());
  const handlePhoneChange = (e) => setPhone(e.target.value.trim());
  const handleCityChange = (e) => setCity(e.target.value.trim());
  const handleProvinceChange = (e) => setProvince(e.target.value.trim());

  const isCreationPhase = screen.startsWith("creation");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isCreationPhase) {
      setPersonalData({
        ...personalData,
        ...{ name, profession, email, phone, city, province },
      });
      setScreen("creation-education");
    }
  };

  return (
    <DialogForm
      open={isOpen}
      onSubmit={handleSubmit}
      className="personal-entry-dialog"
      heading="Personal Entry"
    >
      <InputField
        {...{
          labelText: "Name",
          id: "name",
          placeholder: "John Doe",
          autoComplete: "name",
          autoFocus: true,
          required: true,
          onChange: handleNameChange,
        }}
      />
      <InputField
        {...{
          labelText: "Profession",
          placeholder: "Software Engineer",
          id: "profession",
          autoComplete: "organization-title",
          required: true,
          onChange: handleProfessionChange,
        }}
      />
      <InputField
        {...{
          labelText: "Email",
          placeholder: "johndoe@email.com",
          id: "email",
          type: "email",
          autoComplete: "email",
          autoCapitalize: "off",
          required: true,
          onChange: handleEmailChange,
        }}
      />
      <InputField
        {...{
          labelText: "Phone Number",
          placeholder: "(123) 456-7890",
          id: "tel",
          type: "tel",
          autoComplete: "tel",
          required: true,
          onChange: handlePhoneChange,
        }}
      />
      <InputField
        {...{
          labelText: "City",
          placeholder: "Austin",
          id: "city",
          autoComplete: "address-level2",
          autoCorrect: "off",
          required: true,
          onChange: handleCityChange,
        }}
      />
      <InputField
        {...{
          labelText: "State/Province",
          placeholder: "Texas",
          id: "province",
          autoComplete: "address-level1",
          autoCorrect: "off",
          required: true,
          onChange: handleProvinceChange,
        }}
      />

      <button type="submit">{isCreationPhase ? "Next" : "Save"}</button>
    </DialogForm>
  );
}
