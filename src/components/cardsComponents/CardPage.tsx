import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCard } from "../../services/cardService";
import { Card as CardInterface } from "../../interfaces/Card";
import { GoogleMap } from "@react-google-maps/api";
import Card from "./Card";
import Footer from "../Footer";

interface CardPageProps {}

const CardPage: FunctionComponent<CardPageProps> = () => {
  const [card, setCard] = useState<CardInterface | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      getCard(id).then((response) => setCard(response.data));
    }
  }, [id]);

  return (
    <>
      <div className='w-full h-screen bg-slate-100 dark:bg-blue text-center '>
        <h1 className='text-4xl md:text-3xl p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
          Buissnes Card
        </h1>
        {card ? (
          <div className='flex flex-row justify-center items-center '>
            <div className='bg-white p-4 m-4 rounded-md'>
              <Card card={card} />
            </div>
            <div className='container p-4 text-left text-blue dark:text-light m-2'>
              <h2 className='my-2 text-lg'>{card.name} Location:</h2>
              <GoogleMap
                id='example-map'
                mapContainerStyle={{ height: "200px", width: "400px" }}
                zoom={15}
                center={{ lat: 31.0461, lng: 34.8516 }}
              />
            </div>
          </div>
        ) : null}
      </div>
      <Footer />
    </>
  );
};

export default CardPage;
