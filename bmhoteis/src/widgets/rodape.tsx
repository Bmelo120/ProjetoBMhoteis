import Link from "next/link"

const Rodape = () => {
    return (
        <div className="container mx-auto py-5">
            <span className="text-lg font-semibold b-4"> &copy; BMhoteis </span>
            <ul className="flex flex-row gap-4">
                <li><Link className="hover:text-purple-400"  href="/"> Privacidade </Link></li>
                <li>&middot;</li>
                <li><Link className="hover:text-purple-400"  href="/"> Termos </Link></li>
                <li>&middot;</li>
                <li><Link className="hover:text-purple-400"  href="/"> Mapa do site </Link></li>
                <li>&middot;</li>
                <li><Link className="hover:text-purple-400"  href="/"> Informações da Empresa </Link></li>
            </ul>
        </div>
    )
}

export default Rodape

