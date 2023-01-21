import './App.css';
import { Bars3Icon } from '@heroicons/react/24/solid';
import fp from './image/fp.png';
import ht from '../src/image/html.png';
import cs from './image/css.png';
import rj from './image/React.png';
import tc from './image/tailwindcss.png';

function App() {
  return (
    <div className="bg-gray-200">
      <div>
        <nav className="md:container py-3 md:mx-auto mx-6 flex justify-between">
          <div className="text-2xl font-black my-auto align-middle">AGUNG.</div>
          <div className="md:flex md:space-x-10 text-lg">
            <div className="font-bold hidden md:block hover:font-black my-auto align-middle">Home</div>
            <div className="font-bold hidden md:block hover:font-black my-auto align-middle">Experience</div>
            <div className="font-bold hidden md:block hover:font-black my-auto align-middle">Portofolio</div>
            <button className="font-bold hidden md:block text-center border-2 rounded-full px-4 py-2 align-middle bg-slate-500 hover:bg-slate-300">Contact Us</button>
            <div className="font-bold block md:hidden">
              <Bars3Icon className="h-auto w-8"/>
            </div>
          </div>
        </nav>
        <div className="container md:mx-auto px-6 pb-10">
          <div className="md:flex h-full">
            <div className="md:w-1/2 md:py-0 pt-10 pb-8 my-auto align-middle">
              <div className="md:text-2xl text-lg font-bold">Hai, my name is...</div>
              <div className="py-3 md:text-6xl text-xl font-black"> Mohamad <span className="text-gray-500">Agung</span> Faisal</div>
              <div className="py-2 md:text-lg text-sm">My nickname is "Agung", I graduated from high school majoring in social studies in 2015. I have several skills such as using Microsoft Office, CorelDraw Graphic and Adobe Photoshop.</div>
            </div>
            <div className="md:w-1/2 mx-auto allign-center my-auto">
              <img className="mx-auto md:w-3/4 w-1/2" src={fp} alt=""/>
            </div>
          </div>
        </div>
      </div>        
      <div className="bg-slate-300">
        <div className="container mx-auto py-8 px-6 h-full">
            <div className="md:text-4xl text-lg font-semibold">About Me.</div>
            <div className="py-3 mt-4 md:text-6xl text-xl font-bold">Why hire me in your company?</div>
            <div className="py-2  mt-4 md:text-lg text-sm">I have 1 years experience work as developer. I make Mobile App using Android Studio nad make Web Landing Page using CodeIgniter. Now i learn more deeper about ReactJS and NextJS as a Frontend Developer. I create a lot of reusable components to support my work later on.</div>
            <div className="py-2 md:text-lg text-sm">I believe with my ability and my hard work can bring the best results for the company. because I love code and I really like the challenge of getting things done.</div>
            <button className="font-bold text-center border-4 border-slate-500 md:w-auto w-full rounded-lg px-4 py-2 mt-10">
                Learn More
          </button>
        </div>
      </div>
      <div className="container mx-auto py-10 px-6">
        <div className="text-center mt-8 md:text-4xl text-xl font-bold mb-10">Skill's</div>
        <div className="md:flex justify-around">
          <div>
            <img className="mx-auto md:w-1/2 w-1/4" src={ht} alt=""/>
            <div className="text-center md:text-xl text-sm mt-2">
              HTML 
            </div>
          </div>
          <div>
            <img className="mx-auto md:w-1/2 w-1/4" src={cs} alt=""/>
            <div className="text-center md:text-xl text-sm mt-2">
              CSS 
            </div>
          </div>
          <div>
            <img className="mx-auto md:w-1/2 w-1/4" src={rj} alt=""/>
            <div className="text-center md:text-xl text-sm mt-2">
              ReactJS 
            </div>
          </div>
          <div>
            <img className="mx-auto md:w-1/2 w-1/4" src={tc} alt=""/>
            <div className="text-center md:text-xl text-sm mt-2">
              TailwindCSS 
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 bg-slate-400">
        <div className="container mx-auto py-10 px-6">
          <div className="font-bold text-3xl text-center">My Experience</div>
            <div className="flex flex-wrap justify-between mx-auto px-3">
              <div className="mt-6">
                <div className="text-xl font-bold">Kit Worker - <span className="font-semibold">Designer Graphic</span></div>
                <div className="text-sm font-normal">2016-2017</div>
                <ul>
                  <li>Marketing the sale of curtains.</li>
                  <li>Serving customers both online and offline.</li>
                  <li>Create Decal Design according to customer's order.</li>
                </ul>
              </div>
              <div className="mt-6">
                <div className="text-xl font-bold">Aries Gorden - <span className="font-semibold">Employee</span></div>
                <div className="text-sm font-normal">2017-2019</div>
                <ul>
                  <li>Marketing the sale of curtains.</li>
                  <li>Making or sewing curtains according to the model ang ordered by customers.</li>
                  <li>Delivering and installing curtains to customers' homes.</li>
                </ul>
              </div>
              <div className="mt-6">
                <div className="text-xl font-bold">JNE Turen - <span className="font-semibold">warehouse sorter</span></div>
                <div className="text-sm font-normal">2020-2021</div>
                <ul>
                  <li>Sorter of arrival packages from Malang warehouse according to the delivery address..</li>
                  <li>Prepare packages that must be sent by couriers according to the area of each courier..</li>
                  <li>Handles packages that are late and fail to be delivered by couriers..</li>
                </ul>
              </div>
              <div className="mt-6">
                <div className="text-xl font-bold">Aries Gorden - <span className="font-semibold">Employee</span></div>
                <div className="text-sm font-normal">2017-2019</div>
                <ul>
                  <li>Marketing the sale of curtains.</li>
                  <li>Making or sewing curtains according to the model ang ordered by customers.</li>
                  <li>Delivering and installing curtains to customers' homes.</li>
                </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;