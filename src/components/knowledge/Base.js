import React from 'react'
import imageHtml from "../../../static/html-5.svg"
import imageCSS from "../../../static/css3.svg"
import imageJavascript from "../../../static/javascript.svg"

const Base = () => {
    return (
        <>
            <div>
                <img src={imageHtml} alt="html-img" className='w-[60px] h-[60px]'></img>
                <p className='font-bold py-2 text-center'>HTML 5</p>
            </div>
            <div>
                <img src={imageCSS} alt="css-img" className='w-[60px] h-[60px]'></img>
                <p className='font-bold py-2 text-center'>CSS 3</p>

            </div>
            <div>
                <img src={imageJavascript} alt="js-img" className='w-[60px] h-[60px]'></img>
                <p className='font-bold py-2 text-center'>Javascript</p>
            </div>

        </>
    )
}

export default Base