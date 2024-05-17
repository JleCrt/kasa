import React from "react";
import './styles/app.css';
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import data from "./data/logements.json";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="home-div">
        <Banner />
        <div className="home-card-div">
          <ul>
            {data.map((acc) => {
              return (
                <li key={acc.id}>
                  <Link to={`/Accomodation/${acc.id}`}>
                    <Cards
                        url= {acc.cover}
                        title= {acc.title}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
