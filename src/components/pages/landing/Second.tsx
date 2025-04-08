import ArrowButton from "@/components/ui/ArrowButton";
import Button from "@/components/ui/Button";

export default function LandingSecond() {
  return (
    <div className="bg-[#F7F8FB] px-44 py-16 flex ">
      <div className="w-1/2 flex flex-col">
        <ArrowButton />
        <ArrowButton />
      </div>
      <div className="w-1/2 flex flex-col gap-5">
        <p>
          Des taux compétitifs en quelques clics. Quel que soit votre projet,
          nous vous accompagnons de manière bienveillante avec les meilleurs
          outils en ligne. Oubliez le parcours du combattant, à vous le
          financement professionnel à court terme. Chez Liqtrade nous vous
          aidons à évoluer à travers des solutions de financement simples,
          efficaces et compétitives en seulement quelques clics.
        </p>
        <p>TPE/PME, comptez sur nous pour vous aider à :</p>
        <ul className="list-disc list-inside text-[#9E9E9E] space-y-1">
          <li>Refinancer son entreprise</li>
          <li>Ouvrir une nouvelle agence</li>
          <li>Faire connaître son entreprise</li>
          <li>Se lancer à l&apos;international</li>
          <li>Digitaliser son entreprise</li>
          <li>Acquérir une entreprise</li>
          <li>Transformer son entreprise</li>
          <li>Financer des projets de développements durables</li>
        </ul>
        <div className="mt-10">
          <Button name="Vidéo de présentation" variant="secondary" />
        </div>
      </div>
    </div>
  );
}
