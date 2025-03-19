import React from "react"

interface BotaoIconeProps {
    icone: React.ReactNode
    children: React.ReactNode
}

const BotaoIcone = ( props: BotaoIconeProps) => {
    return (
        <>

            <button className="rounded-xl border-1 border-gray-300 flex items-center gap-2 px-3 py-2 hover:border-gray-400"> 
                <span className="bg-purple-400 rounded-full p-2"> {props.icone} </span> 
                <span className="font-semibold"> {props.children} </span>
            </button>
        
        </>

    )
}

export default BotaoIcone