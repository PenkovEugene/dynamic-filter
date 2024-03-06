export const MainFilters = () => {
  return (
    <div className="mainFiltersContainer">
      <h1>Планировка</h1>
      <div className="filtersContainer">
        <div className="progectListsContainer">
        <h2>Проект</h2>
        <button className="progectsList">
          <p>Все</p>
          <p><img src="vector.svg" alt="vector" /></p>
        </button>
        </div>
        <div className="flatRoomBtnsContainer">
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
        </div>
        <div className="priceFilterContainer">
          <h2>Стоимость</h2>
          <button className="pricefilter">
            <p>от 2 800 000 ₽</p>
            <p className="line"></p>
            <p>до 10 730 000 ₽</p>
          </button>
        </div>
        <div className="squereFilterContainer">
        <h2>Задайте площадь, м<sup>2</sup></h2>
          <button className="squereFilter">
            <p>от 21,1</p>
            <p className="line"></p>
            <p>до 98,4</p>
          </button>
        </div>
      </div>
      <div className="resultsBtnContainer">
        <div className="resultInfo">
          <p>Найдено 245 квартир</p>
        </div>
        <div className="resultClearBtn">
          <button>
            <div className="clearBtnContainer">
              <img src="reset_img.svg" alt="reset image" />
              <p>Очистить всё</p>
            </div>
          </button>
        </div>
      </div>
      <div className="mainFilterLine"></div>
    </div>
  )
}