
import React, { useState } from "react";

const Jumbotron = () => {
    const [showModal, setShowModal] = useState(false);
    const [randomCocktail, setRandomCocktail] = useState(null);

    const handleButtonClick = () => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(response => response.json())
        .then(data => {
            setRandomCocktail(data.drinks[0]);
            setShowModal(true);
        })
        .catch(error => console.error(error));
    }

    return (
        <>
            <section className= 'jumbotron'>
                <div className="container-button-random-cocktail ">
                    <button className="btn-secondary" onClick={handleButtonClick}>Generate Random Cocktail</button>
                </div>
                    {showModal && (
                        <div className="card" >
                                <div className="card-content">
                                    <div className="card-header">
                                        <h5 className="card-title">{randomCocktail.strDrink}</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}>
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                        <div className="card-body">
                                            <img src={randomCocktail.strDrinkThumb} alt={randomCocktail.strDrink} />
                                            <p>{randomCocktail.strInstructions}</p>
                                            <p>Ingredients:</p>
                                            <ul>
                                                {Object.keys(randomCocktail)
                                                .filter(key => key.startsWith("strIngredient") && randomCocktail[key])
                                                .map((key, index) => <li key={index}>{randomCocktail[key]}</li>)}
                                            </ul>
                                        </div>
                                            <div className="card-footer">
                                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                                            </div>
                                        </div>
                                    <div/>
                                </div>
                        )}
                    <div/>       
            </section>
        </>   
        );
    };


export default Jumbotron;