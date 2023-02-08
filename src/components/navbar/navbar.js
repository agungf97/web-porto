import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import maf from '../../image/maf.png';

const Navbar = () => {
    return (
        <div className='fixed z-10 w-full py-4 bg-white dark:text-white dark:bg-slate-900 align-middle cursor-default'>
            <nav className="container mx-auto">
                <div className="flex justify-between md:px-16 px-8">
                    <div>
                        <img className="w-24 hover:scale-100 hover:opacity-90" src={maf} alt=""/>
                    </div>
                    <div className="md:flex md:space-x-8 text-md">
                            <div className="hidden md:block hover:font-semibold my-auto align-middle">About Me</div>
                            <div className="hidden md:block hover:font-semibold my-auto align-middle">Experience</div>
                            <div className="hidden md:block hover:font-semibold my-auto align-middle">Portofolio</div>
                            <div className="hidden md:block hover:font-semibold my-auto align-middle">
                                <a href="#contact">Contact</a>
                            </div>
                            <button className="text-center font-bold hidden md:block border-4 rounded-full px-6 align-middle border-orange-500 dark:border-orange-700 hover:border-orange-700 hover:text-white hover:bg-orange-700 duration-500">Resume</button>
                            <div className="block md:hidden">
                                <Bars3Icon className="h-auto w-8"/>
                            </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar