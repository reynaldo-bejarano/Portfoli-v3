import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md';


const ScrollTop = () => {
    const [scrollTop, setScrollTop] = useState(false);


    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setScrollTop(true);
            } else {
                setScrollTop(false);
            }
        });
    }, []);


    return (
        <button className=
            {scrollTop === true
                ? 'h-10 w-10 2xl:h-16 2xl:w-16 flex justify-center items-center bg-red-700 dark:bg-red-700 rounded-2xl fixed bottom-4 right-4 bg-gradient-to-r from-cyan-600 to-blue-500 dark:from-cyan-600 dark:to-blue-500 opacity-40 hover:opacity-100'
                : ' hidden'}
            onClick={goToTop}
        >
            <div>
                <MdKeyboardArrowUp className='h-8 w-8 2xl:h-14 2xl:w-14 text-white dark:text-white' />
            </div>

        </button>
    )
}

export default ScrollTop