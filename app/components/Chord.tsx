import React from "react";
import { sound } from "../utils/SoundEngine";
import { chordToSound } from "../utils/ChordToSound";
interface ChordProps {
  chord: string;
}

const Chord = ({ chord }: ChordProps) => {
  const handleChordClick = () => {
    sound.stop();
    chordToSound(chord);
  };

  return (
    <button
      onClick={handleChordClick}
      className="p-1 px-5 bg-neutral-800 font-satoshi font-medium rounded-md"
    >
      {chord}
    </button>
  );
};

export default Chord;
