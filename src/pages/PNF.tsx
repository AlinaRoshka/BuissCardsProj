import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
interface PNFProps {}

const PNF: FunctionComponent<PNFProps> = () => {
  return (
    <>
      <div className='bg-blue py-10 flex justify-center items-center flex-col h-screen'>
        <h1 className='text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  font-bold'>
          404
        </h1>
        <h2 className='text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  font-bold'>
          Page Not Found
        </h2>
        <p className='text-light m-2 text-center'>
          We're sorry, the page you requested could not be found. <br /> Please
          go back to the Homepage
        </p>
        <Link
          to='/'
          className='border-2 border-ligth mt-4 px-4 py-2 rounded text-light'
        >
          Go Home
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default PNF;
