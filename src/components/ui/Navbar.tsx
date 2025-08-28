import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img 
            src="https://static.vecteezy.com/system/resources/previews/008/710/295/non_2x/dental-clinic-logo-teeth-tooth-abstract-design-template-free-vector.jpg" 
            alt="Dental Logo" 
            style={{ width: '80px', height: '80px', objectFit: 'contain' }}  
          />
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
  );
};

export default Navbar;