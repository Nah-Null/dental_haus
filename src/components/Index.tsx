import Navbar from "./Navbar";

function Index() {
  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>

      {/* Section */}
      <header className="relative h-screen w-full overflow-hidden pt-20">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/dentist.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Overlay Content */}
        <div 
          className="relative z-30 flex items-center justify-center h-full" 
          style={{ zIndex: 9999 }}
        >
          <div className="text-center px-6">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
              GeeksforGeeks
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-lg max-w-2xl mx-auto">
              Your Gateway to Programming Excellence
            </p>
            
            {/* Call to Action Button */}
            <a
              href="#"
              className="inline-block px-8 py-4 text-lg font-semibold text-white bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      <div className="">
        <img src="./img/2258187.jpg" alt="dentist" className="w-1/5" />
      </div>
    </>
  );
}

export default Index;