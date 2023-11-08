import "./FilterCheckbox.css";
import checkBoxUnactive from "../../images/checkbox-unactive.svg";
import checkBoxActive from "../../images/checkbox-active.svg";
import React from "react";


export function FilterCheckbox() {
  const [srcValue, setSrcValue] = React.useState(checkBoxUnactive)

  function changeImage() {
    if (srcValue === checkBoxUnactive) {
      setSrcValue(checkBoxActive)
    } else {
      setSrcValue(checkBoxUnactive)
    }
  };

  return (
    <img className="search-form__checkbox" 
    src={srcValue} 
    onClick={changeImage}
    alt="Чекбокс"
    />
  )
}