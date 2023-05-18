import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface NavStartProps {}

const NavStart: FunctionComponent<NavStartProps> = () => {
  return (
    <>
      <div className='    m-4 hover:animate-pulse'>
        <Link
          to={"/"}
          className='text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  '
        >
          BuissCards
        </Link>
      </div>
    </>
  );
};

export default NavStart;
