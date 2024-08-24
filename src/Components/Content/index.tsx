import Arrow from "../../assets/icon/IconArrow.svg";
import Plus from "../../assets/icon/plus.svg";
import Star from "../../assets/icon/star.svg";
import Like from "../../assets/icon/like.svg";
import Dislike from "../../assets/icon/dislike.svg";
import Options from "../../assets/icon/options.svg";

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
          <div className="align-A">
            <img src={Plus} alt="Adicionar Avaliação" />
            <div>Avaliar</div>
          </div>
        </div>
        <div className="container-rating">
          <div className="header-rating">
            <div className="rating">AVALIAÇÃO EM DESTAQUE</div>
            <div className="number">
              <img src={Star} className="star" alt="Estrela" />
              10 <div className="number-1">/10</div>
            </div>
          </div>
          <div className="align-tinys">
            <div className="tiny-title">CaioHelbert</div>
            <div className="tiny-titlegray">9 de novembro de 2022</div>
          </div>
          <div className="incredible">What an incredible sequel!</div>
          <div className="text">
            A fantastic and strong continuation of its predecessor, God of War
            Ragnarök is not afraid to take unexpected turns, or slow its pace
            for you to fully explore an environment.
            <br /> It has the same upgrading system as before, but with better
            armor, in my opinion. Atreus is a little bit older now and it's so
            great to see everybody reprise their magnificent roles.
          </div>
          <div className="text">
            I don't want to give away too much in this review, but it's
            definitely worth buying. One of the best looking games on PS5. It'll
            definitely be a game of the year contender with Elden Ring.
            <br /> If you're new to the series, I recommend you start with God
            of War (2018) If you have the dedication, you could always start
            from the very first one. They're all on the PS+ collection.
            <br /> I still have yet to beat this newest entry, but I wanted to
            spread the good word as soon as possible: Ragnarök is here and it is
            beautiful.
          </div>
          <div className="voting-align">
            <img src={Like} />
            <div className="voting">33</div>
            <div className="dislike-align">
              <img src={Dislike} />
              <div className="voting">11</div>
            </div>
            <div className="align-options">
              <img src={Options} />
            </div>
          </div>
        </div>
        <div className="container-rating1">
          <div className="header-rating">
            <div className="rating">AVALIAÇÃO EM DESTAQUE</div>
            <div className="number">
              <img src={Star} className="star" alt="Estrela" />
              10<div className="number-1">/10</div>
            </div>
          </div>
          <div className="align-tinys">
            <div className="tiny-title">CaioHelbert</div>
            <div className="tiny-titlegray">9 de novembro de 2022</div>
          </div>
          <div className="incredible">This game took part of my soul...</div>
          <div className="spoiler">Warning: Spoilers!</div>
          <div className="voting-align">
            <img src={Like} />
            <div className="voting">33</div>
            <div className="dislike-align">
              <img src={Dislike} />
              <div className="voting">11</div>
            </div>
            <div className="align-options">
              <img src={Options} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
