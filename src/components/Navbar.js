import { Link } from 'gatsby'
import React, { useState } from 'react'
import Hamburger from './buttons/hamburger';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const handleMenuClick = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <header>
            <div className='h-16 flex justify-between items-center md:px-0'>
                <div className='text-xl font-bold text-slate-800'>
                    <Link to='/'>Portfolio</Link>
                </div>
                <nav>
                    <ul
                        className=
                        {openMenu
                            ? 'w-full bg-white h-full p-10 md:p-0 absolute left-1/3 top-16 md:static md:w-auto md:h-auto md:flex md:items-center md:gap-4'
                            : 'w-full bg-white h-full p-10 md:p-0 absolute left-1/3 -top-full md:static md:w-auto md:h-auto md:flex md:items-center md:gap-4'
                        }>
                        <li className='p-3 text-md text-slate-800 font-bold md:p-0 hover:text-red-800 hover:underline hover:underline-offset-8'>
                            <Link to='#about'>About</Link>
                        </li>
                        <li className='p-3 text-md text-slate-800 font-bold md:p-0 hover:text-red-800 hover:underline hover:underline-offset-8'>
                            <Link to='#knowledge'>Knowledge</Link>
                        </li>
                        <li className='p-3 text-md text-slate-800 font-bold md:p-0 hover:text-red-800 hover:underline hover:underline-offset-8'>
                            <Link to='#projects'>Projects</Link>
                        </li>
                        <li className='p-3 text-md text-slate-800 font-bold md:p-0 hover:text-red-800 hover:underline hover:underline-offset-8'>
                            <Link to='#contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <Hamburger onClick={handleMenuClick} />

            </div>
        </header>
    )
}

export default Navbar