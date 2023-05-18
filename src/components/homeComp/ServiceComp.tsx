import { FunctionComponent, useEffect, useState } from "react";
import { Card as CardInterface } from "../../interfaces/Card";
import { getCards } from "../../services/cardService";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../cardsComponents/Card";


interface ServiceCompProps {}

const ServiceComp: FunctionComponent<ServiceCompProps> = () => {
  const [cards, setCards] = useState<CardInterface[]>([]);
  
  useEffect(() => {
    // Fetch the cards from the API
    getCards()
      .then((res) => setCards(res.data))
      .catch((err) => console.log(err));
  }, []);

  const randomCards = cards.sort(() => 0.5 - Math.random()).slice(0, 6);

  // Configure the settings for the carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    margin: 50,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className='w-full flex flex-col items-center bg-slate-200 text-center p-4 sm:p-6 md:p-8 lg:text-xl'>
        <h1 className='text-2xl sm:text-5xl mp-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
          ✦ Our Buissneses ✦
        </h1>
      </div>
      <div className=' flex  bg-slate-200  justify-items-center  p-11 sm:p-16 md:p-20'>
        <div className=' w-full     rounded-xl  shadow-md  '>
          <div className='bg-light  '>
            <Slider {...carouselSettings}>
              {randomCards.map((card) => (
                <div key={card._id} className='container  m-4 sm:m-6 md:m-8'>
                  <Card card={card} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceComp;
