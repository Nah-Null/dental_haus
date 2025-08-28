import Navbar from "./ui/Navbar";
import Videoui from "./ui/videoui";
import Imgui from "./ui/imgui";

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
      {/* Img UI */}
      {/* <div>
        <Imgui />
      </div> */}
    </>
  );
}

export default Index;