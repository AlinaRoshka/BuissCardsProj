import { FunctionComponent,useState } from "react";
import { Link ,useNavigate ,useParams} from "react-router-dom";
import useUserAuth from "../../hooks/userAuth";
import NavEnd from "./NavEnd";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface NavCenterProps {
  theme: string;
  toggleTheme: () => void;
}

const NavCenter: FunctionComponent<NavCenterProps> = ({
  theme,
  toggleTheme,
}) => {

  const { user, isOpen, toggleDropdown, handleLogout } = useUserAuth();

  const navigate = useNavigate();
  let { cardName } = useParams();

  return (
    <>
      <div className=' hidden  md:flex min-sm:hidden basis-3/5 items-center mr-3'>
        <Link
          to={"/about"}
          className='text-light  font-extrabold	dark:text-mint hover:bg-green hover:text-mint rounded-md px-3 py-2 text-md '
        >
          About
        </Link>

        {user && sessionStorage.getItem("token") ? (
          <>
            <Link
              to={"/allCards"}
              className='text-light   font-extrabold	dark:text-mint hover:bg-green hover:text-mint rounded-md px-3 py-2 text-md'
            >
              AllCards
            </Link>
          </>
        ) : null}

        {user && user.biz && sessionStorage.getItem("token") ? (
          <>
            <Link
              to={"/myCards"}
              className='text-light   font-extrabold	dark:text-mint hover:bg-green hover:text-mint rounded-md px-3 py-2 text-md'
            >
              MyCards
            </Link>
            <Link
              to={"/newCard"}
              className='text-light   font-extrabold	dark:text-mint hover:bg-green hover:text-mint rounded-md px-3 py-2 text-md'
              role='menuitem'
              tabIndex={-1}
              id='user-menu-item-1'
            >
              Add Buiss Cards
            </Link>
          </>
        ) : null}
        {!user ? (
          <>
            <Link
              to={"/register"}
              className=' text-light   font-extrabold	dark:text-mint hover:bg-green hover:text-mint rounded-md px-3 py-2 text-md'
            >
              Register
            </Link>
            <Link
              to={"/login"}
              className='text-light   font-extrabold	dark:text-mint hover:bg-green hover:text-mint rounded-md px-3 py-2 text-md'
            >
              Login
            </Link>
          </>
        ) : null}
      </div>
      <div className='hidden md:block m-2 mt-3'>
        <NavEnd theme={theme} toggleTheme={toggleTheme}  />
      </div>

      <div className='hidden md:block'>
        <div className='ml-4 flex items-center md:ml-6'>
          {user && sessionStorage.getItem("token") && (
            <div className='flex flex-row '>
              <div className='flex  flex-1'>
                <Link to={"/favorite"} className='text-light p-4 '>
                  <FavoriteIcon />
                </Link>
              </div>

              <div className='relative  m-2 basis-1/5 	'>
                <div className='w-11 '>
                  <button
                    type='button'
                    className='flex max-w-xs items-center  rounded-full border-2 border-light bg-blueLight text-sm focus:outline-none focus:ring-2 focus:ring-light dark:focus:ring-offset-dark focus:ring-offset-2 focus:ring-offset-blueLight'
                    id='user-menu-button'
                    aria-expanded='false'
                    aria-haspopup='true'
                    onClick={toggleDropdown}
                  >
                    <span className='sr-only'>Open user menu</span>
                    {user.imgUrl ? (
                      <img
                        className='h-10 w-11 rounded-full'
                        src={user.imgUrl}
                        alt={user.imgAlt}
                      />
                    ) : (
                      <img
                        className='h-10 w-11 rounded-full'
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt={user.name}
                      />
                    )}
                  </button>
                </div>
              </div>
              {isOpen && (
                <div
                  className='absolute right-1 z-10 mt-16 w-48 origin-top-right rounded-md bg-blueLight  dark:text-light  py-2 shadow-lg ring-1 ring-blueLight  ring-opacity-5 focus:outline-none'
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='user-menu-button'
                  tabIndex={-1}
                >
                  <div className='block px-4 py-2 text-md text-light'>
                    {user.name && <h2>Hello, {user.name}</h2>}
                  </div>
                  <Link
                    to={"/profile"}
                    className='block px-4 py-2 text-md text-light'
                    role='menuitem'
                    tabIndex={-1}
                    id='user-menu-item-0'
                  >
                    Your Profile
                  </Link>

                  <Link
                    to={"/"}
                    className='block px-4 py-2 text-sm text-light'
                    role='menuitem'
                    tabIndex={-1}
                    id='user-menu-item-2'
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavCenter;
