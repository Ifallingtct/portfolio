import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import "../../styles/RoomItemDetail.css"


const RoomItemDetail = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();

  const rooms = JSON.parse(localStorage.getItem("rooms")) || {};
  const room = rooms[roomId];

  const [mainImage, setMainImage] = useState(room?.images?.[0]);

  if (!room) return <h1>Không tìm thấy phòng</h1>;

  return (
    <div className="room-detail-page">

      <button onClick={() => navigate(-1)}>← Back</button>

      <div className="content">

        <div className="gallery">
          <img src={mainImage} className="main-img" />

          <div className="thumb-list">
            {room.images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="info">
          <h1>{room.title}</h1>
          <p>{room.price}</p>
          <p>{room.address}</p>
          <p>{room.description}</p>

          <div>
            <h3>{room.owner.name}</h3>
            <p>{room.owner.phone}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RoomItemDetail;