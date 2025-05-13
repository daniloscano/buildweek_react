import React from "react";
import "./NewsContainer.css";
import NewsList from "../newList/NewsList";
import { BadgeInfo } from "lucide-react";

const NewsContainer = () => {
  return (
    <>
      <div className="mt-3 text-white p-3 news-container">
        <div className="d-flex justify-content-between">
          <h3>LinkedIn Notizie</h3>
          <BadgeInfo />
        </div>

        <p>Storie principali</p>
        <NewsList />
      </div>
    </>
  );
};

export default NewsContainer;
