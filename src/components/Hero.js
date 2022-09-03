import React from 'react'
import CvButton from './buttons/CvButton';
import SocialMedia from './buttons/SocialMedia';



const Hero = () => {
    return (
        <section className='flex justify-center items-center py-20 lg:py-10 2xl:py-44'>
            <div>
                <div>
                    <h3 className='text-center p-5 text-3xl 2xl:text-6xl font-bold text-slate-700'>Hello & Welcome</h3>
                    <h1 className='text-center p-5 text-5xl lg:text-6xl 2xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400'>I'm Reynaldo Bejarano</h1>
                    <h3 className='text-center p-5 text-3xl 2xl:text-6xl font-bold text-slate-700'>I build things for the web</h3>
                </div>
                <SocialMedia />
                <div className='flex justify-center p-10'>
                    <CvButton />
                </div>
            </div>
        </section>
    )
}

export default Hero