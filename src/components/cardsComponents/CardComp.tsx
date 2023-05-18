import { FunctionComponent, useEffect, useState, useMemo } from "react";
import { Card } from "../../interfaces/Card";
import { getCards } from "../../services/cardService";


interface CardCompProps {}

const CardComp: FunctionComponent<CardCompProps> = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    getCards()
      .then((res) => setCards(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='container   m-auto border-4 border-blueLight rounded-xl p-4'>
      {cards.length ? (
        <>
          <div className='grid grid-cols-3 grid-flow-row gap-4  bg-light dark:bg-darkLight p-6 '></div>
        </>
      ) : null}
    </div>
  );
};

export default CardComp;
