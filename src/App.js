// src/App.js
import React, { useState, useEffect } from "react";
import "./App.css";

const drumPads = [
  {
    key: "Q",
    id: "Heater-1",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    key: "W",
    id: "Heater-2",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    key: "E",
    id: "Heater-3",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    key: "A",
    id: "Heater-4",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    key: "S",
    id: "Clap",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    key: "D",
    id: "Open-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    key: "Z",
    id: "Kick-n'-Hat",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    key: "X",
    id: "Kick",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    key: "C",
    id: "Closed-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const App = () => {
  const [display, setDisplay] = useState("");

  const handleKeyPress = (e) => {
    const pad = drumPads.find((p) => p.key === e.key.toUpperCase());
    if (pad) {
      document.getElementById(pad.key).play();
      setDisplay(pad.id);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleClick = (id, key) => {
    document.getElementById(key).play();
    setDisplay(id);
  };

  return (
    <>
      <div id="drum-machine">
        <h1>Drum Machine</h1>
      </div>
      <br />
      <div id="drum-machine">
        <Display display={display} />
        <div id="pads">
          {drumPads.map((pad) => (
            <DrumPad
              key={pad.key}
              id={pad.id}
              text={pad.key}
              src={pad.src}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const DrumPad = ({ id, text, src, handleClick }) => {
  return (
    <div className="drum-pad" id={id} onClick={() => handleClick(id, text)}>
      {text}
      <audio className="clip" id={text} src={src}></audio>
    </div>
  );
};

const Display = ({ display }) => {
  return <div id="display">{display}</div>;
};

export default App;
