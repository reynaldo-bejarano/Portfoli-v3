import React from 'react';
import dottedLines from "../../static/dotted_lines.svg";

const Contact = () => {
    return (
        <div>
            <img className='hidden lg:block' src={dottedLines} alt="dotted-lines"></img>
            <div className='py-10 lg:p-20'>
                <p className='text-center font-bold text-sm 2xl:text-lg'>What's Next?</p>
                <h3 className='font-bold text-center lg:p-5 text-4xl lg:text-6xl 2xl:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-400'>Get in touch!</h3>
                <p className='text-center text-slate-800 font-bold p-5 2xl:px-64 2xl:text-lg'>I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-700'>I’ll try my best to get back to you!</span></p>
                <div className='flex justify-center p-5'>
                    <a href='mailto:reynaldo.bjsz@gmail.com' className='px-16 py-2 inline-block bg-red-800 text-white font-bold rounded-2xl border-4 border-red-800 hover:bg-white hover:text-red-800 hover:border-gray-200 shadow-lg cursor-pointer'>Say Hi!</a>
                </div>
            </div>
        </div>
    )
}

export default Contact