import React, { useState, useEffect } from "react";
import { FilterForMobile } from "../FilterForMobile/FIlterForMobile"
import { MainFilters } from "../MainFilters/MainFilters"

export const FilterRenderer = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const isSmall = window.matchMedia("(max-width: 1050px)").matches;
      setIsSmallScreen(isSmall);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div className="FilterRendererContainer">
      {isSmallScreen ? <FilterForMobile /> : <MainFilters />}
    </div>
  );
};

