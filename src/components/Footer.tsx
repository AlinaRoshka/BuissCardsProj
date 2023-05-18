import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <footer className='w-full  bg-gray-200 dark:bg-blue inline-block p-6  md:my-0'>
        <div className='container h-1/4 mx-auto '>
          <div className='flex justify-center '>
            <nav className='flex space-x-4'>
              <Link
                to='/about'
                className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300'
              >
                About
              </Link>
              <Link
                to='/contact'
                className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300'
              >
                Contact
              </Link>
              <Link
                to='/privacy'
                className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300'
              >
                Privacy Policy
              </Link>
            </nav>
            <div className='ml-4'>
              <a
                href='https://github.com/your-github-profile'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300'
              >
                <GitHubIcon />
              </a>
              <a
                href='https://www.facebook.com/your-facebook-profile'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300'
              >
                <FacebookIcon />
              </a>
              <a
                href='https://www.linkedin.com/in/your-linkedin-profile'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300'
              >
                <LinkedInIcon />
              </a>
              <p className='inline mx-2 my-4 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300'>
                © All Rights Reserved Alina Roshka
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
