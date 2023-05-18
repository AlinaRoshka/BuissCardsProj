import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { successMsg } from "../services/feedbackService";
import { useUser } from "../contexts/UserContext";
import { getUserFromToken } from "../services/userService";

const useUserAuth = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      const userFromToken = getUserFromToken();
      setUser(userFromToken);
    }
  }, [setUser]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setUser(null);
    navigate("/");
    successMsg("you've logged out");
  };

  return { user: useUser().user, isOpen, toggleDropdown, handleLogout };
};

export default useUserAuth;
