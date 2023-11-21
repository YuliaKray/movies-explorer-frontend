import "./FilterCheckbox.css";
import checkBoxUnactive from "../../images/checkbox-unactive.svg";
import checkBoxActive from "../../images/checkbox-active.svg";
import React from "react";


export function FilterCheckbox(props) {
  const [srcValue, setSrcValue] = React.useState(checkBoxUnactive);
  const [isShort, setIsShort] = React.useState(props.isShort);

  React.useEffect(() => {
    const lastSearchMovies = JSON.parse(localStorage.getItem('searchMovies'));
    lastSearchMovies.isShort ? setSrcValue(checkBoxActive) : setSrcValue(checkBoxUnactive)
  }, [])

  function changeImage() {
    if (srcValue === checkBoxUnactive) {
      setSrcValue(checkBoxActive);
      // setIsShort(true);
      props.setIsShort(true)
      // console.log(isShort)
    } else {
      setSrcValue(checkBoxUnactive);
      // setIsShort(false);
      props.setIsShort(false)

    }
    // props.filter();
    // console.log(isShort)
  };

  return (
    <img className="search-form__checkbox" 
    src={srcValue} 
    onClick={() => {
      changeImage();
      // props.filter() 
      // props.setIsShort(isShort);
      // console.log(isShort)

    }}
    alt="Чекбокс"
    />
  )
}