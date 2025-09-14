import Navbar from "./ui/Navbar";
import Videoui from "./ui/videoui";
import AboutSection from "./ui/AboutSection";
import Conten from "./ui/Conten";
import Footer from "./ui/Footer";
function Service() {
  return (
    <>

      {/* Navbar */}
      <div className="fixed top-0 w-full z-50">
        <Navbar />
        <p style={{textAlign:"center"}}>หน้าบริการ</p>
      </div>

      {/* Video UI */}
      <div>
        <Videoui />
      </div>

      {/* AboutSection */}
      <div>
        <AboutSection />
      </div>

            {/* Conten */}
      <div>
        <Conten />
      </div>




      {/* Footer */}
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Service;