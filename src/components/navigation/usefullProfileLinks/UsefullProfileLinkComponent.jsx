import React from "react";
import { Link } from "react-router-dom";
import { Bookmark, Users, Mails, Calendar } from "lucide-react";

import "./UsefullProfileLinkComponent.css";

const UsefullProfileLinkComponent = () => {
  return (
    <>
      <div className=" d-flex flex-column container-custom px-3 gap-2">
        <div className="d-flex justify-content-start">
          <Link to={"#"} className="text-decoration-none text-black">
            <Bookmark /> Elementi salvati
          </Link>
        </div>
        <div className="d-flex justify-content-start">
          <Link to={"#"} className="text-decoration-none text-black">
            <Users /> Gruppi
          </Link>
        </div>
        <div className="d-flex justify-content-start">
          <Link to={"#"} className="text-decoration-none text-black ">
            <Mails /> Newsletter
          </Link>
        </div>
        <div className="d-flex justify-content-start">
          <Link to={"#"} className="text-decoration-none text-black">
            <Calendar />
            Eventi
          </Link>
        </div>
      </div>
    </>
  );
};

export default UsefullProfileLinkComponent;
