import { Fragment } from "react";

export function InputList({
  items,
  itemNaming,
  hasOverflowed,
  placeholderTexts,
  onItemChange,
  onAddItemClick,
}) {
  const [singularName, pluralName] = itemNaming;
  const lowerSingularName = singularName.toLowerCase();

  return (
    <div className="form-group">
      <h3>{pluralName} (optional)</h3>

      <fieldset>
        <legend className="sr-only">{pluralName}</legend>
        {items.map((item, i) => {
          const num = i + 1;

          return (
            <Fragment key={item.id}>
              <label className="sr-only" htmlFor={`${lowerSingularName}${num}`}>
                {singularName} {num}
              </label>
              <input
                type="text"
                name={`${lowerSingularName}${num}`}
                id={`${lowerSingularName}${num}`}
                placeholder={placeholderTexts[i]}
                data-id={item.id}
                value={item.text}
                onChange={onItemChange}
                autoFocus={hasOverflowed}
              />
            </Fragment>
          );
        })}
        {!hasOverflowed && (
          <button type="button" onClick={onAddItemClick}>
            <span className="icon">+</span>
            <span>Add {singularName}</span>
          </button>
        )}
      </fieldset>
    </div>
  );
}
