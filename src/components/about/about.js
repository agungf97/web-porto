import React from 'react';

const About = () => {
    return (
        <div id="about" className="container mx-auto pt-8 pb-8 bg-slate-200 dark:bg-slate-800">
            <div className="md:grid grid-cols-2 gap-2 dark:text-white my-8">
              <div className="py-8 md:px-24 px-16 text-center">
                <div>
                  <h2 className="md:text-4xl text-xl font-black">About Me.</h2>
                  <p className="py-6 md:text-xl text-lg !leading-8">Hi! My name is Mohamad Agung Faisal, I am a Frontend Web Developer who builds Front-end Websites and Web Applications that lead to overall product success.</p>
                  <p className="py-6 md:text-xl text-lg !leading-8">I also like to share content related to things I've learned from my years in Web Development so it can help others in the Developer Community.</p>
                  <p className="py-6 md:text-xl text-lg !leading-8">I am open to job opportunities where I can contribute, learn and develop. If you have a good opportunity that matches my skills and experience, please don't hesitate to contact me.</p>
                </div>
              </div>
              <div className="md:px-24 py-8 px-16 text-center">
                <h2 className="md:text-4xl text-xl font-black">My Skills</h2>
                <div className="md:text-xl text-lg flex py-4 flex-wrap">
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
    )
}
export default About