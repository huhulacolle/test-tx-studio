import { CiCircleQuestion, CiClock2, CiDollar } from "react-icons/ci";
import { IoCheckmarkSharp } from "react-icons/io5";

export default function Card({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: "ok" | "dollar" | "chrono" | "interrogation";
}) {
  const getIcon = () => {
    const className = "size-12 rounded-xl p-2";

    switch (icon) {
      case "ok":
        return (
          <IoCheckmarkSharp
            className={`bg-[#2ECF8134] fill-[#2ECF81] ${className}`}
          />
        );
      case "chrono":
        return (
          <CiClock2 
            className={`bg-[#2EB6CF4B] fill-[#2EB6CF] ${className}`}
          />
        );
      case "interrogation":
        return (
          <CiCircleQuestion 
            className={`bg-[#EB88264B] fill-[#EB8826] ${className}`}
          />
        );
      case "dollar":
        return (
          <CiDollar
            className={`bg-[#D0D4F84B] fill-[#BCC0E5] ${className}`}
          />
        );
    }
  };

  return (
    <div className="flex flex-col shadow-md p-6 rounded-xl gap-6">
      {getIcon()}
      <div className="flex flex-col gap-3.5">
        <p className="font-bold"> {title} </p>
        <p className="text-[#9E9E9E]">{description}</p>
      </div>
    </div>
  );
}
