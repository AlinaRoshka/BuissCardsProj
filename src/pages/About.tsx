import { FunctionComponent } from "react";
import { BusinessCenter, LockOpen, Search, Storage } from "@mui/icons-material";
import Footer from "../components/Footer";
interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  return (
    <div>
      <div className='w-full  flex flex-col md:flex-row justify-center   bg-light dark:bg-blue p-2'>
        <div className=' md:w-1/2 text-center md:my-20  md:text-left p-4'>
          <h1 className='text-4xl md:text-3xl p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
            About Buiss Cards
          </h1>
          <p className='text-blue dark:text-light px-6 hidden md:block'>
            This project is a full-stack application utilizing both a
            server-side and a client-side. On the server-side, it's powered by
            Node.js and MongoDB, providing robust and flexible data management.
            The client-side is built with React and TypeScript, offering a
            dynamic and type-safe user interface. To style the application, I
            used Tailwind CSS, a utility-first CSS framework for rapid UI
            development. This framework empowers the project with a responsive
            and sleek design, improving user experience. The application
            includes several features that enhance its functionality. Some of
            these are:
          </p>
        </div>
        <div className='w-full  md:w-1/2 bg-slate-200 flex justify-center  items-center   rounded-full p-4 my-6'>
          <img src='img/loginp.png' className='w-2/3  rounded-md' />
        </div>
      </div>
      <div className='w-full  flex flex-col md:flex-row justify-center    bg-light dark:bg-blue p-4  md:p-2'>
        <div className='w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 rounded-md gap-4 bg-gray-100 p-4 md:p-6 md:m-4'>
          <div className='text-light p-4 rounded-r-lg rounded-b-lg flex flex-col items-center justify-center text-center bg-blue dark:bg-white dark:text-blue whitespace-pre-line'>
            <BusinessCenter />
            <p className='text-lg text-light dark:text-blue  bold'>
              ✦ Create, Read, Update, Delete operations for business cards,
              enabling users to fully manage their data
            </p>
          </div>
          <div className='text-light p-4 rounded-r-lg rounded-b-lg flex flex-col items-center justify-center text-center bg-blue dark:bg-white dark:text-blue whitespace-pre-line'>
            <LockOpen />
            <p className='text-lg text-light dark:text-blue bold'>
              ✦ User authentication using tokens, which helps ensure the
              security of user data
            </p>
          </div>
          <div className='text-light p-4 rounded-r-lg rounded-b-lg flex flex-col items-center justify-center text-center bg-blue dark:bg-white dark:text-blue whitespace-pre-line'>
            <Storage />
            <p className='text-lg  text-light dark:text-blue  bold'>
              ✦ Custom API service, providing a seamless integration between the
              front-end and back-end
            </p>
          </div>
          <div className='text-light p-4 rounded-r-lg rounded-b-lg flex flex-col items-center justify-center text-center bg-blue dark:bg-white dark:text-blue whitespace-pre-line'>
            <Search />
            <p className='text-lg text-light dark:text-blue  bold'>
              ✦ Search functionality for finding other business cards, enhancing
              the utility of the application
            </p>
          </div>
        </div>
        <div className=' md:w-1/2 text-center my-20  hidden md:block p-4'>
          <h1 className='text-4xl md:text-3xl  p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
            Why Use Buiss cards
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
