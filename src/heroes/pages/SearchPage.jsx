import { useLocation, useNavigate } from 'react-router';
import { HeroCard } from '../components';
import { useForm } from '../hooks/useForm';
import queryString from 'query-string';
import { getHeroByName } from '../helpers';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = ''} = queryString.parse( location.search );
  const {searchText, onInputChange} = useForm({
    searchText: q
  });
 
  const onSearchSubmit = ( event ) =>{
    event.preventDefault();
    //if(searchText.trim().length <= 1) return
    navigate(`?q=${searchText}`);
  }
  const heroes = getHeroByName( q );
  const showSearch = q.length === 0;
  const showError = heroes.length === 0 && q.length > 0; 
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ onSearchSubmit }>
            <input
              type="text"
              className="form-control"
              placeholder="Search a hero"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />
            <button className="btn btn-outline-primary mt-2">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {/* {
            (q.length === 0 ? <div className="alert alert-primary animate__animated animate__fadeIn"> Search a hero </div> :
              ( heroes.length == 0 ) && <div className="alert alert-danger animate__animated animate__fadeIn"> There's no results for hero with <b>{q}</b> </div>
            )
          } */}
         
         <div className="alert alert-primary animate__animated animate__fadeIn" style={{display: showSearch ? '' : 'none'}}> 
            Search a hero 
         </div>
         <div className="alert alert-danger animate__animated animate__fadeIn" style={{display: showError ? '' : 'none'}}> 
            There's no results for hero with <b>{q}</b> 
         </div>

          {
            heroes.map( hero => (
              <HeroCard key={ hero.id } { ...hero } />
            ))
          }
        </div>
      </div>
    </>
  )
}
