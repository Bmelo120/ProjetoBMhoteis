'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import BotaoIcone from "@/components/BotoIcone/botaoIcone";
import 'swiper/css'
import { IconAdjustmentsHorizontal } from "@/assets/icones";
import Link from "next/link";
import Image from "next/image";
import { Photo } from "@/types/bmhoteisDados";


interface NavegacaoAbasProps {
    icons: Photo[] 
}

const NavegacaoAbas = ( props: NavegacaoAbasProps ) => {

    const icones = props.icons

    return (
        <div className="flex flex-row items-center ">
            
            <Swiper 
                spaceBetween={10} 
                slidesPerView={3} 
                breakpoints={{ 
                    640: {slidesPerView: 3}, 
                    764: {slidesPerView: 4}, 
                    1024: {slidesPerView: 6}, 
                    1280: {slidesPerView: 9}, 
                }}> 

                {icones.map((icone, indice)=>(
                    <SwiperSlide key={indice} className="">
                        <Link href={icone.url} className="flex flex-col items-center hover:text-purple-400 text-center gap-1 text-sm">
                            <Image src={icone.source} alt={icone.description} width={24} height={24}/>
                            <span className="text-sm">{icone.description}</span>
                        </Link>
                    </SwiperSlide>
                ))}

            </Swiper> 

            <BotaoIcone 
              icone={( 
                <IconAdjustmentsHorizontal
                  aria-label="Icone de usuario"
                  size={18}
                  color="white"
                />
            )}> 
            Filtros 
            </BotaoIcone>
        </div>
    )
}

export default NavegacaoAbas