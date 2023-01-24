import './App.css';
import { Bars3Icon } from '@heroicons/react/24/solid';
import fp from '../src/image/fp.png';
import wa from '../src/image/whatsapp.png';
import tl from '../src/image/telegram.png';
import ig from '../src/image/instagram.png';
import lin from '../src/image/linkedin.png';
import gh from '../src/image/github.png';

function App() {
  return (
    <div className="bg-slate-900 h-full">
      <div>
        <header className="md:container md:mx-auto mx-6">
          <nav className="flex justify-between pt-4">
            <div className="text-2xl font-black text-white my-auto align-middle">AGUNG.</div>
            <ol className="md:flex md:space-x-8 text-base">
              <li className="text-white font-bold hidden md:block hover:font-black my-auto align-middle">About Me</li>
              <li className="text-white font-bold hidden md:block hover:font-black my-auto align-middle">Experience</li>
              <li className="text-white font-bold hidden md:block hover:font-black my-auto align-middle">Portofolio</li>
              <li className="text-white font-bold hidden md:block hover:font-black my-auto align-middle">Contact</li>
              <li className="text-white font-bold hidden md:block">
                <button className="text-center border-2 rounded-full px-6 align-middle bg-slate-500 hover:bg-slate-300">Resume</button>
              </li>
              <div className="block md:hidden"><Bars3Icon className="h-auto w-8"/></div>
            </ol>
          </nav>
        </header>
        <div className="md:flex justify-between md:w-full hidden">
          <div className="fixed bottom-16 border-none-2 rounded-lg bg-slate-800 px-4">
            <div className="my-6">
              <a href="https://wa.me/6281215552690">
                <img className="mx-auto w-8" src={wa} alt=""/></a></div>
            <div className="my-6">
              <a href="https://telegram.me/agungf97">
                <img className="mx-auto w-8" src={tl} alt=""/></a>
            </div>
            <div className="my-6">
              <a href="https://www.instagram.com/agungf97/">
                <img className="mx-auto w-8" src={ig} alt=""/></a>
            </div>
            <div className="my-6">
              <a href="https://www.linkedin.com/in/agungf97/">
                  <img className="mx-auto w-8" src={lin} alt=""/></a>
            </div>
            <div className="my-6">
              <a href="https://github.com/agungf97">
                <img className="mx-auto w-8" src={gh} alt=""/></a>
            </div>
          </div>
          <div className="bottom-48 -right-24 fixed rotate-90 font-moc text-xl text-white">
            mohamadagungfaisal@gmail.com
          </div>
        </div>
        <section className="text-white">
          <div className="container mx-auto">
            <div className="md:flex justify-between h-full">
              <div className="md:my-32 my-16 md:px-24 px-16">
                <h2 className="md:text-4xl text-lg font-bold">Hai, my name is...</h2>
                <h1 className="py-4 md:text-6xl text-xl font-black"> Mohamad <span className="text-gray-500">Agung</span> Faisal</h1>
                <p className="py-4 md:text-xl text-lg !leading-8">My nickname is "Agung", I graduated from high school majoring in social studies in 2015. I have several skills such as using Microsoft Office, CorelDraw Graphic and Adobe Photoshop.</p>
                <button className="font-bold text-center border-4 border-slate-500 md:w-auto w-full rounded-lg px-4 py-2 mt-10">
                  Learn More
                </button>
              </div>
              <div className="md:my-32 my-16 md:px-24 px-16">
                <img className="md:w-full" src={fp} alt=""/>
              </div>
            </div>
          </div>
        </section> 
        <section className="container mx-auto text-white">
          <div className="md:grid grid-cols-2 gap-2">
            <div className="md:my-32 my-16 md:px-24 px-16">
              <h2 className="md:text-4xl text-lg font-semibold">About Me.</h2>
              <p className="py-6 md:text-xl text-lg !leading-8">Hi! My name is Mohamad Agung Faisal, I am a Frontend Web Developer who builds Front-end Websites and Web Applications that lead to overall product success.</p>
              <p className="py-6 md:text-xl text-lg !leading-8">I also like to share content related to things I've learned from my years in Web Development so it can help others in the Developer Community.</p>
              <p className="py-6 md:text-xl text-lg !leading-8">I am open to job opportunities where I can contribute, learn and develop. If you have a good opportunity that matches my skills and experience, please don't hesitate to contact me.</p>
            </div>
            <div className="md:my-32 my-16 md:px-24 px-16">
              <h2 className="md:text-4xl text-lg font-semibold">My Skills</h2>
              <div className="flex flex-wrap space-y-2 space-x-4 text-xl pt-6 text-center">
                <div className="border-none-2 rounded-lg bg-slate-800 px-4 py-2">HTML</div>
                <div className="border-none-2 rounded-lg bg-slate-800 px-4 py-2">CSS</div>
                <div className="border-none-2 rounded-lg bg-slate-800 px-4 py-2">React</div>
                <div className="border-none-2 rounded-lg bg-slate-800 px-4 py-2">Tailwind</div>
                <div className="border-none-2 rounded-lg bg-slate-800 px-4 py-2">JavaScript</div>
                <div className="border-none-2 rounded-lg bg-slate-800 px-4 py-2">CorelDraw</div>
                <div className="border-none-2 rounded-lg bg-slate-800 px-4 py-2">Adobe Photoshop</div>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto text-white">
          <div className="md:my-32 my-16 md:px-24 px-16">
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
        </section>
        <section className="container mx-auto text-white">
          <div className="md:my-32 my-16 md:px-24 px-16">
            <div className="text-center font-bold md:text-4xl text-lg">Portofolio</div>
            <div className="flex flex-wrap justify-between mt-8">
              <a href="https://github.com/agungf97?tab=repositories" class="text-blue-600 visited:text-purple-600 ...">Inspiration</a>
              <a href="https://github.com/agungf97?tab=repositories" class="text-blue-600 visited:text-purple-600 ...">Inspiration</a>
              <a href="https://github.com/agungf97?tab=repositories" class="text-blue-600 visited:text-purple-600 ...">Inspiration</a>
              <a href="https://github.com/agungf97?tab=repositories" class="text-blue-600 visited:text-purple-600 ...">Inspiration</a>
            </div>
          </div>
        </section>
        <section className="text-white">
          <div className="container mx-auto">
            <div className="md:mx-48 md:my-32 mx-auto text-center">
              <div className="text-center font-bold md:text-4xl text-xl">Get In Touch</div>
              <p className="mt-8 text-center md:text-lg text-sm !leading-8 top-4">Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
              <button className="mt-8 text-center border-2 rounded-lg px-4 py-2 top-4 align-middle bg-slate-500 hover:bg-slate-300"> Say Hello</button>
            </div>
          </div>
        </section>
        <footer className="text-white">
          <div className="container">
            <div className="italic text-center font-thin">© Copyright 2023. Made by <span className="text-sky-500">Mohamad Agung Faisal</span></div>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default App;