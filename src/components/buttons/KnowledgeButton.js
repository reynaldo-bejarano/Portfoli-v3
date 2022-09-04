import React from 'react'

const KnowledgeButton = ({ text, onClick, stateItem }) => {
    return (
        <button
            onClick={onClick}
            className=
            {stateItem
                ? 'bg-red-800 dark:bg-red-800 px-10 py-2 text-sm font-bold rounded-3xl text-white dark:text-white  shadow-lg border-4 border-red-800 hover:border-gray-200 hover:bg-white hover:text-red-800'
                : 'bg-[#fefffe] dark:bg-[#fefffe] px-10 py-2 text-sm font-bold rounded-3xl text-slate-800 dark:text-slate-800  shadow-lg border-4 hover:border-gray-200 hover:bg-red-800 hover:text-white dark:hover:border-gray-200 dark:hover:bg-red-800 dark:hover:text-white'}
        >
            {text}
        </button>
    )
}

export default KnowledgeButton