import { useState, useEffect } from "react";
import {
  addToFavorites,
  removeFromFavorites,
  getFavorites,
  getUser,
} from "../services/userService";

const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    // Fetch the user's favorite cards when the component mounts
    fetchFavorites();
  }, []);

  const fetchFavorites = () => {
    // Make the API call to fetch the user's favorite cards
    const fetchFavorites = () => {
      getUser()
        .then((response) => {
          const userId = response.data?._id;
          if (userId) {
            getFavorites(userId)
              .then((response) => {
                const favoriteCards = response.data?.favorites ?? [];
                setFavorites(favoriteCards);
              })
              .catch((error) => {
                console.log("Error fetching favorites:", error);
              });
          } else {
            console.log("User ID is undefined");
          }
        })
        .catch((error) => {
          console.log("Error fetching user data:", error);
        });
    };
  };

  const addFavorite = (cardId: string) => {
    // Make the API call to add a card to favorites
    addToFavorites(cardId)
      .then(() => {
        // Update the favorites state after adding the card
        setFavorites((prevFavorites) => [...prevFavorites, cardId]);
      })
      .catch((error) => {
        console.log("Error adding favorite:", error);
      });
  };

  const removeFavorite = (cardId: string) => {
    // Make the API call to remove a card from favorites
    removeFromFavorites(cardId)
      .then(() => {
        // Update the favorites state after removing the card
        setFavorites((prevFavorites) =>
          prevFavorites.filter((id) => id !== cardId)
        );
      })
      .catch((error) => {
        console.log("Error removing favorite:", error);
      });
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
  };
};

export default useFavorites;
