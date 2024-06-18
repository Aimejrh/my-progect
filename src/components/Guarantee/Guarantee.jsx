import React from "react";
import "./Guarantee.scss"

const Guarantee = () => {
  return (
    <div className="Guarantee">
      <h2 className="Guarantee_h2">Наши гарантии</h2>
      <ul className="Guarantee_ul">
        <li>
          <img
            src="https://optim.tildacdn.com/tild3137-6134-4765-b431-383362313230/-/cover/200x200/center/center/-/format/webp/maid.png"
            alt="img"
          />
          <h3>Гарантия улыбки</h3>
          <p>
            Мы гарантируем, что поход в нашу клинику будет сопровождаться
            доброжелательным отношением со стороны наших сотрудников.
          </p>
        </li>
        <hr />
        <li>
          <img
            src="https://optim.tildacdn.com/tild3237-6631-4566-a166-383566333030/-/cover/200x200/center/center/-/format/webp/Safety_iconics.png"
            alt="img"
          />
          <h3>Гарантия качества</h3>
          <p>
            Мы гарантируем, что вы будете удовлетворены качеством
            предоставляемых услуг.
          </p>
        </li>
        <hr />
        <li>
          <img
            src="https://optim.tildacdn.com/tild3534-6264-4936-b131-343833383861/-/cover/200x200/center/center/-/format/webp/Quick_effect_icon.png"
            alt="img"
          />
          <h3>Гарантия времени</h3>
          <p>
            Мы гарантируем, что Ваш приём начнется не позже 20 минут
            назначенного времени.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Guarantee;
