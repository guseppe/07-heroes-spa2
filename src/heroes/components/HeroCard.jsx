import { Link } from "react-router";

const CharactersByActor = ({alter_ego, characters}) =>{
  //  if(alter_ego === characters)
  //    return (<></>);
  //   else{
  //     return (<p>{characters }</p>);
  //   }
  return alter_ego === characters ?
   <></> : <p>{characters }</p>;
}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
  const heroImageUrl=`/assets/heroes/${id}.jpg`;
  const charactersByHero = (<p>{characters }</p>);
  return (
    <div className="col">
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4 animate__animated animate__fadeIn">
                    <img src={heroImageUrl} alt={ superhero } className="card-img" />
                    
                </div>
                <div className="col-8">
                      <div className="card-body">
                        <h5 className="card-title">{ superhero }</h5>
                        <p className="card-text">{ alter_ego }</p>
                        {/* {
                          //  ( alter_ego !== characters ) && (<p>{characters }</p>)
                           ( alter_ego !== characters ) && charactersByHero
                        } */}
                        <CharactersByActor alter_ego characters />
                        <p className="card-text">
                          <small className="text-muted">
                            { first_appearance }
                          </small>
                        </p>
                        <Link to={`/hero/${id}`}>
                         más...
                        </Link>
                      </div>
                </div>
            </div>
        </div>
    </div>
  )
}
