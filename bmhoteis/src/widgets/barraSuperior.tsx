import BotaoIcone from "@/components/BotoIcone/botaoIcone";
import Logo from "@/components/logo/Logo";
import { IconUserCircle } from "@tabler/icons-react";
import Link from "next/link";

const BarraSuperior = () => {
    return (
        <div className="py-6 flex justify-around items-center">
           
            <Logo></Logo>

            <div className="flex gap-6"> 
              <Link className="font-semibold" href="/"> Acomodações </Link>
              <Link className="opacity-60" href="/"> Experiências  </Link>
            </div>

            <BotaoIcone 
              icone={( 
                <IconUserCircle
                  aria-label="Icone de usuarioa"
                  size={18}
                  color="white"
                />
              )} 
              
            > 
            Entrar 
            </BotaoIcone>

        </div>
    )
}

export default BarraSuperior