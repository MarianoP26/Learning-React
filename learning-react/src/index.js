//Node modules
import React from 'react';
import ReactDom from 'react-dom';

//Own modules
import {books} from './books';
import Book from './Book';

// CSS
import './index.css';

//The function component can be either an arrow function or a normal one
//Function name MUST start with caps in order to be recognized as a React Component 
//The return MUST be a jsx element
function BookList() {
  return (
  <section className="booklist">
    {books.map((book)=>{
      return (
        <Book key={book.id} {...book}></Book>
      );
    })}
  </section>
  )
}

//ReactDom has the render() function which takes 2 parameters (jsx to render, where to render)
const root = document.getElementById('root');
ReactDom.render(<BookList />, root); 