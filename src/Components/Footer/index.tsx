import BigRat from "../../assets/icon/IconRat.svg";

import "./styles.css";

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <div className="rat">
          <img src={BigRat} alt="Rato Grande" />
        </div>
        <div className="footer-links">
          <ul>
            <li className="company">Company</li>
            <div className="links">About us</div>
            <div className="links">Partnership</div>
            <div className="links">About us</div>
            <div className="links">FAQ</div>
          </ul>
          <ul>
            <li className="company">Company</li>
            <div className="links">About us</div>
            <div className="links">Partnership</div>
            <div className="links">About us</div>
            <div className="links">FAQ</div>
          </ul>
          <ul>
            <li className="company">Company</li>
            <div className="links">About us</div>
            <div className="links">Partnership</div>
            <div className="links">About us</div>
            <div className="links">FAQ</div>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
