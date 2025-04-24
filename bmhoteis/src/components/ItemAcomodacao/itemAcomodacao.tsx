import { IconHeartFilled, IconStarFilled } from "@/assets/icones"
import React from "react"


interface ItemAcomodacaoProps {
    children: React.ReactNode
    local: string
    anfitriao: string
    data: string
    preco: number
    avaliacao: number
    preferidoHospedes: boolean
}

const ItemAcomodacao = ({
    children, 
    local, 
    anfitriao, 
    data, 
    preco, 
    avaliacao, 
    preferidoHospedes
    }: ItemAcomodacaoProps) => {
    return (
        <figure className="relative">
            <div className="p-2 absolute w-full flex flex-row justify-between items-center ">
                <div> 
                    {preferidoHospedes && (
                        <div className="bg-white rounded-full px-3 h-7 flex items-center justify-center font-semibold shadow-lg"> 
                            Preferido dos hóspedes 
                        </div>
                    )}
                </div>              
                <IconHeartFilled className="stroke-white opacity-80"
                    aria-label="Fav"
                    size={30}/>
            </div>
            {children}
            <figcaption className="pt-2">
                <div className="flex flex-row justify-between">
                    <span className="font-semibold">{local}</span>
                    <div className="flex flex-row items-center gap-1">
                        <IconStarFilled
                            className="mb-[3px]"
                            aria-label="Avaliações"
                            size={14}
                        />
                        <span className="font-semibold  ">{avaliacao}</span>
                    </div>
                </div>
                <div>Anfitrião(o): {anfitriao}</div>
                <div>{data}</div>
                <div className="font-semibold">R$ {preco}</div>
            </figcaption>
        </figure>
    )
}

export default ItemAcomodacao