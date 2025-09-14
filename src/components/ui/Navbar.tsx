import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./css/navbar.css";

const Navbar = () => {
  // const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });

      // ปิด mobile menu เมื่อขยายหน้าจอ
      if (window.innerWidth > 991 && mobileMenuOpen) {
        setMobileMenuOpen(false);
        // setActiveDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);


  // const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

// const toggleSubmenu = (name: string) => {
//   setActiveSubmenu(activeSubmenu === name ? null : name);
// };


  // กำหนดขนาดตามหน้าจอ
  const getResponsiveClasses = () => {
    if (screenSize.width < 576) return 'xs';
    if (screenSize.width < 768) return 'sm';
    if (screenSize.width < 992) return 'md';
    if (screenSize.width < 1200) return 'lg';
    if (screenSize.width < 1400) return 'xl';
    return 'xxl';
  };

  const responsiveClass = getResponsiveClasses();

  // const handleDropdownToggle = (dropdownName) => {
  //   setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  // };

  // const toggleMobileMenu = () => {
  //   setMobileMenuOpen(!mobileMenuOpen);
  // };

  return (
    <>
      <nav className={`navbar navbar-expand-lg toothbox-navbar fixed-top ${responsiveClass}`}>
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="img\Dental Haus (1).png"
              alt="Dental Haus"
              className="img-fluid"
              style={{ height: '5rem' }}
            />
            {screenSize.width > 575 && (
              <span className="ms-2 fw-bold text-primary">
                {screenSize.width > 768 ? 'Dental Haus' : 'Dental Haus'}
              </span>
            )}
          </Link>

          <button
            className="navbar-toggler me-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-4">
              <li className="nav-item me-2">
                <a className="nav-link active" aria-current="page" href="#">หน้าแรก</a>
              </li>
              <li className="nav-item dropdown me-3">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  บริการ
                </a>
<ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">จัดฟัน</a></li>
    {/* <ul className="dropdown-menu" aria-labelledby="bracesDropdown">
      <li><a className="dropdown-item" href="#">จัดฟันโลหะ</a></li>
      <li><a className="dropdown-item" href="#">จัดฟันเซรามิก</a></li>
      <li><a className="dropdown-item" href="#">จัดฟันใส Invisalign</a></li>
    </ul> */}
  <li><a className="dropdown-item" href="#">ทันตกรรมความงาม</a></li>
  <li><a className="dropdown-item" href="#">ฟันปลอม</a></li>
</ul>

              </li>
              <li className="nav-item me-2">
                <a className="nav-link" href="#">โปรโมชั่น</a>
              </li>
              <li className="nav-item me-2">
                <a className="nav-link" href="#">ผลงานของเรา</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'show' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>
    </>
  );
};

export default Navbar;