import Card from "@/components/ui/Card";

export default function LandingThird() {
  const card: {
    title: string;
    description: string;
    icon: "ok" | "dollar" | "chrono" | "interrogation";
  }[] = [
    {
      title: "Evaluation du profil de risque de votre client",
      description: `
            Plus de mauvaises surprises lors de la facturation de votre client. Chez
            Liqtrade, nous évaluons son risque débiteur afin de permettre la
            valorisation et l'acceptation rapide de votre facture. Notre approche se
            base sur le profil de risque de votre client et l'échéance de votre facture
            pour vous proposer le meilleur prix de cession de votre créance.
          `,
      icon: "ok",
    },
    {
      title: "Meilleur prix de cession de votre créance",
      description: `
            Nos algorithmes trouvent pour vous la meilleure offre de financement
            en termes de prix et de taux de commission. En moyenne, nos clients
            perçoivent jusqu'à 97% de la valeur nominale de leur facture.
          `,
      icon: "dollar",
    },
    {
      title: "Paiement en un temps record pour vos factures",
      description: `
              Après validation et financement de votre facture, votre paiement est
              transféré en seulement quelques minutes. Grâce à notre plateforme de
              paiement, bénéficiez de nouvelles fonctionnalités de paiement instantané
              vous permettant un virement rapide vers la Banque de votre choix.
          `,
      icon: "chrono",
    },
    {
      title: "Financez vos besoins de trésorerie en temps réel",
      description: `
              Faites une demande de financement en ligne via l'envoi électronique
              de facture et obtenez plus rapidement vos fonds via un traitement
              automatisé de vos demandes. Vos factures sont ainsi valorisées,
              validées automatiquement et financées sur notre plateforme
          `,
      icon: "interrogation",
    },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-2 gap-4 px-44 py-24">
        {card.map((c, i) => (
          <Card
            key={i}
            title={c.title}
            description={c.description}
            icon={c.icon}
          />
        ))}
      </div>
    </div>
  );
}
