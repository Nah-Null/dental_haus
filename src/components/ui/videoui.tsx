import './css/videoui.css';
import Bon from './Button';

const VideoUI = () => {
  return (
    <div className="about-section text-black">
      {/* วิดีโอพื้นหลัง */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="videos/dentist.mp4" type="video/mp4" />
      </video>


      {/* เนื้อหาที่อยู่ด้านบน */}
      <div className="content">
        <h2>Dental Haus</h2>
        <h3>คลินิกทันตกรรมเดนทัลเฮาส์ Dental Haus แจ้งวัฒนะ ทำฟัน จัดฟัน รากเทียม</h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100vw'         // เต็มความกว้างหน้าจอ
          }}
        >
          <Bon name="นัดหมายพบทันตแพท" onClick={() => alert("ทดสอบการกดปุ่ม")} />
        </div>

      </div>
    </div>
  );
};

export default VideoUI;
