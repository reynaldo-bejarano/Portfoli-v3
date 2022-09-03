import React from 'react'
import supermario from "../../../static/supermario-img.jpeg"

const SuperMario = () => {
    return (
        <div className='py-20 grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <div className='w-full h-full shadow-lg lg:hover:animate-bounce transition duration-200'>
                <a href='https://reynaldo-bejarano.github.io/SuperMario-2/' target="_blanck">
                    <img className='rounded-lg' src={supermario} alt="supermario-img"></img>
                </a>
            </div>
            <div className='order-first lg:order-last'>
                <h4 className='text-right font-bold text-md 2xl:text-xl pb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-400'>Featured Project</h4>
                <h3 className='text-right text-xl 2xl:text-2xl pb-5 font-bold'>Super Mario 3D World</h3>
                <div className='p-5 bg-red-800 rounded-md'>
                    <p className='text-right text-white text-sm 2xl:text-lg'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                </div>
                <p className='text-right 2xl:text-lg py-3 text-slate-500'>VS Code | Tailwind | Html 5</p>
            </div>
        </div>
    )
}

export default SuperMario