import React from 'react';
import fp from '../../image/fotodiri.png';

const Home = () => {
    return (
        <div id="home" className="container mx-auto align-middle">
            <div className="md:my-32 my-24 md:px-80 px-16 text-center dark:text-white">
              <h2 className="md:text-2xl text-lg font-bold ">Hai, my name is...</h2>
              <h1 className="md:py-4 py-2 md:text-4xl text-xl cursor-default font-black hover:-translate-y-2 duration-500"> Mohamad <span className="text-orange-600 md:text-6xl">Agung</span> Faisal</h1>
              <p className="md:py-4 py-2 md:text-xl text-md !leading-8">My nickname is "Agung", I graduated from high school majoring in social studies in 2015. I have several skills such as using Microsoft Office, CorelDraw Graphic and Adobe Photoshop.</p>
              <div className="container mx-auto">
                <img className="w-96 mx-auto hover:-translate-y-2 duration-500" src={fp} alt=""/>
              </div>
              <button className="font-bold hover:-translate-y-2 duration-500 text-center border-none dark:bg-orange-700 bg-orange-500 md:w-auto w-full rounded-lg px-4 py-2 mt-10">
                Learn More
              </button>
            </div>
          </div>
    )
}
export default Home