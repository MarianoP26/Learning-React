import React from 'react'

const Book = (props) => {
    const { img, title, author, price } = props;
    const clickHandler = (e) =>{
        console.log(e.target);
    }
    const complexExample = (author) => {
        console.log(author);
    }
    return (
    //When passing in parameters to eventhandlers, its a MUST to convert
    //the reference to an arrow function instead
    <article className="book" onMouseOver={()=>{
        console.log(title);
    }}>
        <img src={img} alt="" />
        <h1 onClick={()=> console.log(title)}>{title}</h1>
        <h4>{author}</h4>
        <h3>{price}€</h3>
        <button type="button" onClick={clickHandler}>boton</button>
        <button type="button" onClick={() => complexExample(author)}>Complexer</button>
    </article>
    );
};

//export default lets you change the variable name of the exporting component
export default Book;
