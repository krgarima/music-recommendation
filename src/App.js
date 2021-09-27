import React, { useState } from "react";
import "./styles.css";

var music = {
  Pop: [
    { name: "'Stay' by The Kid LAROI & Justin Bieber", rating: "4/5" },
    { name: "'Good 4 U' by Olivia Rodrigo", rating: "3/5" },
    { name: "'Montero (Call Me By Your Name)' by Lil Nas X", rating: "4/5" }
  ],

  Rock: [
    { name: "'Heat' Waves by Glass Animals", rating: "3/5" },
    { name: "'Happier Than Ever' by Billie Eilish", rating: "3.5/5" },
    { name: "'Without You' by The Kid LAROI", rating: "3.7/5" }
  ],

  HipHop: [
    { name: "'Hurricane' by Kanye West", rating: "4/5" },
    { name: "'Industry Baby' by Lil Nas X & Jack Harlow", rating: " 3/5" },
    { name: "'Rumors' by Lizzo Featuring Cardi B", rating: "4/5" }
  ]
};

export default function App() {
  const [genre, setgenre] = useState("Pop");

  function genreClickHandler(genre) {
    setgenre(genre);
  }

  return (
    <div className="App">
      <h1
        style={{
          fontSize: "2.5rem",
          backgroundColor: "#134E4A",
          color: "white"
        }}
      >
        <strong>Music</strong>
      </h1>

      {Object.keys(music).map((genre) => (
        <button
          onClick={() => genreClickHandler(genre)}
          style={{
            fontSize: "1.8rem",
            padding: "0.5rem 2rem",
            margin: "1rem",
            cursor: "pointer",
            backgroundColor: "black",
            borderRadius: "1.5rem",
            color: "white"
          }}
          key={genre}
        >
          {genre}{" "}
        </button>
      ))}

      <h2 style={{ fontSize: "1.8rem", color: "#0D9488" }}>Songs:</h2>
      <ul style={{ display: "block", backgroundColor: "#F0FDFA" }}>
        {music[genre].map((music) => (
          <li key={music.name}>
            <div
              style={{
                color: "dark grey",
                fontSize: "1.5rem",
                padding: "1.5rem 1rem"
              }}
            >
              {" "}
              {music.name}{" "}
            </div>
            <div style={{ color: "green" }}> Rating: {music.rating} </div>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
