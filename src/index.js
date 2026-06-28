import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "../focaccia.jfif",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato, mozarella",
    price: 10,
    photoName: "../funghi.jfif",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "../spinaci.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "../funghi.jfif",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "../salamino.jfif",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, arangula, and burrata cheese",
    price: 18,
    photoName: "../prosciutto.jfif",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Jose Pizza Rapida</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <div>
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </div>
    </main>
  );
}

function Footer() {
  // const hour = new Date().getHours();
  // const openHour = 12;
  // const closeHour = 22;

  // if (hour >= openHour && hour <= closeHour) alert("we´re currently open");
  // else alert("Sorry we're closed");

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're currently open
    </footer>
  );
}

function Pizza(props) {
  console.log(props);

  return (
    <div className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
