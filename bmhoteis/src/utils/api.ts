import { Accommodation, BmhoteisApi } from "@/types/bmhoteisDados"

export async function fetchData(): Promise<BmhoteisApi> {
    try{

        const responde = await fetch("https://web.codans.com.br/airbnb")
        const dados = responde.json()
        return dados

    } catch (e) {
        console.error(e)
        throw e
    }
}

export async function fetchDataByUrl( id: string): Promise<Accommodation | undefined> {
    try{

        const dados = await fetchData()
        const acomodacao = dados.accommodation.find((item: Accommodation)=> {
            return item.slug === decodeURIComponent(id) 
        })

        return acomodacao
    } catch (e) {
        console.error(e)
        throw e
    }
}