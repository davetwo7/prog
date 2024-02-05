"use client";
import { useState } from "react";
import CircleOfFifths from "./components/CircleOfFifths";
import Header from "./components/Header";
import KeyInformation from "./components/KeyInformation";
import { KeyType } from "./components/KeyInformation";

export default function Home() {
  const [selectedKey, setSelectedKey] = useState<KeyType>("C");
  return (
    <main className="">
      <Header />
      <div className="justify-center grid grid-cols-2 mx-20">
        <CircleOfFifths setSelectedKey={setSelectedKey} />
        <KeyInformation selectedKey={selectedKey} />
      </div>
    </main>
  );
}
