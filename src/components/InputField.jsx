export function InputField({
  id,
  labelText,
  type,
  placeholder,
  required,
  autoComplete,
  autoCorrect,
  autoCapitalize,
  autoFocus,
  spellCheck,
  max,
  onChange,
}) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{labelText}</label>
      <input
        {...{
          placeholder,
          type: type ?? "text",
          id,
          name: id,
          required,
          autoComplete,
          autoCorrect,
          autoCapitalize,
          autoFocus,
          spellCheck,
          max,
          onChange,
        }}
      />
    </div>
  );
}
