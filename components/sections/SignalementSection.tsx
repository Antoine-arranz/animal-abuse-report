import { View } from "react-native";
import SignalementCard from "@/components/SignalementCard";
import { HELPLINE_NUMBER } from "@/utils/constants";
import { useNavigation } from "@/hooks/useNavigation";

const signalements = [
  {
    imageSource:
      "https://3677.fr/wp-content/uploads/2024/05/3677-SOS-maltraitance-animale-IconeAnnuaire.svg",
    title: "Trouver de l'aide près de chez vous?",
    description:
      "Trouvez rapidement les bons interlocuteurs: commissariats, gendarmeries, associations, refuges, centres de soins, tribunaux, mairies ou DDPP.",
    buttonText: "Annuaire",
    icon: "map-pin" as const,
    redirect: "./annuaire" as const,
  },
  {
    imageSource:
      "https://3677.fr/wp-content/uploads/2024/05/3677-SOS-maltraitance-animale-IconeFormulaire.svg",
    title: "Vous souhaitez signaler en ligne ?",
    description:
      "Vous êtes témoin d'une maltraitance animale ? Remplissez notre formulaire de signalement et vous serez orienté.e vers les bons interlocuteurs.",
    buttonText: "Formulaire",
    icon: "wpforms" as const,
    redirect: "./formulaire" as const,
  },
  {
    imageSource:
      "https://3677.fr/wp-content/uploads/2024/05/3677-SOS-maltraitance-animale-IconeAppeler.svg",
    title: `Signalez sans perdre de temps !`,
    description: `Signalez sans perdre de temps une maltraitance animale au ${HELPLINE_NUMBER}. Un numéro d'écoute, de régulation et d'orientation. Ouvert 7/7, 365J/an, prix d'un appel local.`,
    buttonText: "Appeler",
    icon: "phone" as const,
    redirect: "./Appeler" as const,
  },
] as const;

export default function SignalementSection() {
  const { navigateTo } = useNavigation();
  return (
    <View className=" bg-secondary-gray">
      {signalements.map((signalement, index) => (
        <SignalementCard
          key={index}
          {...signalement}
          onPress={() =>navigateTo(signalement.redirect)}
        />
      ))}
    </View>
  );
}
