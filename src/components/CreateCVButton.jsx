import "../styles/CreateCVButton.css";

export function CreateCVButton({ setScreen }) {
  const handleClick = () => {
    setScreen("creation-personal");
  };

  return (
    <div className="create-cv-wrapper">
      <button type="button" onClick={handleClick} className="create-cv-btn">
        <span aria-hidden="true">+</span> Create CV
      </button>
    </div>
  );
}
