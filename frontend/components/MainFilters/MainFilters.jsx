import React, { useState } from "react";

export const MainFilters = ( {filters} ) => {
  const [isProjectSelectorOpen, setIsProjectSelectorOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState("Все");
  
  const toggleProjectSelector = () => {
    setIsProjectSelectorOpen(!isProjectSelectorOpen);
  };

  const toggleSelectedProject = (project) => {
    setSelectedProject(project.title);
    setIsProjectSelectorOpen(false);
  }

  return (
    <div className="mainFiltersContainer">
      <h1>Планировка</h1>
      <div className="filtersContainer">
        <div className="progectListsContainer">
          <h2>Проект</h2>
          <div className="projectsDropdown">
            <button className="progectsListBtn" onClick={toggleProjectSelector}>
              <p>{selectedProject}</p>
              <img src="vector.svg" alt="vector" />
            </button>
            <ul className={`projectsList_list ${isProjectSelectorOpen ? 'open' : ''}`}>
              <li className="projectsList_list-item" onClick={() => {setSelectedProject("Все"); setIsProjectSelectorOpen()}}>Все</li>
              {filters.projects.map((project) => (
                !project.disabled && (
                  <li className="projectsList_list-item" key={project.id} onClick={() => toggleSelectedProject(project)}>
                  {project.title}
                  </li>
                )
              ))}
            </ul>
            {/* <input type="text" name="select-project" value="" className="projectsDropdownInput-hidden"/> */}
          </div>
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