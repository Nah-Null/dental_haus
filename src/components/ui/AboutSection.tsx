import React from 'react';
import './css/AboutSection.css'; // Import the CSS file

const AboutSection = () => {
  return (
    <div className="about-section text-black">
      <h2>Dental Haus</h2>
      <p>
        ให้บริการด้านทันตกรรมครบวงจร ทั้งทันตกรรมเพื่อความงาม เช่น ฟอกสีฟัน จัดฟัน ทำครอบฟัน
        และ ทันตกรรมเพื่อสุขภาพ เช่น อุดฟัน ขูดหินปูน รักษารากฟัน โดยทีมทันตแพทย์ผู้เชี่ยวชาญ
        จากมหาวิทยาลัยชั้นนำ ประสบการณ์การรักษากว่า 1000 เคส พร้อมรองรับลูกค้าทุกท่านทั้งทั่วไป
        และ ผู้ใช้สิทธิประกันสังคมที่ไม่ต้องสำรองจ่าย มอบรอยยิ้มมั่นใจกลับคืนให้คุณทุกครั้งที่มาเยือน
      </p>
      <button className="appointment-button">นัดพบทันตแพทย์</button>
    </div>
  );
};

export default AboutSection;