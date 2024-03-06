import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Header } from "../components/Header/Header.jsx";
import fetch from "isomorphic-unfetch";
import { FilterData, FlatData } from "../pages/api/hello";

// const HomePage: NextPage <{ filterData: FilterData[]; flatData: FlatData }> = ({ filterData, flatData }) => {
const HomePage: NextPage = () => {
  
  
  return (
    <div className="appContainer">
      <Header />
      <div className="flatListContainer">
        
      </div>
    </div>
  );
};

// HomePage.getInitialProps = async () => {
//   const res = await fetch("http://localhost:3000/api/hello");
//   const { filterData, flatData } = await res.json();

//   return { filterData, flatData };
// };

export default HomePage;




{/* <div className="layoutAndFilterContainer">
        <h1>Планировки</h1>
        <div className="filterBtnWrapper">
          <button className='filterBtn' onClick={toggleFiltersPopup}>
            Фильтр
            <img src="filter.png" alt="filter logo" />
          </button>
        </div>
      </div>
      <section className="flatsList">
        { flatData.map((flat: FlatData) => <Flat key={flat.id} flatData={flat} />) }
      </section>
      <section className={`filtersPopup ${isFiltersPopupOpen ? 'open' : ''}`}>
        <FiltersPopup filterData={filterData} toggleFiltersPopup={toggleFiltersPopup}/>
      </section> */}