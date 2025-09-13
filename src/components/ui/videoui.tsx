function VideoUI() {
  return (
    <>
<div className="relative w-full h-screen flex justify-center items-center">
  <div className="w-[10%] min-w-[10px] aspect-video relative">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover rounded-xl shadow-lg"
      style={{width: '100%', height: '70%'}}
    >
      <source src="/videos/dentist.mp4" type="video/mp4" />
    </video>
  </div>
</div>
    </>
  );
}

export default VideoUI;
