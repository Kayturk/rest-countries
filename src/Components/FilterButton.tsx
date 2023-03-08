import React, {useState, useRef} from "react";


const FilterButton = () => {

  const [ dropdown, setDropdown ] = useState(false);
  const buttonRef = useRef();
  const dropDownRef = useRef();

  window.addEventListener("click", (e) => { 
    if(e.target !== dropDownRef.current && e.target !== buttonRef.current) {
     setDropdown(false);
    }
  }
  )
    return (
 
        <div className="button_container">
          <button className="filter_button" onClick={ () => setDropdown(!dropdown)} ref = {buttonRef}>
            <p className="filter_text">Filter by Region</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Chevron Down</title>
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="48"
                d="M112 184l144 144 144-144"
              />
            </svg>
          </button>
          {
            dropdown &&  <div
            className="dropdown_content"
            onClick={ () => setDropdown(false) }
            ref = {dropDownRef}
            
          >
              <li id="Africa" value="africa"  >
                Africa
              </li>
              <li id="Americas" value="americas" >
                Americas
              </li>
              <li id="Asia" value="asia" >
                Asia
              </li>
              <li id="Europe" value="europe" >
                Europe
              </li>
              <li id="Oceania" value="oceania" >
                Oceania
              </li>
          </div>
          }
        </div>
   
    );
}

export default FilterButton;