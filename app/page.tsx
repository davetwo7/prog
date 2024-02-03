"use client";
import { useState } from "react";
import CircleOfFifths from "./components/CircleOfFifths";
import Header from "./components/Header";
import KeyInformation from "./components/KeyInformation";
import { KeyType } from "./components/KeyInformation";

export default function Home() {
  const [selectedKey, setSelectedKey] = useState<KeyType>("C");
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex justify-center">
        <CircleOfFifths setSelectedKey={setSelectedKey} />
        <KeyInformation selectedKey={selectedKey} />
      </div>
    </main>
  );
}
