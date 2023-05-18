import { FunctionComponent } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

interface DarkModeCompProps {
  theme: string;
  toggleTheme: () => void;
}

const DarkModeComp: FunctionComponent<DarkModeCompProps> = ({
  theme,
  toggleTheme,
}) => {
  return (
    <>
      <div className='max-md:fixed max-md:end-1 ml-2 flex items-center md:ml-6 '>
        <button
          type='button'
          onClick={toggleTheme}
          className='w-11  px-2 py-px rounded-full  border-2 border-light  focus:outline-none focus:ring-2  '
        >
          {theme === "light" ? (
            <DarkModeIcon className='w-2 text-light ' />
          ) : (
            <LightModeIcon className='w-2 text-light' />
          )}
          <span className='sr-only'>Toggle theme</span>
        </button>
      </div>
    </>
  );
};

export default DarkModeComp;
