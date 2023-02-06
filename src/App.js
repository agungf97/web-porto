import './App.css';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from 'react-icons/bs';
import { useState } from "react";
import Header from './components/header/navbar.js';
import Home from './components/home/home.js';
import About from './components/about/about.js';
import Experience from './components/experience/experience.js';
import Portofolio from './components/portofolio/portofolio.js';
import Contact from './components/contact/contact.js';
import Footer from './components/footer/footer.js';
import Sosmed from './components/sosmed/sosmed.js';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="dark:bg-slate-900">
        <Header/>
        <div className="container">
          <div className="flex justify-between dark:text-white">
            <Sosmed/>
            <div className="fixed bottom-56 hover:-translate-y-2 duration-500 md:block hidden right-4">
              <div className="font-bold hidden md:block hover:font-semibold my-auto align-middle">
                {!darkMode ? 
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl"/>
                    : <BsFillSunFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl"/>
                }
              </div>
            </div>
          </div>
        </div>
        <section>
          <Home/>
          <About/>
          <Experience/>
          <Portofolio/>
          <Contact/>
          <Footer/>
        </section>  
      </main>
    </div>
  );
}
export default App;