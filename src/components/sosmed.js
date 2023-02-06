import React from 'react';
import wa from '../../image/whatsapp.png';
import tl from '../../image/telegram.png';
import ig from '../../image/instagram.png';
import lin from '../../image/linkedin.png';
import gh from '../../image/github.png';

const Sosmed = () => {
    return (
        <div className="fixed bottom-32 border-none-2 rounded-lg px-2 hover:-translate-y-2 bg-slate-300 opacity-50 hover:opacity-100 duration-500 md:block hidden">
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
    )
}
export default Sosmed