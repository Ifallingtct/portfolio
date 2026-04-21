import "../styles/Home.css"
import hanoiMap from "../assets/images/HaNoiMap.jpg"

const Home = () => {
    return(
        <div className="home-nav">
            <div className="home-nav-content">
                <h1>Câu chuyện đằng sau sự ra đời của trohanoi</h1>
                <p>Trang web được tạo ra bởi chính những sinh viên cũng đang và đã từng gặp vấn đề về việc tìm trọ. Ngay từ khi mới bước chân lên học đại học đã sinh ra vấn đề đầu tiên cho tân sinh viên về việc tìm trọ, họ không có cái nhìn khách quan, thực tế trước những tấm ảnh phòng trọ hay những giá thuê trên mạng xã hội vì sau đó khi đi check phòng giá thuê còn kèm thêm phụ phí đồng thời phòng có thể nhỏ hơn, không đủ điều kiện để sinh hoạt hay phòng cũ , bé hơn trong ảnh.</p>
                <p>Chúng tôi hiểu và từ đó tạo ra trang web này nhằm phục vụ mục đích tìm trọ , các vấn đề tìm trọ của bạn được giải đáp và đồng thời trang web có thể giúp cho bạn có cái nhìn phiến diện, thực tế hơn, nhanh hơn trong việc tìm nơi ở, nơi nghỉ ngơi, sự thoải mái như đang ở “nhà”.</p>
            </div>
            <div className="home-nav-image">
            <img src={hanoiMap} />
            </div>
        </div>
    )
}

export default Home;