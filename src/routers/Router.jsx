
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home"
import Rooms from "../pages/Rooms"
import RoomDetail from "../components/UI/RoomDetail";
import RoomItemDetail from "../components/UI/RoomItemDetail";
import CreatePost from "../pages/CreatePost";
import Contact from "../pages/Contact";

export default function Routers() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<RoomDetail />} />
        <Route path="/room/:roomId" element={<RoomItemDetail />} />
        <Route path="/post" element={<CreatePost />} />
        <Route path="/contact" element={<Contact />} />
              <Route path="/contact" element={<Contact />} />
      </Routes>
  );
}