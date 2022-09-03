import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';


const SocialMedia = () => {
    return (
        <div className='flex items-center justify-center gap-20 p-5 2xl:p-16'>
            <a href='https://www.facebook.com/reynaldo.bejarano/' target="_blank" rel="noreferrer">
                <FaFacebookF
                    className='text-xl 2xl:text-2xl hover:text-red-800 hover:scale-125'
                />
            </a>
            <a href='https://www.instagram.com/rbjsz24/?hl=en' target="_blank" rel="noreferrer">
                <FaInstagram
                    className='text-xl 2xl:text-2xl hover:text-red-800 hover:scale-125'
                />
            </a>
            <a href='https://www.linkedin.com/in/reynaldo-bejarano/' target="_blank" rel="noreferrer">
                <FaLinkedinIn
                    className='text-xl 2xl:text-2xl hover:text-red-800 hover:scale-125'
                />
            </a>
            <a href='https://github.com/reynaldo-bejarano?tab=repositories' target="_blank" rel="noreferrer">
                <FaGithub
                    className='text-xl 2xl:text-2xl hover:text-red-800 hover:scale-125'
                />
            </a>
        </div>
    )
}

export default SocialMedia