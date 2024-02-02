import CircleOfFifths from "./components/CircleOfFifths";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen flex-grow">
      <div className="  p-5 font-satoshi font-medium text-3xl">
        Circle of Fifths
      </div>
      <div className="text-center mt-5 font-satoshi font-bold text-3xl">
        Select a key:
      </div>
      <div className="flex-grow flex justify-center">
        <CircleOfFifths />
      </div>
    </main>
  );
}
