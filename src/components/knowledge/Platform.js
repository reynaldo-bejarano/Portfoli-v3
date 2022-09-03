import React from 'react'
import imageGit from "../../../static/git.svg"
import imageFirebase from "../../../static/firebase.svg"
import imageGatsby from "../../../static/gatsby.svg"

const Platform = () => {
    return (
        <>
            <div>
                <img src={imageGit} alt="git-img" className='w-[60px] h-[60px]'></img>
                <p className='font-bold py-2 text-center'>Git</p>
            </div>
            <div>
                <img src={imageFirebase} alt="firebase-img" className='w-[60px] h-[60px]'></img>
                <p className='font-bold py-2 text-center'>Firebase</p>
            </div>
            <div>
                <img src={imageGatsby} alt="gatsby-img" className='w-[60px] h-[60px]'></img>
                <p className='font-bold py-2 text-center'>Gatsby</p>
            </div>
        </>
    )
}

export default Platform