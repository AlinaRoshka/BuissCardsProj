import { FunctionComponent, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeComp from "../DarkModeComp";

interface NavEndProps {
  theme: string;
  toggleTheme: () => void;
}

const NavEnd: FunctionComponent<NavEndProps> = ({ theme, toggleTheme }) => {

  const [search, setSearch] = useState("");
  
  return (
    <>
      <div className='text-blue dark:text-darkLight  flex  '>
        <input
          type={"search"}
          className=' p-2 rounded-md mx-2 h-6'
          placeholder='Search'
          aria-label='Search'
          aria-describedby='button-addon2'
        />
        <button className=' text-light'>
          <SearchOutlinedIcon />
        </button>
        <DarkModeComp theme={theme} toggleTheme={toggleTheme} />
      </div>
    </>
  );
};

export default NavEnd;
