import React from 'react'
import dottedLines from "../../static/dotted_lines.svg";

import SuperMario from './projects/SuperMario'

const Projects = () => {
    return (
        <div id="projects">
            <img className='hidden lg:block' src={dottedLines} alt="dotted-lines"></img>
            <h3 className='text-4xl text-slate-700 font-bold text-center pt-20'>Some Things <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-400'>I’ve Built</span> </h3>
            <SuperMario />
        </div>
    )
}

export default Projects