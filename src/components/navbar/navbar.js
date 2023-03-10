import React from 'react';
import { useState } from "react";
import { Bars3Icon } from '@heroicons/react/24/solid';
import maf from '../../image/maf.png';
import SideMenu from '../sidemenu/sideMenu.js';

const Navbar = () => {
    const handleScrool = (id) => {
        const scroll = document.getElementById(id)
        scroll.scrollIntoView({ behavior: 'smooth' }, true)
    }

    const [sideMenu, setSideMenu] = useState(false)

    return (
        <div className='fixed z-10 w-full py-2 bg-white dark:text-white dark:bg-slate-900 align-middle cursor-default'>
            <nav className="container mx-auto">
                <div className="flex justify-between md:px-16 px-8">
                    <div>
                        <img onClick={() => handleScrool('home')} className="w-24 hover:scale-100 hover:opacity-90" src={maf} alt=""></img>
                    </div>
                    <div className="md:flex md:space-x-8 text-md">
                            <div className="hidden md:block hover:font-semibold my-auto align-middle">
                                <a onClick={() => handleScrool('about')}>About Me</a>
                            </div>
                            <div className="hidden md:block hover:font-semibold my-auto align-middle">
                                <a onClick={() => handleScrool('experience')}>Experience</a>
                            </div>
                            <div className="hidden md:block hover:font-semibold my-auto align-middle">
                                <a onClick={() => handleScrool('porto')}>Portofolio</a>
                            </div>
                            <div className="hidden md:block hover:font-semibold my-auto align-middle">
                                <a onClick={() => handleScrool('contact')}>Contact</a>
                            </div>
                            <button className="text-center font-bold hidden md:block border-4 rounded-xl px-6 align-middle border-orange-500 dark:border-orange-700 hover:border-orange-700 hover:text-white hover:bg-orange-700 duration-500">Resume</button>
                            <div>
                                <Bars3Icon onClick={() => setSideMenu(true)} className='block lg:hidden cursor-pointer h-8 w-8 text-dark-green' fill='none' stroke='currentColor' />
                            </div>
                    </div>
                </div>
            </nav>

            <SideMenu
                isShow={sideMenu}
                toggleShow={setSideMenu}
            />
        </div>
    )
}
export default Navbar