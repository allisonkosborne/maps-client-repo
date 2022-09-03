import { useEffect, useState } from "react";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Creepster&display=swap"
        rel="stylesheet"
      ></link>
      <div>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Creepster&display=swap';
        </style>
        <div className="home-page">
          {/* <img src={"/image1.jpg"} alt="Flowers" /> */}
          <h1 className="welcome">MAPS</h1>
          <h2 className="welcoming-saying">
            Who have you seen [creeping,crawling,flying] around your
            neighborhood?
          </h2>
        </div>
        <p>{/* <PropsAndState yourName={users.name} /> */}</p>

        <div className="first-paragraph">
          <small>
            {/* "Seeds are everywhere yet nobody thinks of them, tiny bundles
            waiting to be opened. Most any seed is small enough to hide in a
            locket, and some are so small they get latched between two teeth.
            They are on our forks, between our cracks of sidewalks and
            cobblestones of streets, under trees, on trees, in the produce
            section of the supermarket. They are in the wind, rolling along the
            desert, in our hair, in the fur of animals, in our dogs' feet." -
            Janisse Ray */}
          </small>
        </div>

        {/* <div className="second-paragraph">
        Now is not the time to be silent. To remain stagnant. Now is the time to
        take our health, the health of our communities back into our sOWN hands.
        Our future, the future of our food, a sustenance that we each partake in
        each and every day is in danger and it is up to us to change that. With
        each seed sown, a future is forseen. A hope is dug. And a life is
        changed.
      </div> */}
      </div>
    </>
  );
};
