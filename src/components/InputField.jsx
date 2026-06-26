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
}) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{labelText}</label>
      <br></br>
      <input
        type={type ?? "text"}
        name={id}
        id={id}
        placeholder={placeholder ?? ""}
        required={required}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        autoCapitalize={autoCapitalize}
        autoFocus={autoFocus}
      />
      <br></br>
    </div>
  );
}
