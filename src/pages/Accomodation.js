import "../styles/pages/accomodation.css";
import { useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import dataAccomodation from "../data/logements.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";
import Error from "./Error";

const Accomodation = () => {
  // Récupération de l'id du logement
  const { id } = useParams();
  // Récupération des données en fonction de l'id
  const data = dataAccomodation.find((item) => item.id === id);
  if (!data) {
    return <Error />;
  } else {
    return (
        <>
        <Header />
      <div className="accomodation-div">
        <Slideshow images={data.pictures} />
        <div className="infos-container">
          <div className="accomodation">
            <div className="accomodation-header">
              <h1 className="accomodation-title">{data.title}</h1>
              <h2 className="accomodation-location">{data.location}</h2>
            </div>
          </div>
          <div className="accomodation-tags">
            <ul className="tags">
              {data.tags.map((tag, index) => (
                <li className="accomodation-tag" key={index}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="user">
            <div className="accomodation-host">
              <p>{data.host.name}</p>
              <img
                src={data.host.picture}
                alt={"photo de profil de " + data.host.name}
              />
            </div>
            <Rating rating={data.rating}/>
          </div>
          <div className="collapse-container">
            <div className="collapse-description">
              {/*Vérification de l'existence de dataAccomodation */}
              {dataAccomodation[0] && (
                <Collapse
                  state={{
                    title: "Description",
                    description: dataAccomodation[0].description,
                  }}
                />
              )}
            </div>
            <div className="collapse-equipment">
              {dataAccomodation[0] && (
                <Collapse
                  state={{
                    title: "Équipements",
                    equipments: dataAccomodation[0].equipments,
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </>
    );
  }
};

export default Accomodation;
