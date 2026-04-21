import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CreatePost.css";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [district, setDistrict] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  // owner
  const [ownerName, setOwnerName] = useState("");
  const [ownerPhone, setOwnerPhone] = useState("");
  const [ownerFacebook, setOwnerFacebook] = useState("");

  // images
  const [images, setImages] = useState([]);

  const navigate = useNavigate();

  // upload ảnh
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...imageUrls]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !price || !district || !address) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    const oldRooms = JSON.parse(localStorage.getItem("rooms")) || {};
    const id = Date.now();

    const newRoom = {
      id,
      title,
      price,
      district,
      address,
      description,

      images: images.length ? images : ["/images/room1.jpg"],

      owner: {
        name: ownerName,
        phone: ownerPhone,
        facebook: ownerFacebook,
      },
    };

    oldRooms[id] = newRoom;
    localStorage.setItem("rooms", JSON.stringify(oldRooms));

    navigate("/rooms");
  };

  return (
    <div className="create-card">

      <h2>Đăng phòng trọ</h2>

      <form onSubmit={handleSubmit}>

        {/* QUẬN */}
        <select value={district} onChange={(e) => setDistrict(e.target.value)}>
          <option value="">-- Chọn quận --</option>
          <option value="Hà Đông">Hà Đông</option>
          <option value="Cầu Giấy">Cầu Giấy</option>
          <option value="Đống Đa">Đống Đa</option>
          <option value="Thanh Xuân">Thanh Xuân</option>
          <option value="Hai Bà Trưng">Hai Bà Trưng</option>
        </select>

        {/* INPUT */}
        <input placeholder="Địa chỉ" value={address} onChange={(e) => setAddress(e.target.value)} />
        <input placeholder="Tiêu đề" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input placeholder="Giá" value={price} onChange={(e) => setPrice(e.target.value)} />
        <textarea placeholder="Mô tả" value={description} onChange={(e) => setDescription(e.target.value)} />

        {/* UPLOAD ẢNH */}
        <input type="file" multiple accept="image/*" onChange={handleImageChange} />

        {/* SỐ ẢNH */}
        <div className="image-count">
          📷 Đã chọn: {images.length} ảnh
        </div>

        {/* PREVIEW ẢNH */}
        <div className="preview-images">
          {images.map((img, i) => (
            <img key={i} src={img} alt="" />
          ))}
        </div>

        {/* OWNER */}
        <input placeholder="Tên người đăng" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} />
        <input placeholder="SĐT" value={ownerPhone} onChange={(e) => setOwnerPhone(e.target.value)} />
        <input placeholder="Facebook" value={ownerFacebook} onChange={(e) => setOwnerFacebook(e.target.value)} />

        <button type="submit">Đăng phòng</button>

      </form>
    </div>
  );
}