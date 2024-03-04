import React from 'react';
import { NextPage } from 'next';
import { Flat } from "../components/Flat/Flat.jsx"
import { FiltersPopup } from "../components/FiltersPopup/FiltersPopup.jsx"

const HomePage: NextPage = () => (
  <div className="mainPageContainer">
    <div className="layoutAndFilterContainer">
      <h1>Планировки</h1>
      <div className="filterBtnWrapper">
        <button className='filterBtn'>
          Фильтр
          <img src="filter.png" alt="filter logo" />
        </button>
      </div>
    </div>
    <section className="flatsList">
      <Flat />
      <Flat />
    </section>
    <section className="filtersPopup">
      <FiltersPopup />
    </section>
  </div>
);

export default HomePage;
