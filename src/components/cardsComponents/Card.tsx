import { FunctionComponent } from "react";
import { Card as CardInterface } from "../../interfaces/Card";
import { Link } from "react-router-dom";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import WebIcon from "@mui/icons-material/Web";

interface CardProps {
  card: CardInterface;
}

const Card: FunctionComponent<CardProps> = ({ card }) => {
  return (
    <>
      <div key={card._id} className=' sm:w-96 text-center  p-4 m-4 shadow-md '>
        <img
          src={card.imgUrl}
          className='w-full md:w-full h-56 object-cover rounded-t-lg'
          alt={card.imgAlt}
        />
        <img
          src={card.logo}
          alt='Logo'
          className='w-16 h-16 rounded-full object-cover mt-5 mx-auto border-2 border-gray-40'
        />
        <div className='px-5 m-2'>
          <h2 className=' text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 '>
            <Link to={`/card/${card._id}`}>✦ {card.name}</Link>
          </h2>
        </div>
        <div className='container   min-h-[50px] text-center'>
          <p className=' text-[#333333]  my-2 capitalize whitespace-pre-line'>
            {card.description}
          </p>
        </div>
        <div className='min-h-[100px]'>
          <div className=' flex flex-col  mx-6'>
            <p>
              <LocationOnIcon className='text-[#333333]  text-sm  mr-px '></LocationOnIcon>
              <span className='text-[#333333]  text-sm  mr-px    '>
                {card.country} - {card.city} , {card.street}
              </span>
            </p>
          </div>
          <p>
            <PhoneIcon className='text-[#333333]  text-sm  mr-px'></PhoneIcon>
            <span className='text-[#333333]  text-sm  '>{card.phone}</span>
          </p>
          {card.web ? (
            <>
              <p>
                <WebIcon className='text-[#333333] text-sm  mr-px'></WebIcon>
                <span className='text-[#333333]  text-sm  '>{card.web}</span>
              </p>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Card;
