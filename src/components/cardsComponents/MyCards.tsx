import { FunctionComponent, useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import { Card as CardInterface } from "../../interfaces/Card";
import { deleteCard, getCardById } from "../../services/cardService";
import { errorMsg, successMsg } from "../../services/feedbackService";
import { getUserFromToken } from "../../services/userService";
import _ from "lodash";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Card from "./Card";
import useFavorites from "../../hooks/useFavorites";
import Footer from "../Footer";

interface MyCardsProps {}

const MyCards: FunctionComponent<MyCardsProps> = () => {
  const navigate = useNavigate();

  const { user, cards, setCards } = useUser();
  const { addFavorite, removeFavorite } = useFavorites();

  useEffect(() => {
    if (user) {
      getCardById()
        .then((result) => {
          setCards(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);

  const handleDelete = (card: CardInterface) => {
    if (
      window.confirm(`${card.name} will be deleted permanently, are you sure?`)
    )
      deleteCard(card._id as string)
        .then(() => {
          const updatedCards = cards.filter((c) => c._id !== card._id);
          setCards(updatedCards);
          successMsg(`${card.name} Deleted Successfully!`);
          navigate("/myCards");
        })
        .catch((err) => {
          console.log(err);
          errorMsg("Something went wrong, Try again.");
        });
  };

  const handleFavorite = (card: CardInterface) => {
    if (card.isFavorite) {
      if (card._id) {
        removeFavorite(card._id);
        console.log("Card clicked:", card.name);
      } else {
        console.log("Card ID is undefined");
      }
    } else {
      if (card._id) {
        addFavorite(card._id);
        console.log("Card clicked:", card.name);
      } else {
        console.log("Card ID is undefined");
      }
    }
  };
  return (
    <>
      <div className='w-full  bg-gray-200 dark:bg-blue  p-4 text-center '>
        <div className='m-4'>
          <h1 className='text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  font-bold '>
            My BuissCards
          </h1>
          <h2 className='text-blue dark:text-light m-2'>
            You Created: {cards.length} BuissCards
          </h2>
        </div>
        <div className=' w-full  bg-gray-200 dark:bg-blue p-4 text-center'>
          {cards.length ? (
            <>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-4   '>
                {cards.map((card: CardInterface) => (
                  <div key={card._id}>
                    <div className=' bg-white  rounded-lg shadow-md'>
                      <Card card={card} />
                      {getUserFromToken() ? (
                        <>
                          <div className='h-full m-4 p-4'>
                            <Link
                              to={`/edit/${card._id}`}
                              className=' mr-2 text-blue  rounded-full'
                            >
                              <ModeEditOutlineIcon></ModeEditOutlineIcon>
                            </Link>
                            <Link
                              to={"/myCards"}
                              className='p-2 mr-2 text-blue '
                              onClick={() => handleDelete(card)}
                            >
                              <DeleteIcon className=''></DeleteIcon>
                            </Link>
                            <button
                              type='button'
                              className='p-2 mr-2 text-blue'
                            >
                              <FavoriteIcon className=''></FavoriteIcon>
                            </button>
                          </div>
                        </>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className=' w-full flex flex-col justify-center items-center '>
              <h1 className='upercase text-6xl m-4 bg-clip-text text-transparent bg-gradient-to-r from-darkLight to-[#658AD8] dark:light '>
                No Buiss Cards !
              </h1>
              <Link to='/newCard' className='text-gray-500 dark:text-light'>
                <AddCircleIcon className='fa-solid fa-plus mx-px'></AddCircleIcon>{" "}
                Add Buiss Card
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyCards;
