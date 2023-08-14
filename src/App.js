
import { useEffect, useState } from 'react';
import './App.css';
import video from './meal.mp4';
import RecipeComponent from './RecipeComponent';


function App() {

  const [myRecipe, setMyRecipe] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("salmon");
  const [mySearch, setMySearch] = useState("");

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=bd9168a6&app_key=%207f49185960b0639d86adb397c74bdca0`);
      const data = await response.json();
      setMyRecipe(data.hits);
    }
    getRecipes()
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }
  return (
    <div className="App">
      <div className='container'>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4"/>
        </video>
        <h1>Find a Recipe</h1>
      </div>
      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' placeholder='Enter indredient...' onChange={myRecipeSearch}/>
        </form>
      </div>
      <div className='container'>
        <button onClick = {finalSearch}>Search</button>
      </div>
      <div className='recipesCont'>
        {myRecipe.map((element, index) => (
          <RecipeComponent key = {index}
          label = {element.recipe.label}
          image = {element.recipe.image}
          calories = {element.recipe.calories}
          ingredients = {element.recipe.ingredientLines}/>
        ))}
      </div>
    </div>
  );
}

export default App;
