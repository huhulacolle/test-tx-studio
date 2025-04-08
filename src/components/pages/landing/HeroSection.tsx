import ArrowButton from "@/components/ui/ArrowButton";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <div className="md:bg-[url(/phone.png)] bg-none bg-no-repeat bg-right h-screen flex items-center">
      <div className="md:ml-28 flex flex-col gap-20 px-4">
        <div>
          <p className="md:text-sm text-xs text-[#222D7C] font-bold">
            FINANCEMENT PROFESSIONNEL À COURT TERME.
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Notre intérêt, <br /> c&apos;est le vôtre.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Simple, efficace et rapide. Profitez du service Liqtrade sans
            garantie personnelle.
          </p>
        </div>
        <div className="mt-6 flex gap-4 justify-center">
          <Button name="Se connecter" />
          <ArrowButton />
        </div>
      </div>
    </div>
  );
}
