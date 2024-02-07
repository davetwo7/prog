import { sound } from "./SoundEngine";
import { Chord, Midi } from "tonal";

const octave = 3;
const MIDI_OCTAVE = 12;

export const chordToSound = (chord: string) => {
  let chordData = Chord.get(chord);
  let noteNumber = 1;
  chordData.notes.map((note: string) => {
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
};
