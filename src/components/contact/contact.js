import React from 'react';

const Contact = () => {
    return (
        <div id="#contact" className="container mx-auto align-middle">
            <div className="md:my-32 md:px-48 px-16 my-16 mx-auto text-center dark:text-white">
                <div className="text-center font-bold md:text-4xl text-2xl">Get In Touch</div>
                <p className="mt-8 text-center md:text-lg text-sm !leading-8 top-4">Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                <button className="mt-8 text-center text-xl border-2 rounded-lg px-4 py-2 top-4 align-middle dark:bg-orange-700 bg-orange-500 hover:-translate-y-2 duration-500"> Say Hello</button>
            </div>
        </div>
    )
}
export default Contact