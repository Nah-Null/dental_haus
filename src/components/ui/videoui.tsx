function videoui() {
  return (
  <>
      {/* Main Content */}
      <div className="relative w-full" style={{ width: '155%' }}>
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 object-cover"
          style={{
            width: '100%',
            height: '100%'
          }}
        >
          <source src="./videos/dentist.mp4" type="video/mp4" />
        </video>

        {/* Overlay Div */}
        <div
          className="bg-opacity-50 flex items-center justify-center"
          style={{ position: 'absolute', top: 200, left: 320, width: '50%', height: '50%' }}
        >
          <div className="text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4"
              style={{
                position: 'absolute',
                top: '50px',
                right: '130px',
                padding: '12px 24px'
              }}
            >
              Dental Huas
            </h1>
            <p className="text-lg md:text-xl mb-6"
              style={{
                position: 'absolute',
                top: '150px',
                right: '155px',
                padding: '12px 24px'
              }}
            >
              ดูแลรอยยิ้มของคุณด้วยความเชี่ยวชาญ
            </p>
            <a href="https://sites.google.com/d/1oSQ4_fWQ4vcmQmMYQJa7PP4wpFZ8VnXu/p/1NIv8FqH89cgnUadMUetBcU61_mFRwZ23/edit">
              <button
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300"
              style={{
                position: 'absolute',
                top: '250px',
                right: '250px',
                padding: '12px 24px'
              }}
            >
              นัดหมายตรวจ
            </button>
            </a>
          </div>
        </div>
      </div>
  </>
  );
}
export default videoui;