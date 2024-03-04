import React from "react";

export function FiltersPopup () {
  return (
    <div className="filtersPopupContainer">
      <div className="exitBtnContainer">
        <button className="exitBtn">
          <img src="exit_logo.svg" alt="exit image" />
        </button>
      </div>
      <h1>Фильтр</h1>
      <div className="filtersContainer">
        <h2>Проект</h2>
        <button className="progectsList">
          <p>Все</p>
          <p><img src="vector.svg" alt="vector" /></p>
        </button>
        <h2>Укажите количество комнат</h2>
        <div className="roomsBtnsContainer">
          <button className="roomsBtns-studio">
            <p>Ст</p>
          </button>
          <button className="roomsBtns-1rooms">
            <p>1К</p>
          </button>
          <button className="roomsBtns-2rooms">
            <p>2К</p>
          </button>
          <button className="roomsBtns-3rooms">
            <p>3К</p>
          </button>
          <button className="roomsBtns-4rooms">
            <p>4К</p>
          </button>
        </div>
        <h2>Стоимость</h2>
        <button className="pricefilter">
          <p>Все</p>
          <p><img src="vector.svg" alt="vector" /></p>
        </button>
        <h2>Задайте площадь, м<sup>2</sup></h2>
        <button className="squereFilter">
          <p>Все</p>
          <p><img src="vector.svg" alt="vector" /></p>
        </button>
        <button className="flatResultsBtn">
          Смотреть квартиры
        </button>
      </div>
    </div>
  )
}