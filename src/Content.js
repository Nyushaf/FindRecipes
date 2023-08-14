const Content = ({setIsOpen, ingredients}) => {
    return(
        <div className="modal_content">
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key = {index}>{ingredient}</li>
                ))}
            </ul>
            <button className="btn" onClick = {() => setIsOpen(false)}>Close modal</button>
        </div>
    )
}
export default Content;