import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { postCard } from "../../services/cardService";
import { errorMsg, successMsg } from "../../services/feedbackService";
import * as yup from "yup";
import Footer from "../Footer";

interface CreateCardProps {}

const CreateCard: FunctionComponent<CreateCardProps> = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      description: "",
      logo: "",
      country: "",
      city: "",
      street: "",
      imgUrl: "",
      imgAlt: "",
      web: "",
      isFavorite: false,
    },
    validationSchema: yup.object({
      name: yup.string().required("Pleade insert Business Name").min(2),
      country: yup.string().required("Country is Required").min(4).max(35),
      city: yup.string().required("City is Required").min(4).max(35),
      street: yup
        .string()
        .required("Street Address is Required")
        .min(1)
        .max(35),
      imgUrl: yup.string().required("Image Link is Required").min(4),
      web: yup.string().notRequired(),
      imgAlt: yup
        .string()
        .required("Image Description is Required")
        .min(4)
        .max(35),
      phone: yup
        .string()
        .required(" Phone Number is Required")
        .max(10)
        .min(9)
        .matches(
          /^\+?(972\-?)?0?(([23489]{1}\-?\d{7})|[5]{1}\d{1}\-?\d{7})$/,
          "Please provide Valid Phone Format"
        ),
      description: yup
        .string()
        .min(5)
        .required("Tell some things about your business"),
      logo: yup.string().required("Pleade insert Logo Link"),
    }),

    onSubmit: (values) => {
      postCard(values)
        .then((res) => {
          successMsg(` ${res.data.name}'s Card Created Successfully`);
          navigate("/myCards");
        })
        .catch((err) => {
          errorMsg("Something went wrong. Please try again");
          console.log(err);
        });
    },
  });
  return (
    <>
      <div className='w-full md:h-screen bg-blue flex flex-col md:flex-row justify-center text-center  '>
        <div className='  w-full '>
          <div className='flex flex-col md:flex-row text-center'>
            <form
              className='w-full    md:basis-2/3 text-center '
              onSubmit={formik.handleSubmit}
            >
              <div className='w-full my-4  '>
                <h1 className='text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  font-bold '>
                  <span> ✦Add New BizCard ✦</span>
                </h1>
              </div>
              <div className='flex flex-col md:grid md:grid-cols-2 bg-blue md:m-4 md:p-4'>
                <div className=' md:col-span-1  '>
                  <div className='flex flex-col  items-center p-2'>
                    <label className='text-md text-purple '>
                      *Buissness Name
                    </label>
                    <input
                      type='text'
                      className='border-2 border-bluelight rounded-md  py-2 px-2 w-2/3'
                      id='name'
                      placeholder=''
                      name='name'
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      onBlur={formik.handleBlur}
                    />

                    {formik.touched.name && formik.errors.name ? (
                      <p className='text-sm m-px  text-red-200'>
                        *{formik.errors.name}
                      </p>
                    ) : null}
                  </div>
                  <div className=' flex flex-col items-center p-2'>
                    <label className='text-md text-purple '>*Phone</label>
                    <input
                      type='tel'
                      className='border-2 border-bluelight rounded-md  py-2 px-2 w-2/3'
                      id='phone'
                      placeholder=''
                      name='phone'
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                      onBlur={formik.handleBlur}
                      maxLength={10}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                      <p className='text-sm m-px text-red-200'>
                        *{formik.errors.phone}
                      </p>
                    ) : null}
                  </div>
                  <div className=' flex flex-col items-center p-2'>
                    <label className='text-md text-purple '>*Country</label>
                    <input
                      type='text'
                      className='border-2 border-bluelight rounded-md  py-2 px-2 w-2/3'
                      id='country'
                      placeholder=''
                      name='country'
                      onChange={formik.handleChange}
                      value={formik.values.country}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.country && formik.errors.country ? (
                      <p className='text-sm m-px text-red-200'>
                        *{formik.errors.country}
                      </p>
                    ) : null}
                  </div>

                  <div className=' flex flex-col  items-center p-2 '>
                    <label className=' text-md text-purple '>*City</label>

                    <input
                      type='text'
                      className='border-2 border-bluelight rounded-md  py-2 px-2 w-2/3'
                      id='city'
                      placeholder='.'
                      name='city'
                      onChange={formik.handleChange}
                      value={formik.values.city}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.city && formik.errors.city ? (
                      <p className='text-sm m-px text-red-200'>
                        *{formik.errors.city}
                      </p>
                    ) : null}
                  </div>
                  <div className=' flex flex-col items-center p-2'>
                    <label className='text-md text-purple '>*Street</label>

                    <input
                      type='text'
                      className='border-2 border-bluelight rounded-md  py-2 px-2 w-2/3'
                      id='street'
                      placeholder='.'
                      name='street'
                      onChange={formik.handleChange}
                      value={formik.values.street}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.street && formik.errors.street ? (
                      <p className='text-sm m-px text-red-200'>
                        *{formik.errors.street}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className='col-span-1'>
                  <div className=' flex flex-col items-center p-2'>
                    <label className='text-md text-purple '>*Image Link</label>
                    <input
                      type='text'
                      className='border-2 border-bluelight rounded-md  py-2 px-2 w-2/3'
                      id='imgUrl'
                      placeholder=''
                      name='imgUrl'
                      onChange={formik.handleChange}
                      value={formik.values.imgUrl}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.imgUrl && formik.errors.imgUrl ? (
                      <p className='text-sm m-px text-red-200'>
                        *{formik.errors.imgUrl}
                      </p>
                    ) : null}
                  </div>
                  <div className=' flex flex-col items-center p-2'>
                    <label className='text-md text-purple '>
                      *Image Description
                    </label>

                    <input
                      type='text'
                      className='border-2 border-bluelight rounded-md  py-2 px-2 w-2/3'
                      id='imgAlt'
                      placeholder='.'
                      name='imgAlt'
                      onChange={formik.handleChange}
                      value={formik.values.imgAlt}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.imgAlt && formik.errors.imgAlt ? (
                      <p className='text-sm m-px text-red-200'>
                        *{formik.errors.imgAlt}
                      </p>
                    ) : null}
                  </div>
                  <div className=' flex flex-col items-center p-2 '>
                    <label className='text-md text-purple '>
                      *Buissness Logo Link
                    </label>

                    <input
                      type='text'
                      className='border-2 border-bluelight rounded-md  py-2 px-2 w-2/3'
                      id='logo'
                      placeholder='.'
                      name='logo'
                      onChange={formik.handleChange}
                      value={formik.values.logo}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.logo && formik.errors.logo ? (
                      <p className='text-sm m-px text-red-200'>
                        *{formik.errors.logo}
                      </p>
                    ) : null}
                  </div>
                  <div className=' flex flex-col items-center p-2 '>
                    <label className='text-md text-purple '>
                      *Buissness Description
                    </label>
                    <input
                      type='text'
                      className='border-2 border-bluelight rounded-md  py-2 px-2 w-2/3'
                      id='description'
                      placeholder='.'
                      name='description'
                      onChange={formik.handleChange}
                      value={formik.values.description}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.description && formik.errors.description ? (
                      <p className='text-sm m-px text-red-200'>
                        *{formik.errors.description}
                      </p>
                    ) : null}
                  </div>
                  <div className=' flex flex-col items-center p-2'>
                    <label className='text-md text-purple '>Website Link</label>

                    <input
                      type='text'
                      className='border-2 border-bluelight rounded-md  py-2 px-2 w-2/3'
                      id='web'
                      placeholder=''
                      name='web'
                      onChange={formik.handleChange}
                      value={formik.values.web}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.web && formik.errors.web ? (
                      <p className='text-sm m-px text-red-200'>
                        *{formik.errors.web}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className=' flex  justify-center bg-blue p-4'>
                <div className=' m-2'>
                  <button
                    type='button'
                    className='  w-40 p-2  bg-transparent border-2 rounded-full text-light hover:bg-light hover:text-blue  dark:hover:text-darkLight '
                    onClick={() => navigate(-1)}
                  >
                    Cancel
                  </button>
                </div>

                <div className=' m-2'>
                  <button
                    type='submit'
                    className='  w-40 p-2  bg-transparent border-2 rounded-full text-light hover:bg-light hover:text-blue  dark:hover:text-darkLight '
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </form>
            <div className='md:basis-1/3 my-20 hidden md:flex flex-col rounded-md text-center  bg-blue  justify-center  m-2 '>
              <h2 className='uppercase text-2xl md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 m-4'>
                ✦ Create & Share & UPGRADE ✦
              </h2>
              <img
                src='img/loginp.png'
                className='hidden md:block rounded-full p-11'
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateCard;
