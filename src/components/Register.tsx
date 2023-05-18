import { useFormik } from "formik";
import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { errorMsg, successMsg } from "../services/feedbackService";
import { registerUser } from "../services/userService";
import { User } from "../interfaces/User";
import Footer from "./Footer";

interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  const navigate = useNavigate();
  const [biz, setBiz] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      biz: "",
      phone: "",
      country: "",
      city: "",
      street: "",
      imgUrl: "",
      imgAlt: "",
      houseNumber: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .required(" Full Name is Required")
        .min(2, "Full Name must be at least 2 characters"),
      email: yup
        .string()
        .required(" Email is Required")
        .min(5, "Email must be at least 5 characters")
        .email("Please provide valid Email"),
      password: yup
        .string()
        .required("Please provide Password")
        .min(8, "Password must be at least 8 characters"),
      biz: yup.boolean(),
      country: yup.string().required("Country is Required").min(4).max(35),
      street: yup.string().required("Street is Required").min(4).max(35),
      city: yup.string().required(" City is Required").min(4).max(35),
      houseNumber: yup
        .string()
        .required(" House Number is Required")
        .min(1)
        .max(1024),
      phone: yup
        .string()
        .required(" Phone Number is Required")
        .max(10)
        .min(9)
        .matches(
          /^\+?(972\-?)?0?(([23489]{1}\-?\d{7})|[5]{1}\d{1}\-?\d{7})$/,
          "Please provide Valid Phone Format"
        ),
    }),

    onSubmit: (values) => {
      let user: User = { ...values, biz: biz };
      registerUser(user)
        .then((res) => {
          successMsg(`${user.name} registered Successfully`);
          sessionStorage.setItem("token", res.data.token);
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
          errorMsg(err);
        });
    },
  });

  return (
    <>
      <div className='w-full  bg-blue flex flex-col md:flex-row justify-center text-center '>
        <div className='flex flex-col md:flex-row text-center  '>
          <form
            onSubmit={formik.handleSubmit}
            className=' w-full  md:basis-2/3 text-center  '
          >
            <h1 className='upercase text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  font-bold p-4 mt-11 md:mt-0 '>
              Register
            </h1>

            <div className=' flex flex-col md:grid md:grid-cols-2 bg-blue md:m-4 md:p-4'>
              <div className=' md:col-span-1  '>
                <div className='flex flex-col items-center p-2'>
                  <label className='text-md text-purple '>*Full Name</label>
                  <input
                    type='text'
                    className=' border-2 border-bluelight rounded-md  py-2 px-2 w-2/3'
                    id='name'
                    placeholder=''
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    name='name'
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <p className='text-sm m-px   text-slate-400'>
                      *{formik.errors.name}
                    </p>
                  ) : null}
                </div>
                <div className=' flex flex-col items-center p-2'>
                  <label className='text-md text-purple '>*Email</label>
                  <input
                    type='email'
                    className='border-2 border-bluelight rounded-md  py-2 px-2 w-2/3'
                    id='email'
                    placeholder=''
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    name='email'
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <p className='text-sm m-px  text-slate-400'>
                      *{formik.errors.email}
                    </p>
                  ) : null}
                </div>

                <div className=' flex flex-col items-center p-2 '>
                  <label className='text-md text-purple '>*Password</label>
                  <input
                    type='password'
                    className='border-2 border-bluelight rounded-md  py-2 px-2  w-2/3'
                    id='password'
                    placeholder=''
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    name='password'
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <p className='text-sm m-px  text-slate-400'>
                      *{formik.errors.password}
                    </p>
                  ) : null}
                </div>
                <div className='flex flex-col items-center p-2 '>
                  <label className='text-md text-purple '>*Phone</label>
                  <input
                    type='tel'
                    className='border-2 border-bluelight rounded-md  py-2 px-2 w-2/3'
                    id='phone'
                    placeholder=''
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    onBlur={formik.handleBlur}
                    name='phone'
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <p className='text-sm m-px  text-slate-400'>
                      *{formik.errors.phone}
                    </p>
                  ) : null}
                </div>
                <div className='flex flex-col items-center p-2 '>
                  <label className='text-md text-purple '>Image Link</label>
                  <input
                    type='text'
                    className='border-2 border-bluelight rounded-md  py-2 px-2 w-2/3'
                    id='imgUrl'
                    placeholder=''
                    onChange={formik.handleChange}
                    value={formik.values.imgUrl}
                    onBlur={formik.handleBlur}
                    name='imgUrl'
                  />
                </div>
              </div>
              <div className='col-span-1'>
                <div className='flex flex-col items-center p-2 '>
                  <label className='text-md text-purple '>*Country</label>
                  <input
                    type='text'
                    className='border-2 border-bluelight rounded-md  py-2 px-2 w-2/3 '
                    id='country'
                    placeholder=''
                    onChange={formik.handleChange}
                    value={formik.values.country}
                    onBlur={formik.handleBlur}
                    name='country'
                  />
                  {formik.touched.country && formik.errors.country ? (
                    <p className='text-sm m-px  text-slate-400'>
                      *{formik.errors.country}
                    </p>
                  ) : null}
                </div>
                <div className='flex flex-col items-center p-2 '>
                  <label className='text-md text-purple '>*City</label>
                  <input
                    type='text'
                    className='border-2 border-bluelight rounded-md  py-2 px-2 w-2/3'
                    id='city'
                    placeholder=''
                    onChange={formik.handleChange}
                    value={formik.values.city}
                    onBlur={formik.handleBlur}
                    name='city'
                  />
                  {formik.touched.city && formik.errors.city ? (
                    <p className='text-sm m-px text-slate-400'>
                      *{formik.errors.city}
                    </p>
                  ) : null}
                </div>
                <div className='flex flex-col items-center p-2 '>
                  <label className='text-md text-purple '>*Street</label>
                  <input
                    type='text'
                    className='border-2 border-bluelight rounded-md  py-2 px-2 w-2/3'
                    id='street'
                    placeholder=''
                    onChange={formik.handleChange}
                    value={formik.values.street}
                    onBlur={formik.handleBlur}
                    name='street'
                  />
                  {formik.touched.street && formik.errors.street ? (
                    <p className='text-sm m-px text-slate-400'>
                      *{formik.errors.street}
                    </p>
                  ) : null}
                </div>
                <div className='flex flex-col items-center p-2 '>
                  <label className='text-md text-purple'>*House Number</label>
                  <input
                    type='text'
                    className='border-2 border-bluelight rounded-md  py-2 px-2 w-2/3 '
                    id='houseNumber'
                    placeholder=''
                    onChange={formik.handleChange}
                    value={formik.values.houseNumber}
                    onBlur={formik.handleBlur}
                    name='houseNumber'
                  />
                  {formik.touched.houseNumber && formik.errors.houseNumber ? (
                    <p className='text-sm m-px text-slate-400'>
                      *{formik.errors.houseNumber}
                    </p>
                  ) : null}
                </div>
                <div className='flex flex-col items-center p-2 '>
                  <label className='text-md text-purple '>
                    Image Short Description
                  </label>
                  <input
                    type='text'
                    className='border-2 border-bluelight rounded-md  py-2 px-2 w-2/3'
                    id='imgAlt'
                    placeholder=''
                    onChange={formik.handleChange}
                    value={formik.values.imgAlt}
                    onBlur={formik.handleBlur}
                    name='imgAlt'
                  />
                </div>
              </div>
            </div>

            <div className='flex text-center justify-center  w-full p-4  bg-blue'>
              <input
                className='  border-2 border-bluelight  '
                type='checkbox'
                value={formik.values.biz}
                onBlur={formik.handleBlur}
                name='biz'
                onChange={() => setBiz(!biz)}
              />
              <span className='text-sm m-2 text-purple  '>
                Register as a Business Owner (For free!)
              </span>
            </div>

            <div className='w-full p-4 md:p-0 sm:h-[100px] bg-blue '>
              <button
                type='submit'
                className='  w-40 p-2  bg-transparent border-2 rounded-full text-light hover:bg-light hover:text-blue  dark:hover:text-darkLight '
              >
                Sign up
              </button>
            </div>
          </form>

          <div className='md:basis-1/3 my-20 hidden md:flex flex-col rounded-md text-center  bg-blue    mx-4 '>
            <h2 className='p-4 text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 '>
              Register as A buissnes user and Create Digital Cards For free !
            </h2>

            <img
              src='img/1.png'
              className='rounded-full p-11'
              alt='register img'
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Register;
