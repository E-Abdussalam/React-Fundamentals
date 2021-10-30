import React from "react";
import { Children } from "react";
import ReactDOM from "react-dom";
import "./index.css";
//statelless function component
// always return JSX

// setup vars
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth",
};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/71bROORU%2BnL._AC_UL200_SR200,200_.jpg",
  title: "The Christmas Pig",
  author: "J. K. Rowling",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          quibusdam sequi sit ducimus, ad facere nesciunt rerum soluta error!
          Dicta.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
      {props.children}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
