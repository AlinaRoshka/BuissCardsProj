import { FunctionComponent } from "react";
import Footer from "../components/Footer";
import { useUser } from "../contexts/UserContext";

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  const { user } = useUser();

  return (
    <>
      {user ? (
        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 p-6'>
          <div className='md:flex'>
            <div className='md:flex-shrink-0'>
              <img
                className='h-48 w-full object-cover md:h-full md:w-48'
                src={user.imgUrl || "/img/profile.png"}
                alt={user.imgAlt}
                onError={(e: any) => {
                  e.target.onerror = null;
                  e.target.src = "/img/profile.png";
                }}
              />
            </div>
            <div className='p-8'>
              <h1 className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                User Profile
              </h1>
              <p className='mt-2 text-gray-500'>Name: {user.name}</p>
              <p className='mt-2 text-gray-500'>Email: {user.email}</p>
              <p className='mt-2 text-gray-500'>
                Biz: {user.biz ? "Yes" : "No"}
              </p>
              {user.country ? (
                <>
                  <p className='mt-2 text-gray-500'>
                    Addres: {user.country} ,{user.city} {user.houseNumber}{" "}
                  </p>
                  <p className='mt-2 text-gray-500'>phone: {user.phone}</p>
                </>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
      <Footer />
    </>
  );
};

export default Profile;
