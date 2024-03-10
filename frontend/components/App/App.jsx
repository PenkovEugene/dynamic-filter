import React from "react";
import { getFlats } from "../../store/flats/flatsSlice";
import { getFilters } from "../../store/filters/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Header } from "../Header/Header.jsx";
import { Flat } from "../Flat/Flat.jsx";

const App = ( {selectedProject} ) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlats());
    dispatch(getFilters());
  }, [dispatch])

  const { list } = useSelector(({ flats }) => flats);
  // const { list } = useSelector(({ filters }) => filters);

  return (
    <div className="appContainer">
      <Header />
      <div className="flatListContainer">
        <Flat flats={list} selectedProject={selectedProject}/>
      </div>
    </div>
  )
}

export default App;