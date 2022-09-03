import React from 'react'
import imageBoostrap from "../../../static/bootstrap.svg"
import imageTailwind from "../../../static/tailwind-css.svg"
import imageSass from "../../../static/sass.svg"

const Framework = () => {
    return (
        <>
            <div>
                <img src={imageBoostrap} alt="boostrap-img" className='w-[60px] h-[60px]'></img>
                <p className='font-bold py-2 text-center'>Boostrap</p>
            </div>
            <div>
                <img src={imageTailwind} alt="tailwind-img" className='w-[60px] h-[60px]'></img>
                <p className='font-bold py-2 text-center'>Tailwind</p>
            </div>
            <div>
                <img src={imageSass} alt="sass-img" className='w-[60px] h-[60px]'></img>
                <p className='font-bold py-2 text-center'>Sass</p>
            </div>
        </>
    )
}

export default Framework