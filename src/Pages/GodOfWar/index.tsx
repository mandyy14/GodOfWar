import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import GodOfWar1 from "../../assets/img/godOfWar.svg";
import GodOfWar2 from "../../assets/img/godOfWar1.svg";
import Dragon from "../../assets/img/dragon.svg";
import Star from "../../assets/icon/star.svg";
import StarOPen from "../../assets/icon/starOpen.svg";

import "./styles.css";
import Content from "../../Components/Content";

const GodOfWar: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <div className="image-container">
          <img
            src={GodOfWar1}
            alt="God of War"
            className="image-black-overlay"
          />
          <div className="text-overlay">
            <div className="title-image">GOD OF WAR: RAGNARÖK</div>
            <div className="align">
              <div className="subtitle-image">AVALIAÇÃO DA RATINGS</div>
              <img src={Star} alt="estrela" />
              <div className="rating-description">9,6</div>
            </div>
            <div className="align">
              <div className="subtitle-image">SUA AVALIAÇÃO</div>
              <img src={StarOPen} alt="estrela vazada" />
              <div className="evaluation-description">AVALIAR.</div>
            </div>
          </div>
          <div className="align-pictures">
            <img src={GodOfWar2} alt="God of War" className="picture" />
            <img src={Dragon} alt="Dragon" className="picture" />
          </div>
        </div>
      </main>
      <Content />
      <Footer />
    </>
  );
};

export default GodOfWar;
