import React from "react";

interface ChordProps {
  chord: string;
}

const Chord = ({ chord }: ChordProps) => {
  return (
    <button className="border p-2 bg-neutral-800 font-satoshi font-medium rounded-md">
      {chord}
    </button>
  );
};

export default Chord;
