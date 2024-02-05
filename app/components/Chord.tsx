import React from "react";
import { sound } from "../utils/SoundEngine";
import { Midi, Chord as TonalChord, Note } from "tonal";
interface ChordProps {
  chord: string;
}

const Chord = ({ chord }: ChordProps) => {
  const octave = 3;
  const MIDI_OCTAVE = 12;

  const handleChordClick = () => {
    sound.volume(0.2);
    sound.stop();
    let chordData = TonalChord.get(chord);
    let noteNumber = 1;
    chordData.notes.map((note) => {
      let midiNote = Midi.toMidi(note + octave);
      if (midiNote) {
        let normalNote = midiNote;
        if (noteNumber !== 2) {
          let noteOctaveLower = midiNote - 12;
          sound.play(normalNote);
          sound.play(noteOctaveLower.toString());
        } else {
          sound.play(normalNote.toString());
        }
      }
      noteNumber++;
    });
    console.log(chordData);
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
