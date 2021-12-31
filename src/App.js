import "./App.css";
import Banner from "./components/Banner";
import HotDeals from "./components/HotDeals";
import Navbar from "./components/Navbar";
import Slide from "./components/Slide";
import banner1 from "./assets/banner1.png";
import banner2 from "./assets/banner2.png";
import banner3 from "./assets/banner3.png";
import banner4 from "./assets/banner4.png";
import Footer from "./components/Footer";
import FixedNavbar from "./components/FixedNavbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slide />
      <HotDeals
        title={"Sản Phẩm Bán Chạy"}
        top={"879px"}
        top2={"52px"}
        top3={"430px"}
      />
      <HotDeals
        title={"Sản Phẩm Ưu Đãi"}
        top={"1422px"}
        top2={"52px"}
        top3={"430px"}
      />
      <div className="line1"></div>
      <div className="banner-container">
        <Banner
          title="VNA MALL Ưu đãi hấp dẫn - Đổi bằng dặm bay VIETNAM AIRLINES của bạn"
          top="0px"
          width="764px"
          img={banner1}
        />
        <HotDeals top={"518px"} top3={"378px"} left="50px" />

        <div className="line2"></div>

        <Banner
          title="VIETNAM AIRLINES - Ưu đãi lớn giảm giá tới 50%!"
          top="1041.01px"
          width="497px"
          img={banner2}
        />
        <HotDeals top={"1559.01px"} top3={"378px"} left="50px" />

        <div className="line3"></div>

        <Banner
          title="VIETNAM AIRLINES - Gói Quà Tết Nhanh & Gọn"
          top="2082.01px"
          width="476px"
          img={banner3}
        />
        <HotDeals top={"2600.01px"} top3={"378px"} left="50px" />

        <div className="line4"></div>

        <Banner
          title="VIETNAM AIRLINES - Rượu Vang Chính Hãng"
          top="3123.02px"
          width="456px"
          img={banner4}
        />
        <HotDeals top={"3641.02px"} top3={"378px"} left="50px" />

        <div className="line5"></div>
      </div>

      <FixedNavbar />
      <Footer />
    </div>
  );
}

export default App;
