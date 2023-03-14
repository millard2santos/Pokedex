

type Props = {
    id : number,
    name : string,
    sprites : any

}

const Card = ({id,name,sprites}: Props) => {
  return (
    <div className="p-4 bg-pink-300 flex flex-col items-center rounded-xl shadow-xl w-40 h-40">
        <img src={sprites.front_default} alt="" className="w-20 h-20"/>
        <p className="text-sm">id : {id}</p>
        <p className="text-sm">name : {name}</p>
    </div>
  )
}

export default Card