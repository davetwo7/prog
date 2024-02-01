import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <div className=" bg-zinc-900 p-5 font-satoshi font-medium text-3xl">
          Circle of Fifths
        </div>
        <div className="">
          <Image
            src="/test-wheel-circle-of-fifths.svg"
            alt="Description"
            width={500}
            height={500}
          />
        </div>
      </div>
    </main>
  );
}
