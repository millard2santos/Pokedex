import {colours} from '../services'

type Props = {
    id : number,
    name : string,
    sprites : any,
    types: any

}


const Card = ({id,name,sprites, types}: Props) => {

   
   const bg = colours[types[0].type.name]
    
    

  return (
    <div className={`p-4 flex ${bg} flex-col items-center rounded-xl shadow-xl w-40 h-40`}>
        <img src={sprites.other.home.front_default} alt="" className="w-20 h-20"/>
        <p className="text-sm">id : {id}</p>
        <p className="text-sm">name : {name}</p>
    </div>
  )
}

export default Card