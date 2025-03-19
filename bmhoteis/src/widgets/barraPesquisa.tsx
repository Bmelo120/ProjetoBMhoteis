import { IconSearch } from "@tabler/icons-react"

const BarraPesquisa = () => {
    return (
        <div className="border-1 border-gray-200 flex items-center rounded-full px-3 py-2 w-full max-w-2xl mx-auto overflow-clip shadow-lg shadow-gray-200">
            <input className="w-full focus:outline-none px-2" type="text" placeholder="Digite a sua pesquisa"/>
            <button className="bg-purple-400 rounded-full p-2">
                <IconSearch
                    aria-label="Icone de usuarioa"
                    size={23}
                    color="white"
                />
            </button>
        </div>
    )
}

export default BarraPesquisa