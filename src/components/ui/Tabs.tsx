"use client";

export default function Tabs({
  name,
  funct,
  selected,
  green = false,
}: {
  name: string[];
  funct: (screen: number) => void;
  selected: number;
  green?: boolean;
}) {
  return (
    <div className="flex items-center">
      {name.map((n, i) => (
        <button
          key={i}
          onClick={() => funct(i)}
          className={`md:h-12 md:w-48 md:text-base h-8 w-30 text-sm rounded-sm cursor-pointer ${
            selected == i
              ? green ? "bg-liqtrade-green text-white" : "bg-[#D0D4F8] text-liqtrade-blue"
              : "bg-white text-[#9E9E9E]"
          }`}
        >
          {n}
        </button>
      ))}
    </div>
  );
}
