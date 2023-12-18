import "./FilterCheckbox.css";
import checkBoxUnactive from "../../images/checkbox-unactive.svg";
import checkBoxActive from "../../images/checkbox-active.svg";
import React from "react";


export function FilterCheckbox(props) {
  const [srcValue, setSrcValue] = React.useState(checkBoxUnactive);

  React.useEffect(() => {
    if (props.isPathSavedMovies === false) {
      const lastSearchMovies = JSON.parse(localStorage.getItem('isShort'));
    lastSearchMovies ? setSrcValue(checkBoxActive) : setSrcValue(checkBoxUnactive)
    }
  }, [props.isPathSavedMovies])

  function changeImage() {
    if (srcValue === checkBoxUnactive) {
      setSrcValue(checkBoxActive);
      props.setIsShort(true)
    } else {
      setSrcValue(checkBoxUnactive);
      props.setIsShort(false)

    }
  };

  return (
    <img className="search-form__checkbox" 
    src={srcValue} 
    onClick={() => {
      changeImage();
    }}
    alt="Чекбокс"
    />
  )
}