import { FunctionComponent } from "react";
import NavCenter from "./NavCenter";
import NavResponsive from "./NavResponsive";
import NavStart from "./NavStart";

interface NavBarProps {
  theme: string;
  toggleTheme: () => void;
}

const NavBar: FunctionComponent<NavBarProps> = ({ theme, toggleTheme }) => {
  return (
    <>
      <div className='min-h-full w-full  '>
        <nav className='bg-blue   dark:bg-blue  min-sm:w-90 min-sm:h-3'>
          <div className='lg:px-8  '>
            <div className=' flex items-center  md:h-16  justify-between'>
              <NavStart />
              <NavCenter theme={theme} toggleTheme={toggleTheme} />
            </div>
          </div>
          <NavResponsive theme={theme} toggleTheme={toggleTheme} />
        </nav>
      </div>
    </>
  );
};

export default NavBar;
