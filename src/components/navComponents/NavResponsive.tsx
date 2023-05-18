import { FunctionComponent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useUserAuth from "../../hooks/userAuth";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import { useUser } from "../../contexts/UserContext";

interface NavResponsiveProps {
  theme: string;
  toggleTheme: () => void;
}

const NavResponsive: FunctionComponent<NavResponsiveProps> = ({
  theme,
  toggleTheme,
}) => {
  const { isOpen, toggleDropdown, handleLogout } = useUserAuth();
  const { user } = useUser();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile"); // Navigate to the specified path
  };

  return (
    <>
      <div className='md:hidden w-full flex ' id='mobile-menu'>
        <div className='relative bottom-10 left-3/4'>
          <button
            type='button'
            onClick={toggleTheme}
            className='w-9 mx-0.5  bg-light  rounded-full text-purple border-2 border-light   focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue'
          >
            {theme === "light" ? (
              <DarkModeIcon className='w-2 text-blue' />
            ) : (
              <LightModeIcon className='w-2 text-blue' />
            )}
            <span className='sr-only'>Toggle theme</span>
          </button>
          <button
            className=' w-6 h-6 text-light  m-px'
            type='button'
            onClick={toggleDropdown}
          >
            <MenuIcon />
          </button>
        </div>

        {isOpen && (
          <>
            <div className=' flex flex-col p-2'>
              <div className='text-left '>
                <Link
                  to={"/about"}
                  className='text-light font-extrabold	 hover:text-purple hover:bg-green hover:p-2 m-2 block rounded-md   text-base '
                >
                  About
                </Link>
              </div>
              {user && sessionStorage.getItem("token") ? (
                <>
                  <div className='text-left'>
                    <Link
                      to={"/allCards"}
                      className='text-light font-extrabold	 hover:text-purple hover:bg-green hover:p-2 hover:m-2 block rounded-md  py-2 m-2 text-base'
                    >
                      All Cards
                    </Link>
                  </div>
                </>
              ) : null}
              {!user ? (
                <>
                  <Link
                    to={"/register"}
                    className='text-light font-extrabold hover:text-purple hover:bg-green hover:p-2 hover:m-2 block rounded-md  py-2  m-2 text-base'
                  >
                    Register
                  </Link>
                  <Link
                    to={"/login"}
                    className='text-light font-extrabold hover:text-purple hover:bg-green hover:p-2 hover:m-2 block rounded-md  py-2  m-2 text-base'
                  >
                    Login
                  </Link>
                </>
              ) : null}

              {user && user.biz && sessionStorage.getItem("token") ? (
                <>
                  <Link
                    to={"/myCards"}
                    className='text-light font-extrabold hover:text-purple hover:bg-green hover:p-2 hover:m-2 block rounded-md  py-2  m-2 text-base'
                  >
                    My Cards
                  </Link>
                  <div className='border-t border-gray-700 pb-3 pt-4'>
                    <div className='flex items-center '>
                      <div className='ml-3 flex flex-row '>
                        <button
                          type='button'
                          className=' mr-3 rounded-full text-light font-extrabold	 focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-blue   '
                          onClick={handleClick}
                        >
                          <span className='sr-only'>Go to Profile</span>
                          {user.imgUrl ? (
                            <img
                              src={user.imgUrl}
                              alt={user.imgAlt}
                              className='h-11 w-10 rounded-full border-mnit'
                            />
                          ) : (
                            <img
                              className='h-11 w-16 rounded-full'
                              src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                              alt={user.name}
                            />
                          )}
                        </button>
                        <div className='basis-1/3 text-base font-medium leading-none text-light '>
                          {user.name}
                        </div>
                        <div className=' basis-1/3 text-sm font-medium leading-none text-light '>
                          {user.email}
                        </div>
                      </div>
                    </div>
                    <div className='mt-3 space-y-1 px-2'>
                      <Link
                        to={"/profile"}
                        className='block rounded-md px-3 py-2 text-base font-medium text-light  hover:bg-gray-700 hover:text-white'
                      >
                        Your Profile
                      </Link>
                      <Link
                        to={"/newCard"}
                        className='block rounded-md px-3 py-2 text-base font-medium text-light   hover:bg-gray-700 hover:text-white'
                      >
                        Add Cards
                      </Link>
                      <Link
                        to={"/"}
                        className='block rounded-md px-3 py-2 text-base font-medium text-light   hover:bg-gray-700 hover:text-white'
                        onClick={handleLogout}
                      >
                        Logout
                      </Link>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default NavResponsive;
