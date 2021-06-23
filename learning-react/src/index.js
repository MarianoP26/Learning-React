import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

// setup vars
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/71ytOPkFQrL._AC_UL200_SR200,200_.jpg',
  title: 'Como cocinar pollo',
  author: 'Karlos Arguiniano',
  price: 7.50,
}
const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg',
  title: 'Si los animales se dieran el beso de las buenas noches',
  author: 'Ann Whitford Paul',
  price: 10.00,
}

//The function component can be either an arrow function or a normal one
//Function name MUST start with caps in order to be recognized as a React Component 
//The return MUST be a jsx element
function BookList() {
  return (
  <section className="booklist">
    <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} price={firstBook.price}/>
    <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} price={secondBook.price}/>
  </section>
  )
}

const Book = (props) => {
  return (
  <article className="book">
    <img src={props.img} alt="" />
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
    <h3>{props.price}€</h3>
  </article>
  )
}

//ReactDom has the render() function which takes 2 parameters (jsx to render, where to render)
const root = document.getElementById('root');
ReactDom.render(<BookList />, root); 