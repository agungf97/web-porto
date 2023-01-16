import logo from './logo.svg';
import './App.css';
import { Bars3Icon } from '@heroicons/react/24/solid';
import fp from './image/fp.png'

function App() {
  return (
    <div>
      <div>
        <nav className="md:container py-3 md:mx-auto mx-6 flex justify-between">
          <div className="text-2xl font-black my-auto align-middle">AGUNG.</div>
          <div className="md:flex md:space-x-10 text-lg">
            <div className="font-bold hidden md:block hover:font-black my-auto align-middle">Home</div>
            <div className="font-bold hidden md:block hover:font-black my-auto align-middle">Experience</div>
            <div className="font-bold hidden md:block hover:font-black my-auto align-middle">Portofolio</div>
            <button className="font-bold hidden md:block text-center border-2 rounded-full px-4 py-2 align-middle bg-teal-300 hover:bg-teal-400 text-cyan-800 ">Contact Us</button>
            <div className="font-bold block md:hidden">
              <Bars3Icon className="h-auto w-8"/>
            </div>
          </div>
        </nav>
        <div className="bg-teal-200">
          <div className="container mx-6 md:mx-auto md:flex h-full">
            <div className="md:w-1/2 md:py-0 pt-10 pb-8 my-auto align-middle">
              <div className="md:text-2xl text-lg font-bold">Hai, my name is...</div>
              <div className="py-3 md:text-6xl text-xl font-black"> Mohamad <span className="text-gray-500">Agung</span> Faisal</div>
              <div className="py-2 md:text-lg text-sm">My nickname is "Agung", I graduated from high school majoring in social studies in 2015. I have several skills such as using Microsoft Office, CorelDraw Graphic and Adobe Photoshop.</div>
            </div>
            <div className="md:w-1/2 mx-auto allign-center my-auto">
              <img className="mx-auto md:w-3/4 w-1/2  " src={fp}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
