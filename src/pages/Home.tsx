import { FunctionComponent } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typewriter from "react-ts-typewriter";

import { Link } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ServiceComp from "../components/homeComp/ServiceComp";
import Footer from "../components/Footer";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const { user } = useUser();

  return (
    <>
      <div className='w-full h-screen bg-light dark:bg-blue '>
        <div className='  container flex flex-col md:flex-row justify-center items-center '>
          <div className='w-full flex flex-col md:flex-row  md:h-[400px] text-center md:text-left my-20  mx-11 p-4 '>
            <div className=' w-full md:w-1/2 m-4'>
              <h1 className='text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  font-bold p-4 '>
                <Typewriter
                  text={"Discover The Power of Digital Business Cards"}
                  speed={60}
                  cursor={false}
                />
              </h1>
              <div>
                <p className='mx-2 mb-11 text-dark dark:text-light '>
                  Get a high-level overview of your buissnes with customizable
                  digital cards. Share Your buissnens rate others , make
                  coloborations easily & effective way
                </p>
              </div>
              <div className='w-1/2 md:w-1/2 mx-2 md:mx-4 text-lg text-center  text-light  p-4 rounded-full  bg-gradient-to-r from-violet-800 to-[#6161FF] '>
                {!user ? (
                  <Link to={"/register"}>
                    Get Started<ArrowForwardIosIcon></ArrowForwardIosIcon>
                  </Link>
                ) : (
                  <Link to={"/newCard"}>
                    Create Cards<ArrowForwardIosIcon></ArrowForwardIosIcon>
                  </Link>
                )}
              </div>
            </div>

            <div className='w-full hidden  md:flex md:w-1/2 bg-slate-100  justify-center  items-center   rounded-full p-4 my-6'>
              <img src='img/2.png' className='w-2/3  rounded-full' />
            </div>
          </div>
        </div>

        <div className='w-full bg-slate-100'>
          <ServiceComp />
        </div>
        <div className=' w-full md:h-screen flex flex-col justify-center items-center text-center bg-light dark:bg-blue p-4 md:p-0'>
          <div className='w-full md:w-1/2 md:h-[400px]    md:my-20  md:mx-11 p-4 '>
            <h1 className='text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  font-bold   m-2 '>
              ✦ About The App ✦
            </h1>
            <div className='sm:m-0 p-10 bg-blue dark:bg-white rounded-lg shadow-md text-left'>
              <h2 className='mx-6 text-lg md:text-2xl font-bold text-light dark:text-blue m-2'>
                Hi I am Alina full-stacK developer ,
              </h2>
              <p className='md:m-2 text-light dark:text-[#333333] whitespace-pre-line '>
                This project is a full-stack application utilizing both a
                server-side and a client-side. On the server-side, it's powered
                by Node.js and MongoDB, providing robust and flexible data
                management. The client-side is built with React and TypeScript,
                offering a dynamic and type-safe user interface. To style the
                application, I used Tailwind CSS, a utility-first CSS framework
                for rapid UI development. This framework empowers the project
                with a responsive and sleek design, improving user experience.
                The application includes several features that enhance its
                functionality
              </p>
            </div>
            <div className=' w-full h-1/2 md:w-[300px]  text-lg text-light  rounded-full text-center my-4 '>
              <div className='w-full md:w-[300px]  text-lg text-light   p-4 rounded-full text-cente  bg-gradient-to-r from-violet-800 to-[#6161FF]'>
                <Link to={"/about"}>
                  Read More<ArrowForwardIosIcon></ArrowForwardIosIcon>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
