import React from "react";
import { Dropdown } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center fw-light mt-5">
        <div className="d-flex justify-content-center gap-5 ">
          <a className="text-decoration-none text-white " href="#">
            Informazioni
          </a>
          <a className="text-decoration-none text-white" href="#">
            Accessibilità
          </a>
        </div>
        <div className="d-flex justify-content-center">
          <a className="text-decoration-none text-white" href="#">
            Centro Assistenza
          </a>
        </div>
        <div>
          <Dropdown drop="up">
            <Dropdown.Toggle
              className="bg-transparent border-0"
              id="dropdown-basic"
            >
              Scegli un'opzione
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                Informativa sulla privacy
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                Contratto di licenza
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                Termini e condizioni delle pagine
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                Informativa sui cookie
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                Informativa sul copyright
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                Opzioni relative all'informativa sulla Privacy
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="d-flex justify-content-center">
          <p className="text-white m-0">Opzioni per annunci pubblicitari</p>
        </div>
        <div className="d-flex justify-content-center gap-3">
          <div className="d-flex justify-content-center">
            <div className="d-flex align-items-center">
              <a className="text-decoration-none text-white" href="#">
                Pubblicità
              </a>
            </div>

            <div>
              <Dropdown className="fw-light" drop="up">
                <Dropdown.Toggle
                  className="bg-transparent fw-light border-0"
                  id="dropdown-basic"
                >
                  Scegli un'opzione
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <h5 className="mb-0">Assumi su LinkedIn</h5>
                    <small className="lh-1">Trova, sottrai,assumi</small>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    <h5 className="mb-0">Vendi con LinkedIn</h5>
                    <small className="lh-1">
                      Sblocca nuove opportunita di vendita
                    </small>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    <h5 className="mb-0">Offerta di lavoro gratuita</h5>
                    <small className="lh-1">Trova, sottrai,assumi</small>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    <h5 className="mb-0">Fai pubblicità con LinkedIn</h5>
                    <small className="lh-1">
                      {" "}
                      Acquisisci clienti e fai crescere la tua azienda
                    </small>
                  </Dropdown.Item>

                  <Dropdown.Item href="#/action-1">
                    <h5 className="mb-0">Inizia con Premium</h5>
                    <small className="lh-1">Amplia e sfrutta la tua rete</small>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    <h5 className="mb-0">Impara con LinkedIn</h5>
                    <small className="lh-1">
                      Corsi per formare i tuoi dipendenti
                    </small>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center gap-5">
          <a className="text-decoration-none text-white" href="#">
            Scarica LinkedIn
          </a>
          <a className="text-decoration-none text-white" href="">
            Altro
          </a>
        </div>
        <div className="d-flex gap-2 align-items-center justify-content-center mt-2">
          <img
            className="mb-3"
            src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr"
            alt="LinkedInd"
          />

          <p className="">LinkedIn Corporation © 2025</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
