import { FunctionComponent } from "react";
import { useFormik } from "formik";
import { getUser, userLogin } from "../services/userService";
import { useNavigate } from "react-router-dom";
import { errorMsg, successMsg } from "../services/feedbackService";
import { useUser } from "../contexts/UserContext";
import * as yup from "yup";
import Footer from "./Footer";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const navigate = useNavigate();

  const { setUser } = useUser();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: yup.object({
      email: yup.string().email().required().min(5),
      password: yup.string().required().min(8),
    }),

    onSubmit: (values) => {
      userLogin(values)
        .then((res) => {
          successMsg(`Loged as ${values.email}`);
          sessionStorage.setItem("token", res.data.token);
          getUser()
            .then((response) => {
              console.log("Full response:", response);
              setUser(response.data);
              navigate("/");
            })
            .catch((err) => {
              console.log(err.response);
              errorMsg("Error fetching user details. Please try again");
            });
        })
        .catch((err) => {
          console.log(err.response);
          errorMsg("Wrong Email or Password. Please try again");
        });
    },
  });

  return (
    <>
      <div className='w-full h-screen flex text-center '>
        <div className='basis-1/2 hidden md:flex flex-col  text-center  bg-light   dark:bg-blue '>
          <h2 className='upercase text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  font-bold p-4 '>
            Create Buissnea Cards!
          </h2>
          <p className='text-md p-6  text-blue dark:text-light'>
            Create new possibilities for your business. Showcase your unique
            style and professionalism by customizing your digital business cards
            .
          </p>
          <img src='img/loginp.png' className='rounded-full p-6' />
        </div>
        <div className=' w-full md:basis-1/2 flex-col  text-center bg-blue   dark:bg-blue py-20'>
          <h2 className='upercase text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  font-bold p-4'>
            Sign in
          </h2>
          <h4 className='block md:hidden upercase text-sm p-6  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  font-bold  '>
            Start Create Your Buissnes Cards !
          </h4>

          <form onSubmit={formik.handleSubmit} className='m-2'>
            <div className='mt-2'>
              <input
                type='email'
                className=' border-2 border-bluelight rounded-md my-4 py-2 px-2 w-1/2'
                id='email'
                placeholder='Email'
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                name='email'
              />

              {formik.touched.email && formik.errors.email ? (
                <p className='text-sm m-px text-red-200'>
                  *{formik.errors.email}
                </p>
              ) : null}
            </div>

            <div className='mt-2'>
              <input
                type='password'
                className=' border-2 border-bluelight rounded-md my-4  py-2 px-2 w-1/2'
                id='password'
                placeholder='password'
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                name='password'
              />

              {formik.touched.password && formik.errors.password ? (
                <p className='text-sm m-px text-red-200'>
                  *{formik.errors.password}
                </p>
              ) : null}
            </div>

            <div className='mt-2'>
              <button
                type='submit'
                className='w-1/3  p-2 my-6 bg-transparent border-2 rounded-full text-light hover:bg-light hover:text-blue  dark:hover:text-darkLight '
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
