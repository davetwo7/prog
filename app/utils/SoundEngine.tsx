import { Howl, Howler } from "howler";

export const sound = new Howl({
  src: ["pianosprite2.mp3"],
  onload() {
    soundEngine();
  },
  onloaderror(error, message) {
    console.log("Error: ", error, message);
  },
});

export const soundEngine = () => {
  let lengthOfNote = 2400;
  let timeIndex = 0;
  for (let i = 24; i <= 96; i++) {
    sound["_sprite"][i] = [timeIndex, lengthOfNote];
    timeIndex += lengthOfNote;
  }
  sound.volume(0.25);
};
