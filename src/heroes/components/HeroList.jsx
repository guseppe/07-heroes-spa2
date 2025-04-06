import { useMemo } from 'react';
import {getHeroesByPublisher} from '../helpers';
import { HeroCard } from './';
export const HeroList = ({ publisher }) => {
  const heroList = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
      <div className='row rows-cols-1 row-cols-md-3 g-3'>
          {
              heroList.map(hero => (
                //   <li key={hero.id}>
                //       {hero.superhero}
                //   </li>
                <HeroCard key={hero.id} {...hero}/>
              ))
          }
      </div>
  )
}
