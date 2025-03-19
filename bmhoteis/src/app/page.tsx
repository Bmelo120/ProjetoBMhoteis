import { fetchData } from "@/utils/api";
import Acomodacao from "@/widgets/acomodacoes";
import BarraPesquisa from "@/widgets/barraPesquisa";
import BarraSuperior from "@/widgets/barraSuperior";
import NavegacaoAbas from "@/widgets/navegacaoAbas";
import Rodape from "@/widgets/rodape";


export default async function Home() {

    const dados = await fetchData()

  return (
    <>
      <header className=" container mx-auto">      
        <BarraSuperior/>
        <BarraPesquisa/>
      </header>

      <hr className="my-6 border-gray-200"/>

      <main className="container mx-auto">
          <NavegacaoAbas icons={dados.icons}/>
          <Acomodacao accommodation={dados.accommodation}/>
      </main>

      <footer className="bg-gray-200">
        <Rodape/>
      </footer>
    </>
  );
}
