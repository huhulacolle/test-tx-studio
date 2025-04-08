import { FaArrowRightLong } from "react-icons/fa6";

export default function ArrowButton() {
  return (
    <button className="flex items-center gap-3 py-2 px-6 text-liqtrade-green cursor-pointer relative">
      <p className="text-lg font-medium relative items-center gap-3 flex group">
        S&apos;inscrire
        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-liqtrade-green inline-block opacity-0 group-hover:opacity-100"></span>
        <FaArrowRightLong className="text-liqtrade-green" />
      </p>
    </button>
  );
}
