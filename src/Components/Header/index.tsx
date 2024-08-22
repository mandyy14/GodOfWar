import logo from "../../assets/icon/IconRatings.svg";
import Menu from "../../assets/icon/IconMenu.svg";
import Search from "../../assets/icon/IconSearch.svg";

import "./styles.css";
import Button from "../Button";

const handleClick = () => {
  alert("Oi prof Caio, você fez login no Ratings de mentirinha");
};

const Header: React.FC = () => {
  return (
    <>
      <header>
        <div className="header-container">
          <img src={logo} alt="Logo Ratings" className="header-logo" />
          <div className="menu-container">
            <img src={Menu} alt="Menu" />
            <div className="menu-text">Menu</div>
            <div className="search-field">
              <img
                src={Search}
                alt="Lupa de pesquisa"
                className="search-logo"
              />
              <div className="search-text">Search</div>
            </div>
            <Button onClick={handleClick} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
