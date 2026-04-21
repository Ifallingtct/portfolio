import { useParams, Link, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import "../../styles/RoomDetail.css";

const areas = {
  "Hà Đông": { title: "Hà Đông", desc: "Giá rẻ" },
  "Cầu Giấy": { title: "Cầu Giấy", desc: "Gần trường" },
};

const RoomDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const rooms = JSON.parse(localStorage.getItem("rooms")) || {};

  // 🔥 KHÔNG setState nữa
  const filteredRooms = useMemo(() => {
    return Object.values(rooms).filter(
      (room) => id === "all" || room.district === id
    );
  }, [id, rooms]);

  const area = areas[id];

  if (!area && id !== "all") return <h1>Không tìm thấy khu vực</h1>;

  return (
    <div className="room-detail">

      <button onClick={() => navigate(-1)}>←</button>

      {id !== "all" && area && (
        <div>
          <h1>{area.title}</h1>
          <p>{area.desc}</p>
        </div>
      )}

      <div className="room-list">
        {filteredRooms.length === 0 && <p>Chưa có phòng</p>}

        {filteredRooms.map((room) => (
          <Link to={`/room/${room.id}`} key={room.id}>
            <img src={room.images?.[0]} alt="" />
            <h3>{room.title}</h3>
            <p>{room.price}</p>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default RoomDetail;