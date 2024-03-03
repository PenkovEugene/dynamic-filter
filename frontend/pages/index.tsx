import React from 'react';
import { NextPage } from 'next';
import { Flat } from "../components/Flat.jsx"

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
  </div>
);

export default HomePage;
