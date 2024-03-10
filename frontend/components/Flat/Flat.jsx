import Link from "next/link";
import React from "react";
import { formatPrice } from "@/utils/formatPrice";

// export const formatPrice = (price) => {
//   price = price.toString();
//   const parts = price.split('.');

//   parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

//   return parts.join('.');
// }

export const Flat = ({ flats = [], selectedProject = "Все" }) => {

  const filteredFlats = selectedProject === "Все" ? flats : flats.filter(flat => flat.project_title === selectedProject);

  return (
    <section className="flatsList">
      {filteredFlats.map(({ id, project_title, rooms, studio, price, old_price, square, release_dates, floor, image }) => (
        <Link href={`/flats/${id}`} key={id}>
          <div className="flatContainer">
            <div className="flatPriceInfoContainer">
              <div className="pricesAndRoomInfo">
                <div className="flatRoomInfo">
                  <span className="flatRoom">{studio ? 'Студия' : `${rooms}-комнатная`}</span>
                  <span className="flatSquere">{` ${square}м`}<sup>2</sup></span>
                </div>
                <div className="priceInfo">
                  <span className="actualPrice">{`${formatPrice(price)} ₽`}</span>
                  <span className="oldPrice">{`${formatPrice(old_price)} ₽`}</span>
                </div>
              </div>
              <button>
                <div className="favoriteBtn">
                  <img src="heart.png" alt="heart" />
                </div>
              </button>
            </div>
            <div className="flatImage">
              <img src={image} alt="flat image" />
            </div>
            <div className="buildingInfo">
              <div className="progectInfo">
                <span className="infoName">Проект</span>
                <span className="infoValue">{project_title}</span>
              </div>
              <div className="lineImage"></div>
              <div className="floorInfo">
                <span className="infoName">Этаж</span>
                <span className="infoValue">{`${floor} из 14`}</span>
              </div>
              <div className="lineImage"></div>
              <div className="deadlineInfo">
                <span className="infoName">Срок сдачи</span>
                <span className="infoValue">{`${release_dates}`}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  )
}