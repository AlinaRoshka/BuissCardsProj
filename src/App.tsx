import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";

import { UserProvider } from "./contexts/UserContext";
import Login from "./components/Login";
import NavBar from "./components/navComponents/NavBar";
import Register from "./components/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import BuissCards from "./pages/BuisCards";
import EditCard from "./components/cardsComponents/EditCard";
import PNF from "./pages/PNF";
import MyCards from "./components/cardsComponents/MyCards";
import CreateCard from "./components/cardsComponents/CreateCard";
import FavCards from "./components/cardsComponents/FavCards";
import About from "./pages/About";
import CardPage from "./components/cardsComponents/CardPage";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <UserProvider>
      <div className='App'>
        <Router>
          <main className=''>
            <ToastContainer />
            <NavBar theme={theme} toggleTheme={toggleTheme} />
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/card/:id' element={<CardPage />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
              <Route path='/profile' element={<Profile />}></Route>
              <Route path='/allCards' element={<BuissCards />}></Route>
              <Route
                path='/myCards'
                element={<MyCards key={Math.random()} />}
              ></Route>
              <Route path='/newCard' element={<CreateCard />}></Route>
              <Route path='/edit/:id' element={<EditCard />}></Route>
              <Route path='/favorite' element={<FavCards />}></Route>
              <Route path='*' element={<PNF />}></Route>
            </Routes>
          </main>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
