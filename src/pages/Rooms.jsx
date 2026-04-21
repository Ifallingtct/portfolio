import { Link } from "react-router-dom";
import "../styles/Rooms.css";
import { useState } from "react";



const areas = [
  {
    id: "Hà Đông",
    title: "Quận Hà Đông",
    desc: "Nhiều phòng giá rẻ cho sinh viên",
    image: "/images/hadong.jpg",
  },
  {
    id: "Cầu Giấy",
    title: "Cầu Giấy",
    desc: "Gần nhiều trường đại học",
    image: "/images/caugiay.jpg",
  },
  {
    id: "Đống Đa",
    title: "Đống Đa",
    desc: "Khu trung tâm",
    image: "/images/dongda.jpg",
  },
  {
    id: "all",
    title: "Tất cả phòng",
    desc: "Xem toàn bộ phòng trọ",
    image: "/images/all.jpg",
  },
];

const Rooms = () => {
  // 🔥 KHÔNG useEffect nữa
  const [rooms] = useState(() => {
    return JSON.parse(localStorage.getItem("rooms")) || {};
  });

  return (
    <div className="rooms">
  <h1>Danh sách khu vực</h1>

  <div className="rooms-grid">
    {areas.map((area) => (
      <Link to={`/rooms/${area.id}`} key={area.id} className="area-card">
        <img src={area.image} alt="" />
        <h3>{area.title}</h3>
        <p>{area.desc}</p>
      </Link>
    ))}
  </div>
</div>
  );
};

export default Rooms;