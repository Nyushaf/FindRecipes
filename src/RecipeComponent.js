import { useState } from "react";
import Modal from "./Modal";
import Content from "./Content";

function RecipeComponent({label, image, calories, ingredients}) {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="recipeCard">
            <div className="container">
                <h2>{label}</h2>
            </div>
            <div className="container">
                <img src={image} alt="food" />
            </div>
            <div className="container">
                <p>{Math.round(calories)} calories</p>
            </div>
            <div className="container">
                <button className="btn" onClick = {() => setIsOpen(true)}>Show ingredients</button>
            </div>
            {isOpen && 
            <Modal 
            setIsOpen = {setIsOpen}
            ingredients = {ingredients}>
                <Content 
                setIsOpen = {setIsOpen}
                ingredients = {ingredients} />
            </Modal>
            }
            
        </div>
    )
}
export default RecipeComponent;