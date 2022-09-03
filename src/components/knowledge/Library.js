import React from 'react'
import imageReact from "../../../static/react.svg"


const Library = () => {
    return (
        <>
            <div>
                <img src={imageReact} alt="react-img" className='w-[60px] h-[60px]'></img>
                <p className='font-bold py-2 text-center'>React JS</p>
            </div>
        </>
    )
}

export default Library