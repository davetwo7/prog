import Image from "next/image";
import CircleOfFifths from "./components/CircleOfFifths";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <div className="  p-5 font-satoshi font-medium text-3xl">
          Circle of Fifths
        </div>
        <div>Select a key:</div>
        <div className="flex justify-center mt-5">
          <CircleOfFifths />
          {/* <Image
            src="/circle-of-fifths.svg"
            alt="Description"
            width={500}
            height={500}
          /> */}
        </div>
      </div>
    </main>
  );
}
