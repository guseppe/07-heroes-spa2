import {getHeroesByPublisher} from '../helpers';
export const HeroList = ({ publisher }) => {
  return (
      <ul>
          {
              getHeroesByPublisher(publisher).map(hero => (
                  <li key={hero.id}>
                      {hero.superhero}
                  </li>
              ))
          }
      </ul>
  )
}
