import ArrowButton from "@/components/ui/ArrowButton";
import Button from "@/components/ui/Button";

export default function LandingFirst() {
  return (
    <div className="md:bg-[url(@/assets/images/phone.png)] bg-none bg-no-repeat bg-right h-screen flex items-center">
      <div className="mx-28 flex flex-col gap-20">
        <div>
          <div>
            <p className="text-sm text-[#222D7C] font-bold">
              FINANCEMENT PROFESSIONNEL À COURT TERME.
            </p>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Notre intérêt, <br /> c&apos;est le vôtre.
            </h1>
          </div>
          <p className="mt-4 text-lg text-gray-600">
            Simple, efficace et rapide. Profitez du service Liqtrade sans
            garantie personnelle.
          </p>
        </div>
        <div className="mt-6 flex gap-4 justify-center">
          <div>
            <Button name="Se connecter" />
          </div>
          <div>
            <ArrowButton />
          </div>
        </div>
      </div>
    </div>
  );
}
