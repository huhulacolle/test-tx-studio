import arrow from "@/assets/images/right-arrow-svgrepo-com.svg";
import Image from "next/image";

export default function ArrowButton() {
  return (
    <button className="flex items-center gap-5 py-3 px-9 text-liqtrade-green cursor-pointer relative">
      <p className="relative after:content-[''] after:block after:h-[2px] after:bg-liqtrade-green after:absolute after:bottom-[-2px] after:left-0 after:right-0">
        S&apos;inscrire
      </p>
      <Image src={arrow} alt="" className="size-7 fill-liqtrade-green" />
    </button>
  );
}
