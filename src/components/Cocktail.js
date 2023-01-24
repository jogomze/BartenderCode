import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({image, name, id, info, glass}) => {
  return (
    <article className="drink">
    <div className="drink-img">
      <img src={image} alt={name}></img>
    </div>
    <div className="drink-footer">
      <h3>{name}</h3>
      <h4>{glass}</h4>
      <p>{info}</p>
      <Link to={`/cocktail/${id}`} className="btn btn-primary">details</Link>
    </div>
    </article>
  )
}

export default Cocktail
