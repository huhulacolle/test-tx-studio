"use client";

export default function Button({
  onClick,
  name,
  variant = "primary",
}: {
  onClick?: () => void;
  name: string;
  variant?: "primary" | "secondary" | "tertiary" | "outline";
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer py-3 px-9 ${
        variant === "primary"
          ? "bg-liqtrade-green text-white rounded-xl"
          : variant == "secondary"
          ? "bg-black text-white rounded-xl"
          : variant == "tertiary"
          ? "bg-liqtrade-blue font-bold text-white rounded-sm"
          : variant === "outline"
          ? "border-2 border-liqtrade-green text-liqtrade-green rounded-xl"
          : ""
      }`}
    >
      {" "}
      {name}{" "}
    </button>
  );
}
