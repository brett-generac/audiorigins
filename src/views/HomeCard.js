import React from "react";

const HomeView = () => {
  return (
    <>
      <div className="card-body">
        <h5 className="card-title">AudiOrigins</h5>
        <p className="card-text">
          Ever wonder where your favorite musicians are originally from? ...I do, knowing this is kind of an obession of
          mine.
        </p>
        <p className="card-text">
          Search for an artist (spelled correctly) to find out where they lived before the fame - and to find out if
          this information is as addictive to you as it is to me.
        </p>
      </div>
      <div className="card-body">
        <p className="card-text">
          I'm a web developer that's currently seeking clients and employment opportunities, click the link below to see
          what else I can do and to contact me.
        </p>
        <p className="card-text">-Brett</p>
        <a href="https://clockmakerbrett.tech" target="_blank" rel="noopener noreferrer" className="card-link">
          Checkout my website
        </a>
      </div>
    </>
  );
};

export default HomeView;