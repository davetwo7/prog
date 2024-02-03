import React from "react";
import Chord from "./Chord";

export type KeyType =
  | "C"
  | "G"
  | "D"
  | "A"
  | "E"
  | "B"
  | "F#"
  | "Db"
  | "Ab"
  | "Eb"
  | "Bb"
  | "F";

interface KeyInformationProps {
  selectedKey: KeyType;
}

const KeyInformation = ({ selectedKey }: KeyInformationProps) => {
  const keyChordMap = {
    C: ["C", "Dm", "Em", "F", "G", "Am", "Bdim"],
    G: ["G", "Am", "Bm", "C", "D", "Em", "F#dim"],
    D: ["D", "Em", "F#m", "G", "A", "Bm", "C#dim"],
    A: ["A", "Bm", "C#m", "D", "E", "F#m", "G#dim"],
    E: ["E", "F#m", "G#m", "A", "B", "C#m", "D#dim"],
    B: ["B", "C#m", "D#m", "E", "F#", "G#m", "A#dim"],
    "F#": ["F#", "G#m", "A#m", "B", "C#", "D#m", "Fdim"],
    Db: ["Db", "Ebm", "Fm", "Gb", "Ab", "Bbm", "Cdim"],
    Ab: ["Ab", "Bbm", "Cm", "Db", "Eb", "Fm", "Gdim"],
    Eb: ["Eb", "Fm", "Gm", "Ab", "Bb", "Cm", "Ddim"],
    Bb: ["Bb", "Cm", "Dm", "Eb", "F", "Gm", "Adim"],
    F: ["F", "Gm", "Am", "Bb", "C", "Dm", "Edim"],
  };

  return (
    <div className="flex flex-col flex-grow items-center w-full m-24 p-6 bg-neutral-900 rounded-md">
      <div className="text-center text-5xl font-satoshi font-bold p-5">
        {selectedKey} Major
      </div>
      <p className="p-5">Chords in the key of {selectedKey} Major</p>
      <div className="flex p-5">
        {keyChordMap[selectedKey].map((chord, index) => (
          <Chord key={index} chord={chord} />
        ))}
      </div>
      <div className="flex-col">
        <div>Notes in the {selectedKey} scale</div>
        <div className="flex">
          <div>Play Button</div>
          <div>Notes in Scale</div>
        </div>
      </div>
    </div>
  );
};

export default KeyInformation;
