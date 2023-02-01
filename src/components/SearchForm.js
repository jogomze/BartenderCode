import React from 'react'
import {useGlobalContext} from "../context";

const SearchForm = () => {
  const{setSearchTerm}=useGlobalContext();  //invoke every time the user types in input 
  const searchValue = React.useRef("");

  function searchCocktail () {
    let result =searchValue.current.value;
    setSearchTerm(result);
  }

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
            <h2><label htmlFor="name">search your favorite cocktail</label></h2>
            <input type="text" id="name" ref={searchValue} onChange={searchCocktail}></input>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
