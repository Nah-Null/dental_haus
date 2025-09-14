import Navbar from "./ui/Navbar";
import Videoui from "./ui/videoui";
import AboutSection from "./ui/AboutSection";
import Conten from "./ui/Conten";
import Footer from "./ui/Footer";
function Index() {
  return (
    <>

      {/* Navbar */}
      <div className="fixed top-0 w-full z-50">
        <Navbar />
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

export default Index;