import React, { useState } from 'react';
import { NextPage } from 'next';
import { Flat } from "../components/Flat/Flat.jsx"
import { FiltersPopup } from "../components/FiltersPopup/FiltersPopup.jsx"

const HomePage: NextPage = () => {
  const [isFiltersPopupOpen, setIsFiltersPopupOpen] = useState(false);

  const toggleFiltersPopup = () => {
    setIsFiltersPopupOpen(!isFiltersPopupOpen);
  };
  
  return (
    <div className="mainPageContainer">
      <div className="layoutAndFilterContainer">
        <h1>Планировки</h1>
        <div className="filterBtnWrapper">
          <button className='filterBtn' onClick={toggleFiltersPopup}>
            Фильтр
            <img src="filter.png" alt="filter logo" />
          </button>
        </div>
      </div>
      <section className="flatsList">
        <Flat />
        <Flat />
      </section>
      <section className={`filtersPopup ${isFiltersPopupOpen ? 'open' : ''}`}>
        <FiltersPopup toggleFiltersPopup={toggleFiltersPopup}/>
      </section>
    </div>
  );
};

export default HomePage;
