import { FunctionComponent, useEffect, useState } from "react";
import { Card as CardInterface } from "../interfaces/Card";
import { getCards } from "../services/cardService";
import Card from "../components/cardsComponents/Card";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Footer from "../components/Footer";

interface BuissCardsProps {}

const BuissCards: FunctionComponent<BuissCardsProps> = () => {
  const [cards, setCards] = useState<CardInterface[]>([]);

  useEffect(() => {
    getCards()
      .then((res) => setCards(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className='bg-gray-200 dark:bg-blue py-6 md:py-10'>
        <div className='container   mx-auto'>
          <div className='w-full m-4 text-center'>
            <h1 className='text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  font-bold   '>
              <span>✦ Our BizCardz ✦</span>
            </h1>
            <p className=' text-blue dark:text-light m-2'>
              ✦ Buissnes that discover the power of digital cards. Unfold
              opportunities like never before! Start exploring now ✦
            </p>
          </div>
        </div>
      </div>
      <div className='w-full  bg-gray-200 dark:bg-blue p-4 text-center'>
        {cards.length ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-4 p-6'>
            {cards.map((card: CardInterface) => (
              <div key={card._id}>
                <div className=' bg-white  rounded-lg shadow-md '>
                  <Card card={card} />
                  <div>
                    <button type='button' className='p-2 mr-2 text-blue'>
                      <FavoriteIcon className=''></FavoriteIcon>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className=''>
            <img src='/images/empty.png' width='200' />
            <h1>No BizCardz In Here</h1>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default BuissCards;
