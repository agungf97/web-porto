import './App.css';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from 'react-icons/bs';
import { useState } from "react";
import fp from '../src/image/fotodiri.png';
import wa from '../src/image/whatsapp.png';
import tl from '../src/image/telegram.png';
import ig from '../src/image/instagram.png';
import lin from '../src/image/linkedin.png';
import gh from '../src/image/github.png';
import Header from './components/header/navbar.js';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="dark:bg-slate-900">
        <Header/>
        <div className="container">
          <div className="flex justify-between dark:text-white">
            <div className="fixed bottom-56 border-none-2 rounded-lg px-2 hover:-translate-y-2 bg-slate-300 opacity-50 hover:opacity-100 duration-500 md:block hidden">
              <div className="my-6">
                <a href="https://wa.me/6281215552690">
                  <img className="mx-auto w-6 hover:w-8 duration-150" src={wa} alt=""/>
                </a>
              </div>
              <div className="my-6">
                <a href="https://telegram.me/agungf97">
                  <img className="mx-auto w-6 hover:w-8 duration-150" src={tl} alt=""/>
                </a>
              </div>
              <div className="my-6">
                <a href="https://www.instagram.com/agungf97/">
                  <img className="mx-auto w-6 hover:w-8 duration-150" src={ig} alt=""/>
                </a>
              </div>
              <div className="my-6">
                <a href="https://www.linkedin.com/in/agungf97/">
                    <img className="mx-auto w-6 hover:w-8 duration-150" src={lin} alt=""/>
                </a>
              </div>
              <div className="my-6">
                <a href="https://github.com/agungf97">
                  <img className="mx-auto w-6 hover:w-8 duration-150" src={gh} alt=""/>
                </a>
              </div>
            </div>
            <div className="fixed bottom-80 hover:-translate-y-2 duration-500 md:block hidden right-8">
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
          <div className="container mx-auto align-middle">
            <div className="md:my-36 md:px-80 px-16 text-center dark:text-white">
              <h2 className="md:text-4xl text-lg font-bold ">Hai, my name is...</h2>
              <h1 className="md:py-4 py-2 md:text-6xl text-xl font-black hover:-translate-y-2 duration-500"> Mohamad <span className="text-orange-600">Agung</span> Faisal</h1>
              <p className="md:py-4 py-2 md:text-xl text-lg !leading-8">My nickname is "Agung", I graduated from high school majoring in social studies in 2015. I have several skills such as using Microsoft Office, CorelDraw Graphic and Adobe Photoshop.</p>
              <div className="container mx-auto">
                <img className="w-96 mx-auto hover:-translate-y-2 duration-500" src={fp} alt=""/>
              </div>
              <button className="font-bold hover:-translate-y-2 duration-500 text-center border-none dark:bg-orange-700 bg-orange-500 md:w-auto w-full rounded-lg px-4 py-2 mt-10">
                Learn More
              </button>
            </div>
          </div>
          <div className="container mx-auto bg-slate-200 dark:bg-slate-800">
            <div className="md:grid grid-cols-2 gap-2 dark:text-white">
              <div className="md:my-32 my-16 md:px-24 px-16">
                <div className="">
                  <h2 className="md:text-4xl text-lg font-semibold">About Me.</h2>
                  <p className="py-6 md:text-xl text-lg !leading-8">Hi! My name is Mohamad Agung Faisal, I am a Frontend Web Developer who builds Front-end Websites and Web Applications that lead to overall product success.</p>
                  <p className="py-6 md:text-xl text-lg !leading-8">I also like to share content related to things I've learned from my years in Web Development so it can help others in the Developer Community.</p>
                  <p className="py-6 md:text-xl text-lg !leading-8">I am open to job opportunities where I can contribute, learn and develop. If you have a good opportunity that matches my skills and experience, please don't hesitate to contact me.</p>
                </div>
              </div>
              <div className="md:my-32 my-16 md:px-24 px-16">
                <h2 className="md:text-4xl text-lg font-semibold">My Skills</h2>
                <div className="text-xl pt-6 text-center">
                  <div className="flex flex-wrap">
                    <div className="border-none rounded-lg dark:bg-orange-700 bg-orange-500 hover:-translate-y-2 duration-500 px-4 py-2 mx-2 my-2">HTML</div>
                    <div className="border-none rounded-lg dark:bg-orange-700 bg-orange-500 hover:-translate-y-2 duration-500 px-4 py-2 mx-2 my-2">CSS</div>
                    <div className="border-none rounded-lg dark:bg-orange-700 bg-orange-500 hover:-translate-y-2 duration-500 px-4 py-2 mx-2 my-2">React</div>
                    <div className="border-none rounded-lg dark:bg-orange-700 bg-orange-500 hover:-translate-y-2 duration-500 px-4 py-2 mx-2 my-2">Tailwind</div>
                    <div className="border-none rounded-lg dark:bg-orange-700 bg-orange-500 hover:-translate-y-2 duration-500 px-4 py-2 mx-2 my-2">JavaScript</div>
                    <div className="border-none rounded-lg dark:bg-orange-700 bg-orange-500 hover:-translate-y-2 duration-500 px-4 py-2 mx-2 my-2">CorelDraw</div>
                    <div className="border-none rounded-lg dark:bg-orange-700 bg-orange-500 hover:-translate-y-2 duration-500 px-4 py-2 mx-2 my-2">Adobe Photoshop</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto align-middle">
            <div className="md:my-32 my-16 md:px-24 px-16 dark:text-white">
              <div className="font-bold md:text-4xl text-lg text-center">My Experience</div>
                <div className="md:grid grid-cols-2 gap-4">
                  <div className="mt-8">
                    <div className="md:text-xl text-base font-bold">Kit Worker - <span className="font-semibold">Designer Graphic</span></div>
                    <div className="md:text-lg text-sm font-normal">2016-2017</div>
                    <ul className="md:text-lg ml-8 text-sm font-normal list-disc">
                      <li>Marketing the sale of curtains.</li>
                      <li>Serving customers both online and offline.</li>
                      <li>Create Decal Design according to customer's order.</li>
                    </ul>
                  </div>
                  <div className="mt-8">
                    <div className="md:text-xl text-base font-bold">Aries Gorden - <span className="font-semibold">Employee</span></div>
                    <div className="md:text-lg text-sm font-normal">2017-2019</div>
                    <ul className="md:text-lg ml-8 text-sm font-normal list-disc">
                      <li>Marketing the sale of curtains.</li>
                      <li>Making or sewing curtains according to the model ang ordered by customers.</li>
                      <li>Delivering and installing curtains to customers' homes.</li>
                    </ul>
                  </div>
                  <div className="mt-8">
                    <div className="md:text-xl text-base font-bold">JNE Turen - <span className="font-semibold">Warehouse Sorter</span></div>
                    <div className="md:text-lg text-sm font-normal">2020-2021</div>
                    <ul className="md:text-lg ml-8 text-sm font-normal list-disc">
                      <li>Sorter of arrival packages from Malang warehouse according to the delivery address..</li>
                      <li>Prepare packages that must be sent by couriers according to the area of each courier..</li>
                      <li>Handles packages that are late and fail to be delivered by couriers..</li>
                    </ul>
                  </div>
                  <div className="mt-8">
                    <div className="md:text-xl text-base font-bold">Aries Gorden - <span className="font-semibold">Employee</span></div>
                    <div className="md:text-lg text-sm font-normal">2021-2022</div>
                    <ul className="md:text-lg ml-8 text-sm font-normal list-disc">
                      <li>Marketing the sale of curtains.</li>
                      <li>Making or sewing curtains according to the model ang ordered by customers.</li>
                      <li>Delivering and installing curtains to customers' homes.</li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto align-middle">
          <div className="md:my-32 my-16 md:px-32 px-16 dark:text-white">
            <div className="text-center font-bold md:text-4xl text-lg">Portofolio</div>
              <div className="flex flex-wrap justify-between mt-8">
                <a href="https://github.com/agungf97?tab=repositories">
                  <div className="box-border h-56 w-56 p-4 border-4 hover:h-80 hover:w-80 duration-500"></div>
                  <div className="text-center mt-4">Portofolio 1</div>
                </a>
                <a href="https://github.com/agungf97?tab=repositories">
                  <div className="box-border h-56 w-56 p-4 border-4 hover:h-80 hover:w-80 hover:-translate-y-2 duration-500"></div>
                  <div className="text-center mt-4">Portofolio 2</div>
                </a>
                <a href="https://github.com/agungf97?tab=repositories">
                  <div className="box-border h-56 w-56 p-4 border-4 hover:h-80 hover:w-80 hover:-translate-y-2 duration-500"></div>
                  <div className="text-center mt-4">Portofolio 3</div>
                </a>
                <a href="https://github.com/agungf97?tab=repositories">
                  <div className="box-border h-56 w-56 p-4 border-4 hover:h-80 hover:w-80 hover:-translate-y-2 duration-500"></div>
                  <div className="text-center mt-4">Portofolio 4</div>
                </a>
              </div>
            </div>
          </div>
          <div className="container mx-auto align-middle">
            <div className="md:my-32 md:px-48 px-16 my-16 mx-auto text-center dark:text-white">
              <div className="text-center font-bold md:text-4xl text-xl">Get In Touch</div>
              <p className="mt-8 text-center md:text-lg text-sm !leading-8 top-4">Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
              <button className="mt-8 text-center text-xl border-2 rounded-lg px-4 py-2 top-4 align-middle dark:bg-orange-700 bg-orange-500 hover:-translate-y-2 duration-500"> Say Hello</button>
            </div>
          </div>
          <footer>
            <div class="text-center dark:text-white">
              © 2023 Copyright: Mohamad Agung Faisal
            </div>
          </footer>
        </section>  
      </main>
    </div>
  );
}
export default App;