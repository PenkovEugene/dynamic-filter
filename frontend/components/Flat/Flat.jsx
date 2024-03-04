export function Flat(props) {
  console.log(props)

  return (
    <div className="flatContainer">
      <div className="flatPriceInfoContainer">
        <div className="pricesAndRoomInfo">
          <div className="flatRoomInfo">
            <span className="flatRoom">1-комнатная </span>
            <span className="flatSquere">21,2 м<sup>2</sup></span>
          </div>
          <div className="priceInfo">
            <span className="actualPrice">4 040 000 ₽</span>
            <span className="oldPrice">7 700 000 ₽</span>
          </div>
        </div>
        <button>
          <div className="favoriteBtn">
            <img src="heart.png" alt="heart" />
          </div>
        </button>
      </div>
      <div className="flatImage">
        <img src="flat_img.svg" alt="flat image" />
      </div>
      <div className="buildingInfo">
        <div className="progectInfo">
          <span className="infoName">Проект</span>
          <span className="infoValue">ЖК Мотивы</span>
        </div>
        <div className="lineImage"></div>
        <div className="floorInfo">
          <span className="infoName">Этаж</span>
          <span className="infoValue">2 из 14</span>
        </div>
        <div className="lineImage"></div>
        <div className="deadlineInfo">
          <span className="infoName">Срок сдачи</span>
          <span className="infoValue">II квартал 2025</span>
        </div>
      </div>
    </div>
  )
}