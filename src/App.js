import logo from './logo.svg';
import './App.css';
import { Bars3Icon } from '@heroicons/react/24/solid';
import fp from './image/fp.png'

function App() {
  return (
    <div>
      <div>
        <nav className="lg:container py-3 lg:mx-auto mx-5 flex justify-between">
          <div className="text-2xl font-black my-auto align-middle">AGUNG.</div>
          <div className="lg:flex lg:space-x-10 text-lg">
            <div className="font-bold hidden lg:block hover:font-black my-auto align-middle">Home</div>
            <div className="font-bold hidden lg:block hover:font-black my-auto align-middle">Experience</div>
            <div className="font-bold hidden lg:block hover:font-black my-auto align-middle">Portofolio</div>
            <button className="font-bold hidden lg:block text-center border-2 rounded-full px-4 py-2 align-middle bg-teal-300 hover:bg-teal-400 text-cyan-800 ">Contact Us</button>
            <div className="font-bold block lg:hidden">
              <Bars3Icon className="h-auto w-8"/>
            </div>
          </div>
        </nav>
        <div className="container mx-auto flex h-screen">
          <div className="w-1/2 my-auto align-middle">
            <div className="text-2xl font-bold">Hai, my name is...</div>
            <div className="py-3 text-6xl font-black"> Mohamad Agung Faisal</div>
            <div className="py-2 text-lg">My nickname is "Agung", I graduated from high school majoring in social studies in 2015. I have several skills such as using Microsoft Office, CorelDraw Graphic and Adobe Photoshop.</div>
          </div>
          <div className="w-1/2 mx-auto allign-center my-auto">
            <img className="mx-auto w-3/4" src={fp}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
