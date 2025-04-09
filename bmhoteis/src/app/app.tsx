import { fetchDataByUrl } from "@/utils/api";
import AcomodacaoDetalhes from "@/widgets/acomodacaoDetalhes";
import BarraPesquisa from "@/widgets/barraPesquisa";
import BarraSuperior from "@/widgets/barraSuperior";
import Depoimentos from "@/widgets/depoimentos";
import Galeria from "@/widgets/galeria";
import Rodape from "@/widgets/rodape";
import { notFound } from "next/navigation";

interface PageProps {
    id: string
}

export default async function Page (
    {params} : {params: Promise<PageProps>}
) {
    const {id} = await params
    const acomodacao = await fetchDataByUrl(id)

    if( !acomodacao) {
        notFound()
    }

    return (
        <div>
           <header className="container mx-auto">
                <BarraSuperior/>
                <BarraPesquisa/>
           </header>
           <main className="container mx-auto py-4">
                <h1 className="text-3xl font-semibold pb-4">{acomodacao.title}</h1>
                <Galeria fotos={acomodacao.photos}/>
                <div className="flex flex-col md:flex-row">
                    <AcomodacaoDetalhes accommodation={acomodacao}/>
                    <Depoimentos testimonials={acomodacao.testimonials}/>
                </div>
           </main>
           <footer className="bg-gray-200">
                <Rodape/>
            </footer>
        </div>
    );
}