import { Navigate, useParams } from "react-router"
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const {id, ...rest} = useParams();
  const hero = getHeroById(id);
  if(!hero)
    return <Navigate to='/marvel'/>
  return (
    <h1>{hero.superhero}</h1>
  )
}
