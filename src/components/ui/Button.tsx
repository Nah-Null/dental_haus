import styled from 'styled-components';

type ButtonProps = {
  name: string;
  onClick: () => void;
};

const Button = ({ name, onClick }: ButtonProps) => {
  return (
    <StyledWrapper>
      <button className="button" onClick={onClick}>
        <p className="text">{name}</p>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    display: flex;
    justify-content: center;  /* จัดแนวนอนให้อยู่กลาง */
    align-items: center;      /* จัดแนวตั้งให้อยู่กลาง */
    width: 200px;             /* กำหนดความกว้างปุ่ม (ปรับได้ตามต้องการ) */
    height: 50px;              /* กำหนดความสูงปุ่ม */
    gap: 15px;
    background-color: #007acc;
    outline: 3px #000000ff solid;
    outline-offset: -3px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    transition: 400ms;
    text-align: center;       /* ให้ข้อความจัดกลาง */
  }

  .button .text {
    color: white;
    font-weight: 700;
    font-size: 1em;
    transition: 400ms;
    margin: 0;                /* ลบ margin ของ <p> */
  }

  .button:hover {
    background-color: transparent;
  }

  .button:hover .text {
    color: #007acc;
  }
`;

export default Button;
