import React from 'react'

import Base from './Base'
import Framework from './Framework'
import Library from './Library'
import Platform from './Platform'

const KnowledgeItems = ({ text }) => {

    return (
        <div className='flex justify-center items-center gap-20 2xl:gap-32'>
            {text === "base" && <Base />}
            {text === "framework" && <Framework />}
            {text === "library" && <Library />}
            {text === "platform" && <Platform />}
        </div>
    )
}

export default KnowledgeItems