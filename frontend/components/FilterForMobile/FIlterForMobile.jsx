import React, { useState } from "react";
import { FiltersPopup } from "../FiltersPopup/FiltersPopup"

export const FilterForMobile = () => {
  const [isFiltersPopupOpen, setIsFiltersPopupOpen] = useState(false);
  
  const toggleFiltersPopup = () => {
    setIsFiltersPopupOpen(!isFiltersPopupOpen);
  };

  return (
    <div className="layoutAndFilterContainer">
      <h1>Планировки</h1>
      <div className="filterBtnWrapper">
        <button className='filterBtn' onClick={toggleFiltersPopup}>
          Фильтр
          <img src="filter.png" alt="filter logo" />
        </button>
      </div>
      <section className={`filtersPopup ${isFiltersPopupOpen ? 'open' : ''}`}>
        <FiltersPopup toggleFiltersPopup={toggleFiltersPopup}/>
      </section>
    </div>
  )
}