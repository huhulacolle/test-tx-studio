"use client";

export default function Button({
  onClick,
  name,
  variant = "primary",
}: {
  onClick?: () => void;
  name: string;
  variant?: "primary" | "secondary" | "outline",
  className?: string
}) {

  return (
    <button
      onClick={onClick}
      className={`cursor-pointer py-3 px-9 rounded-xl ${
        variant === "primary"
          ? "bg-liqtrade-green text-white"
          : variant == "secondary"
          ? "bg-black text-white"
          : variant === "outline"
          ? "border-2 border-liqtrade-green text-liqtrade-green"
          : ""
      }`}
    >
      {" "}
      {name}{" "}
    </button>
  );
}
