import { useEffect, useState } from "react";

import "../styles/Portfolio.css";

function Summary() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = 365;
    const interval = setInterval(() => {
      setCount((current) => {
        const nextValue = Math.min(current + 5, target);

        if (nextValue >= target) {
          clearInterval(interval);
        }

        return nextValue;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="portfolio-page">
      <section className="content-section">
        <div className="container">
          <h1 className="section-title">Tổng Kết</h1>

          <div className="summary-card">
            <p>
              Qua học phần này, tôi đã tiếp cận các kỹ năng số cơ bản, nâng cao
              khả năng khai thác thông tin, làm việc nhóm và ứng dụng trí tuệ
              nhân tạo trong học tập.
            </p>

            <p>
              Portfolio giúp tôi hệ thống lại toàn bộ quá trình học tập, đồng
              thời tạo một nơi lưu trữ sản phẩm để phục vụ cho việc phát triển
              nghề nghiệp trong tương lai.
            </p>

            <div className="counter">{count}</div>
            <p className="counter-label">Ngày học tập và phát triển</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Summary;
