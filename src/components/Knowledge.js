import React, { useState } from 'react'
import KnowledgeButton from './buttons/KnowledgeButton';


import KnowledgeItems from './knowledge/KnowledgeItems'



const Knowledge = () => {

    const [selectedKnowledge, useSelectedKnowledge] = useState({
        base: true,
        framework: false,
        library: false,
        platform: false,
    })
    const { base, framework, library, platform } = selectedKnowledge;

    const initialState = {
        base: false,
        framework: false,
        library: false,
        platform: false,
    }

    const HandleclickKnowledgeItem = (text) => {
        useSelectedKnowledge(initialState);
        useSelectedKnowledge(old => ({
            ...old, [text]: true
        }))
    }

    return (
        <div className='p-0 lg:p-10' id='knowledge'>
            <div>
                <h3 className='text-center font-bold text-4xl 2xl:text-6xl text-slate-800 p-5'>Some Things <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-400'>I’ve learn</span> </h3>
                <p className='text-center text-slate-700 font-bold text-md 2xl:text-xl  px-0 lg:px-20 py-5'>There are a number of technologies that allow developers to quickly create efficient and aesthetically appealing applications. Here are some of these technologies or programming languages that <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-700'>I currently use for frontend web development.</span></p>
            </div>
            <div className='grid md:flex md:justify-center md:items-center p-10 gap-10 2xl:gap-20'>
                <KnowledgeButton
                    text="Base"
                    stateItem={base}
                    onClick={() => HandleclickKnowledgeItem("base")}
                />
                <KnowledgeButton
                    text="Framework"
                    stateItem={framework}
                    onClick={() => HandleclickKnowledgeItem("framework")}
                />
                <KnowledgeButton
                    text="Library"
                    stateItem={library}
                    onClick={() => HandleclickKnowledgeItem("library")}
                />
                <KnowledgeButton
                    text="Platform"
                    stateItem={platform}
                    onClick={() => HandleclickKnowledgeItem("platform")}
                />
            </div>

            {base && <KnowledgeItems text="base" />}
            {framework && <KnowledgeItems text="framework" />}
            {library && <KnowledgeItems text="library" />}
            {platform && <KnowledgeItems text="platform" />}


        </div>
    )
}

export default Knowledge