import { useEffect, useState } from "react"
import Card from "./Card"

type Props = {}

const CardList = (props: Props) => {

    const [list, setList] = useState<any>([])
    const [page, setPage] = useState<number>(0)

    const getData = async() => {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page}`).then(res => res.json())
        const list = await Promise.all(data.results.map((pokemon:any) => fetch(pokemon.url).then(res=> res.json())))
        console.log(list[5]);
        
       return list
    }
    useEffect(() => {
       
        getData().then(res => setList(res))
    
    }, [page])


    

  return (
    <div className="flex gap-4 flex-wrap">
        {
             list.map(({id, name, sprites}:any, i:number ) => <Card key={i} name={name} id={id} sprites={sprites}/>) 
        }
    </div>
  )
}

export default CardList