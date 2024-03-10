import React, { useState } from "react";
import {formatPrice} from "@/utils/formatPrice";

export const MainFilters = ( {filters} ) => {
  const [isProjectSelectorOpen, setIsProjectSelectorOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState("Все");
  const [selectedRooms, setSelectedRooms] = useState("Все");
  const [studioRoomBtnActive, setStudioRoomBtnActive] = useState(false);
  const [oneRoomBtnActive, setOneRoomBtnActive] = useState(false);
  const [twoRoomBtnActive, setTwoRoomBtnActive] = useState(false);
  const [threeRoomBtnActive, setThreeRoomBtnActive] = useState(false);
  const [fourRoomBtnActive, setFourRoomBtnActive] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minSquare, setMinSquare] = useState("");
  const [maxSquare, setMaxSquare] = useState("");
  
  const toggleProjectSelector = () => {
    setIsProjectSelectorOpen(!isProjectSelectorOpen);
  };

  const toggleRoomBtnActivator = (roomNumber) => {
    switch(roomNumber) {
      case "studio":
        setStudioRoomBtnActive(!studioRoomBtnActive);
        break;
      case "one":
        setOneRoomBtnActive(!oneRoomBtnActive);
        break;
      case "two":
        setTwoRoomBtnActive(!twoRoomBtnActive);
        break;
      case "three":
        setThreeRoomBtnActive(!threeRoomBtnActive);
        break;
      case "four":
        setFourRoomBtnActive(!fourRoomBtnActive);
        break;
    }
  }

  const toggleSelectedProject = (project) => {
    setSelectedProject(project.title);
    setIsProjectSelectorOpen(false);
    // countFilteredFlats(project.title);
  }

  const handleMinPriceInputChange = (event) => {
    const handleValue = event.target.value;
    setMinPrice(handleValue)
  }

  const handleMaxPriceInputChange = (event) => {
    const handleValue = event.target.value;
    setMaxPrice(handleValue)
  }

  const handleMinSquareInputChange = (event) => {
    const handleValue = event.target.value;
    setMinSquare(handleValue)
  }

  const handleMaxSquareInputChange = (event) => {
    const handleValue = event.target.value;
    setMaxSquare(handleValue)
  }

  const handleRoomSelect = (room) => {
    setSelectedRooms(room.number);
    onRoomSelect(room.number);
  }

  const clearAllFiltersBtn = () => {
    setSelectedProject("Все");
    setStudioRoomBtnActive(false);
    setOneRoomBtnActive(false);
    setTwoRoomBtnActive(false);
    setThreeRoomBtnActive(false);
    setFourRoomBtnActive(false);
    setMinPrice("");
    setMaxPrice("");
    setMinSquare("");
    setMaxSquare("");
  }

  return (
    <div className="mainFiltersContainer">
      <h1>Планировка</h1>
      <div className="filtersContainer">
        <div className="progectListsContainer">
          <h2>Проект</h2>
          <div className={`projectsDropdown  ${isProjectSelectorOpen ? 'open' : ''}`} >
            <button className="progectsListBtn" onClick={toggleProjectSelector}>
              <p>{selectedProject}</p>
              <img src="vector.svg" alt="vector" />
            </button>
            <ul className={`projectsList_list ${isProjectSelectorOpen ? 'open' : ''}`}>
              <li className="projectsList_list-item" onClick={() => {setSelectedProject("Все"); setIsProjectSelectorOpen()}}>Все</li>
              {filters.projects.map((project) => (
                !project.disabled && (
                  <li 
                    className="projectsList_list-item" 
                    key={project.id} 
                    onClick={() => toggleSelectedProject(project)}
                  >
                    {project.title}
                  </li>
                )
              ))}
            </ul>
          </div>
        </div>
        <div className="flatRoomBtnsContainer">
          <h2>Укажите количество комнат</h2>
          <div className="roomsBtnsContainer">
            <button 
              className={`roomsBtns-studio ${studioRoomBtnActive ? 'active' : ''}`}
              onClick={() => toggleRoomBtnActivator('studio')}
            >
              <p>Ст</p>
            </button>
            <button 
              className={`roomsBtns-1rooms ${oneRoomBtnActive ? 'active' : ''}`}
              onClick={() => toggleRoomBtnActivator('one')}
            >
              <p>1К</p>
            </button>
            <button 
              className={`roomsBtns-2rooms ${twoRoomBtnActive ? 'active' : ''}`}
              onClick={() => toggleRoomBtnActivator('two')}
            >
              <p>2К</p>
            </button>
            <button 
              className={`roomsBtns-3rooms ${threeRoomBtnActive ? 'active' : ''}`}
              onClick={() => toggleRoomBtnActivator('three')}
            >
              <p>3К</p>
            </button>
            <button 
              className={`roomsBtns-4rooms ${fourRoomBtnActive ? 'active' : ''}`}
              onClick={() => toggleRoomBtnActivator('four')}  
            >
              <p>4К</p>
            </button>
          </div>
        </div>
        <div className="priceFilterContainer">
          <h2>Стоимость</h2>
          <div className="priceFilter">
            <div className="min_priceContainer">
              <p>от</p>
              <div className="min_priceWrapper">
                <input 
                  className="min_price"
                  type="number" 
                  placeholder={` ${formatPrice(filters.price.min_range)}`} 
                  value={minPrice}
                  onChange={handleMinPriceInputChange}
                  // onBlur={handleMinPriceInputBlur}
                />
              </div>
              <p>₽</p>
            </div>
            <p className="line"></p>
            <div className="max_priceContainer">
              <p>до</p>
              <div className="max_priceWrapper">
                <input 
                  className="max_price" 
                  type="number" 
                  placeholder={`${formatPrice(filters.price.max_range)} `} 
                  value={maxPrice}
                  onChange={handleMaxPriceInputChange}
                  // onBlur={handleMaxPriceInputBlur}
                />
              </div>
              <p>₽</p>
            </div>
          </div>
        </div>
        <div className="squareFilterContainer">
        <h2>Задайте площадь, м<sup>2</sup></h2>
        <div className="squareFilter">
            <div className="min_squareContainer">
              <p>от</p>
              <div className="min_squareWrapper">
                <input 
                  className="min_square"
                  type="number" 
                  placeholder={filters.square.min_range} 
                  value={minSquare}
                  onChange={handleMinSquareInputChange}
                  // onBlur={handleMinPriceInputBlur}
                />
              </div>
            </div>
            <p className="line"></p>
            <div className="max_squareContainer">
              <p>до</p>
              <div className="max_squareWrapper">
                <input 
                  className="max_square" 
                  type="number" 
                  placeholder={filters.square.max_range} 
                  value={maxSquare}
                  onChange={handleMaxSquareInputChange}
                  // onBlur={handleMaxPriceInputBlur}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="resultsBtnContainer">
        <div className="resultInfo">
          <p>Найдено 6 квартир</p>
        </div>
        <div className="resultClearBtn">
          <button>
            <div className="clearBtnContainer" onClick={clearAllFiltersBtn}>
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