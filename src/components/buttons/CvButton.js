import React from 'react'

const CvButton = () => {
    return (
        <a
            className='text-xl px-16 py-2 2xl:py-4 bg-red-800 rounded-2xl font-bold
            text-white border-4 border-red-800 hover:bg-white hover:border-gray-200
            hover:text-red-700 shadow-lg'
            href='https://www.facebook.com/reynaldo.bejarano/'
            target="_blank"
            rel="noreferrer"
        >
            Download CV
        </a>
    )
}

export default CvButton