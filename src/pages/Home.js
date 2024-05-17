import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Banner from "../components/Banner";
//import Card from "../components/card";
import data from "../data/logements.json";

const Home = () => {
  return (
    <div className="home-div">
      <Banner />
      <div className="home-card-div">
        <ul>
          {data.map((acc) => {
            return (
              <li key={acc.id}>
                <Link to={`/Accomodation/${acc.id}`}>
                  {/*<Card
                    props={{
                      url: acc.cover,
                      title: acc.title,
                    }}
                />*/}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Home;
