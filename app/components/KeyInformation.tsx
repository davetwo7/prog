import React, { useEffect } from "react";
import Chord from "./Chord";
import { Key } from "tonal";

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
  let key = Key.majorKey(selectedKey);
  // useEffect(() => {
  //   console.log(key);
  // }, [key]);
  return (
    <div className="flex-initial self-center flex-col items-center p-6 bg-neutral-900 rounded-md">
      <div className="text-center text-5xl font-satoshi font-bold p-5">
        {selectedKey} Major
      </div>
      <p className="p-5 text-center font-satoshi font-medium text-2xl">
        Chords in the key of {selectedKey} Major
      </p>
      <div className="flex p-5 justify-between">
        {key.triads.map((chord, index) => (
          <Chord key={index} chord={chord} />
        ))}
      </div>
      <div className="flex-col"></div>
    </div>
  );
};

export default KeyInformation;
