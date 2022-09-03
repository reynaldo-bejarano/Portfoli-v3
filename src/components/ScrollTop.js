import { Link } from 'gatsby';
import React, { useState } from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md';


const ScrollTop = () => {
    const [scrollTop, setScrollTop] = useState(false);

    window.addEventListener("scroll", scrollActive);

    function scrollActive() {
        const scrollY = window.pageYOffset

        if (scrollY >= 400) {
            setScrollTop(true)
        } else {
            setScrollTop(false)
        }
    }

    return (
        <button className=
            {scrollTop
                && ('h-10 w-10 2xl:h-16 2xl:w-16 flex justify-center items-center bg-red-700 rounded-2xl fixed bottom-4 right-4 bg-gradient-to-r from-cyan-600 to-blue-500 opacity-40 hover:opacity-100')
                || (' hidden')}
        >
            <Link to="/">
                <MdKeyboardArrowUp className='h-8 w-8 2xl:h-14 2xl:w-14 text-white' />
            </Link>

        </button>
    )
}

export default ScrollTop