import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import {useGlobalContext} from "../context";

const CocktailList = () => {
  const {cocktails, loading}=useGlobalContext();

  if(loading) {
    return <Loading></Loading>
  }

  if(cocktails.length === 0) {
    return <h2 className="section-title">No cocktails matched your search criteria.</h2>
  }

  return (
    <section className="cocktail-section">
      <h2 className="section-title">Cocktails list</h2>
      <div className="cocktails-center">
          {cocktails.map((item) => {
            return <Cocktail key={item.id} {...item}></Cocktail>
          })}
      </div>
    </section>
  )
}

export default CocktailList
