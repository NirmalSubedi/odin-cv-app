import "../styles/PersonalEntry.css";
import { DialogForm, InputField } from "./index";

export function PersonalEntry({ isOpen, screen }) {
  if (!isOpen) return;

  return (
    <DialogForm
      open={isOpen}
      className="personal-entry-dialog"
      heading="Personal Entry"
    >
      <InputField
        {...{
          id: "name",
          labelText: "Name",
          placeholder: "John Doe",
          autoComplete: "name",
          autoFocus: true,
          required: true,
        }}
      />
      <InputField
        {...{
          id: "profession",
          labelText: "Profession",
          placeholder: "Software Engineer",
          autoComplete: "organization-title",
          required: true,
        }}
      />
      <InputField
        {...{
          id: "email",
          type: "email",
          labelText: "Email",
          placeholder: "johndoe@email.com",
          autoComplete: "email",
          autoCapitalize: "off",
          required: true,
        }}
      />
      <InputField
        {...{
          id: "tel",
          type: "tel",
          labelText: "Phone Number",
          placeholder: "(123) 456-7890",
          autoComplete: "tel",
          required: true,
        }}
      />
      <InputField
        {...{
          id: "city",
          labelText: "City",
          placeholder: "Austin",
          autoComplete: "address-level2",
          autoCorrect: "off",
          required: true,
        }}
      />
      <InputField
        {...{
          id: "state-or-province",
          labelText: "State/Province",
          placeholder: "Texas",
          autoComplete: "address-level1",
          autoCorrect: "off",
          required: true,
        }}
      />

      <button type="submit">
        {screen.startsWith("creation") ? "Next" : "Save"}
      </button>
    </DialogForm>
  );
}
