function ImgUI() {
  return (
    <>
      {/* Main Content */}
      <div className="relative w-full" style={{ height: '600px' }}>
        {/* Background Image */}
        <img
          className="absolute inset-0 object-cover"
          src="./img/2258187.jpg"
          alt="dentist"
          style={{
            width: '100%',
            height: '600px',
            marginTop: '50px'
          }}
        />

        {/* Overlay Div */}
        <div
          className="bg-black bg-opacity-50 flex items-center justify-center"
          style={{ position: 'absolute', top: 700, left: 200, width: '70%'}}
        >
            
            <img
          className="absolute inset-0 object-cover"
          src="https://www.shutterstock.com/image-photo/blurred-dental-clinic-background-defocused-600nw-2326575003.jpg"
          alt="dentist"
          style={{
            width: '100%',
            height: '550px',
          }}
        />
        </div>
      </div>
    </>
  );
}

export default ImgUI;