import Arrow from "../../assets/icon/IconArrow.svg";

import "./styles.css";

const Content: React.FC = () => {
  return (
    <>
      <div className="container-plot">
        <div className="align-plot">
          <img src={Arrow} alt="Seta" className="img-plot" />
          <div>
            <div className="plot">ENREDO</div>
            <div className="subtitle-plot">
              Kratos and his son Atreus face the oncoming Norse apocalypse,
              Ragnarok.
            </div>
          </div>
        </div>
      </div>
      <div className="container-plot">
        <div className="align-plot">
          <img src={Arrow} alt="Seta" className="img-plot" />
          <div className="plot">AVALIAÇÕES DE USUÁRIOS</div>
        </div>
        <div className="container-rating"></div>
      </div>
    </>
  );
};

export default Content;
