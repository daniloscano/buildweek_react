import React from "react";
import { Dot } from "lucide-react";
import "./News.css";

const NewsList = () => {
  return (
    <>
      <div className="d-flex flex-column">
        <h5 className="text-truncate">
          Inzio carriera: una bussola per cercare...
        </h5>
        <div className="d-flex">
          <p>5 giorni fa</p>
          <Dot />
          <p className="">561 lettori</p>
        </div>
        <h5 className="text-truncate">Per superare il problema dei neet</h5>
        <div className="d-flex">
          <p>3 giorni fa</p>
          <Dot />
          <p className="">310 lettori</p>
        </div>
        <h5 className="text-truncate">Unicredit collabora con Google Cloud</h5>
        <div className="d-flex">
          <p>2 giorni fa</p>
          <Dot />
          <p className="">346 lettori</p>
        </div>
        <h5 className="text-truncate">Disparita di genere oltre la pensione</h5>
        <div className="d-flex">
          <p>5 giorni fa</p>
          <Dot />
          <p className="">561 lettori</p>
        </div>
        <h5 className="text-truncate">
          La settimana degli internazionali di...
        </h5>
        <div className="d-flex">
          <p>5 giorni fa</p>
          <Dot />
          <p className="">561 lettori</p>
        </div>
        <h5>Il rompicapo di oggi</h5>
        <div className="d-flex  gap-3 align-items-center">
          <div className="d-flex ">
            <img
              className="img-tris mt-2 "
              src="https://c8.alamy.com/compit/d5wf3n/disegnate-a-mano-tic-tac-toe-gioco-isolato-su-bianco-d5wf3n.jpg"
              alt="tris-game"
            />
          </div>
          <div className="d-flex flex-column">
            <h6>Tris- un gioco vecchio ma che non stanca mai</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsList;
