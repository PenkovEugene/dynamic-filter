import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { formatPrice } from "@/utils/formatPrice";

export const FiltersPopup = ({ filters, toggleFiltersPopup }) => {
  const [isProjectSelectorOpen, setIsProjectSelectorOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState("Все");
  const [studioRoomBtnActive, setStudioRoomBtnActive] = useState({disabled: true, active: false});
  const [oneRoomBtnActive, setOneRoomBtnActive] = useState({disabled: true, active: false});
  const [twoRoomBtnActive, setTwoRoomBtnActive] = useState({disabled: true, active: false});
  const [threeRoomBtnActive, setThreeRoomBtnActive] = useState({disabled: true, active: false});
  const [fourRoomBtnActive, setFourRoomBtnActive] = useState({disabled: true, active: false});
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minSquare, setMinSquare] = useState("");
  const [maxSquare, setMaxSquare] = useState("");

  const router = useRouter();

  const toggleProjectSelector = () => {
    setIsProjectSelectorOpen(!isProjectSelectorOpen);
  };

  const toggleSelectedProject = (project) => {
    const projectTitle = project.title
    setSelectedProject(projectTitle);
    setIsProjectSelectorOpen(false);
    updateUrlParams({project: projectTitle !== "Все" ? projectTitle : "Все"});
  }

  const toggleRoomBtnActivator = (roomNumber) => {
    switch(roomNumber) {
      case "studio":
        // setStudioRoomBtnActive(!studioRoomBtnActive.active);
        setStudioRoomBtnActive(prevState => ({...prevState, active: !prevState.active}));
        break;
      case "one":
        setOneRoomBtnActive(prevState => ({...prevState, active: !prevState.active}));
        break;
      case "two":
        setTwoRoomBtnActive(prevState => ({...prevState, active: !prevState.active}));
        break;
      case "three":
        setThreeRoomBtnActive(prevState => ({...prevState, active: !prevState.active}));
        break;
      case "four":
        setFourRoomBtnActive(prevState => ({...prevState, active: !prevState.active}));
        break;
    }
  }

  const handleMinPriceInputChange = (event) => {
    const handleValue = event.target.value;
    setMinPrice(handleValue);
    updateUrlParams({ minPrice: handleValue });
  }


  const handleMaxPriceInputChange = (event) => {
    const handleValue = event.target.value;
    setMaxPrice(handleValue);
    updateUrlParams({ maxPrice: handleValue });
  }

  const handleMinSquareInputChange = (event) => {
    const handleValue = event.target.value;
    setMinSquare(handleValue);
    updateUrlParams({ minSquare: handleValue });
  }

  const handleMaxSquareInputChange = (event) => {
    const handleValue = event.target.value;
    setMaxSquare(handleValue);
    updateUrlParams({ maxSquare: handleValue });
  }

  const updateUrlParams = (params) => {
    const searchParams = new URLSearchParams(router.query);
    Object.entries(params).forEach(([key, value]) => {
      if (value !== '') {
        searchParams.set(key, value);
      } else {
        searchParams.delete(key);
      }
    });
    router.push({
      pathname: router.pathname,
      query: searchParams.toString(),
    });
  };

  useEffect(() => {
    const { project, minPrice, maxPrice, minSquare, maxSquare } = router.query;
    if (project) {
      setSelectedProject(project);
    }
    if (minPrice) {
      setMinPrice(minPrice);
    }
    if (maxPrice) {
      setMaxPrice(maxPrice);
    }
    if (minSquare) {
      setMinSquare(minSquare);
    }
    if (maxSquare) {
      setMaxSquare(maxSquare);
    }
  }, [router.query]);

  return (
    <div className="filtersPopupContainer">
      <div className="exitBtnContainer">
        <button className="exitBtn" onClick={toggleFiltersPopup}>
          <img src="exit_logo.svg" alt="exit image" />
        </button>
      </div>
      <h1>Фильтр</h1>
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
              className={`roomsBtns-studio ${studioRoomBtnActive.active ? 'active' : ''} ${studioRoomBtnActive.disabled ? 'disabled' : ''}`}
              onClick={() => {studioRoomBtnActive.disabled === false ? toggleRoomBtnActivator('studio') : ""}}
            >
              <p>Ст</p>
            </button>
            <button 
              className={`roomsBtns-1rooms ${oneRoomBtnActive.active ? 'active' : ''} ${oneRoomBtnActive.disabled ? 'disabled' : ''}`}
              onClick={() => {oneRoomBtnActive.disabled === false ? toggleRoomBtnActivator('one') : ""}}
            >
              <p>1К</p>
            </button>
            <button 
              className={`roomsBtns-2rooms ${twoRoomBtnActive.active ? 'active' : ''} ${twoRoomBtnActive.disabled ? 'disabled' : ''}`}
              onClick={() => {twoRoomBtnActive.disabled === false ? toggleRoomBtnActivator('two') : ""}}
            >
              <p>2К</p>
            </button>
            <button 
              className={`roomsBtns-3rooms ${threeRoomBtnActive.active ? 'active' : ''} ${threeRoomBtnActive.disabled ? 'disabled' : ''}`}
              onClick={() => {threeRoomBtnActive.disabled === false ? toggleRoomBtnActivator('three') : ""}}
            >
              <p>3К</p>
            </button>
            <button 
              className={`roomsBtns-4rooms ${fourRoomBtnActive.active ? 'active' : ''} ${fourRoomBtnActive.disabled ? 'disabled' : ''}`}
              onClick={() => {fourRoomBtnActive.disabled === false ? toggleRoomBtnActivator('four') : ""}}  
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
        <button className="flatResultsBtn" onClick={toggleFiltersPopup}>
          Смотреть квартиры
        </button>
      </div>
    </div>
  )
}