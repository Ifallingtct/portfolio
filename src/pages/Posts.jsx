import { useState } from "react";

export default function Posts() {
  // 🔥 lấy luôn từ localStorage khi render
  const [rooms, setRooms] = useState(() => {
    return JSON.parse(localStorage.getItem("rooms")) || [];
  });

  return (
    <div>
      <h2>Danh sách phòng trọ</h2>

      {rooms.length === 0 && <p>Chưa có phòng nào</p>}

      {rooms.map((room) => (
        <div
          key={room.id}
          style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}
        >
          <h3>{room.title}</h3>
          <p>{room.content}</p>
        </div>
      ))}
    </div>
  );
}