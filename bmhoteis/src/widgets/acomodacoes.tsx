import ItemAcomodacao from "@/components/ItemAcomodacao/itemAcomodacao"
import { Accommodation } from "@/types/bmhoteisDados"
import Image from "next/image"
import Link from "next/link"

interface AcomodacaoProps {
  accommodation: Accommodation[]
}

const Acomodacao = ( props: AcomodacaoProps) => {

    const listaAcomodacoes = props.accommodation

    return(

        <section className="py-8  grid grid-cols-1 gap-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
           {listaAcomodacoes.map( (item, indice) => (
            <div key={indice}>
                <Link href={item.slug}>
                  <ItemAcomodacao
                      local={item.location.description}
                      anfitriao={item.host}
                      data={item.date}
                      preco={item.price}
                      avaliacao={item.rating}
                      preferidoHospedes={item.hasBadge}
                      >
                      <Image className="w-full aspect-square object-cover rounded-lg" 
                          src={item.photos[0].source} 
                          alt={item.photos[0].description} 
                          width={300}
                          height={300}
                      />
                  </ItemAcomodacao>
                </Link>
            </div>
           ))}
        </section>
    )
}

export default Acomodacao