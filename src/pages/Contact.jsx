import { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [satisfaction, setSatisfaction] = useState("Hài lòng");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email) {
      alert("Vui lòng nhập đầy đủ thông tin bắt buộc!");
      return;
    }

    const oldFeedback =
      JSON.parse(localStorage.getItem("feedbacks")) || [];

    const newFeedback = {
      id: Date.now(),
      firstName,
      lastName,
      email,
      phone,
      satisfaction,
      comment,
    };

    oldFeedback.push(newFeedback);
    localStorage.setItem("feedbacks", JSON.stringify(oldFeedback));

    alert("Gửi đánh giá thành công!");

    // reset form
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setSatisfaction("Hài lòng");
    setComment("");
  };

  return (
    <div className="contact-container">

      <h2>📝 Thông tin phiếu đánh giá</h2>

      <form onSubmit={handleSubmit}>

        <div className="row">
          <input
            placeholder="First Name *"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            placeholder="Last Name *"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <input
          placeholder="Email *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Số điện thoại"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <div className="radio-group">
          <p>Bạn có hài lòng với dịch vụ web không?</p>

          <label>
            <input
              type="radio"
              value="Hài lòng"
              checked={satisfaction === "Hài lòng"}
              onChange={(e) => setSatisfaction(e.target.value)}
            />
            Hài lòng
          </label>

          <label>
            <input
              type="radio"
              value="Cũng cũng"
              checked={satisfaction === "Cũng cũng"}
              onChange={(e) => setSatisfaction(e.target.value)}
            />
            Cũng cũng
          </label>

          <label>
            <input
              type="radio"
              value="Chưa hài lòng"
              checked={satisfaction === "Chưa hài lòng"}
              onChange={(e) => setSatisfaction(e.target.value)}
            />
            Chưa hài lòng
          </label>
        </div>

        <textarea
          placeholder="Đánh giá và bình luận ý kiến về web"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button type="submit">OK</button>

      </form>
    </div>
  );
}

