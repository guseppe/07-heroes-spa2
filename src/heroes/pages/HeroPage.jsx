import { Navigate, useNavigate, useParams } from "react-router"
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const {id, ...rest} = useParams();
  //use memo para memorizar valores y use callback para funciones, si el componente se redibuja 
  //y los parametros no han cambiado, no es necesario llamar la funcion de nuevo
  const hero = useMemo(() => getHeroById(id), [id]) ;
  const navigate = useNavigate();
  const onNavigateBack = () =>{
    navigate(-1);
  }
  if(!hero)
    return <Navigate to='/marvel'/>
  return (
    <div className="row mt-5">
       <div className="col-4 animate__animated animate__fadeInLeft">
           <img 
            src= { `/assets/heroes/${id}.jpg` } 
            alt= { hero.superhero } 
            className="img-thumbnail" 
           />
       </div>
       <div className="col-8">
          <h3>{ hero.superhero }</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Alter Ego:</b> { hero.alter_ego }
            </li>
            <li className="list-group-item">
              <b>Publisher:</b> { hero.publisher }
            </li>
            <li className="list-group-item">
              <b>First Appearance:</b> { hero.first_appearance }
            </li>
          </ul>
          <h5 className="mt-3">Characters</h5>
          <p>{ hero.characters }</p>
          <button 
            onClick={ onNavigateBack }
            className="btn btn-outline-primary"
          >
            Regresar
          </button>
       </div>
    </div>
  )
}
