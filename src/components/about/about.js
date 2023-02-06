import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto bg-slate-200 dark:bg-slate-800">
            <div className="md:grid grid-cols-2 gap-2 dark:text-white">
              <div className="md:my-32 my-16 md:px-24 px-16 text-center">
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
    )
}
export default About