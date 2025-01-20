import { View } from "react-native";
import Card from "./common/Card";

export default function Signalement() {
  return (
    <View className="space-y-4 bg-[#ededed] mb-4">
      <Card
        imageSource="https://3677.fr/wp-content/uploads/2024/05/3677-SOS-maltraitance-animale-IconeAnnuaire.svg"
        title="Trouver de l'aide près de chez vous?"
        description="Trouvez rapidement les bons interlocuteurs: commissariats, gendarmeries, associations, refuges, centres de soins, tribunaux, mairies ou DDPP."
        buttonText="Annuaire"
        icon='map-pin'
      />
      <Card
        imageSource="https://3677.fr/wp-content/uploads/2024/05/3677-SOS-maltraitance-animale-IconeFormulaire.svg"
        title="Vous souhaitez signaler en ligne ?"
        description="Vous êtes témoin d'une maltraitance animale ? Remplissez notre formulaire de signalement et vous serez orienté.e vers les bons interlocuteurs."
        buttonText="Formulaire"
        icon='wpforms'
      />
      <Card
        imageSource="https://3677.fr/wp-content/uploads/2024/05/3677-SOS-maltraitance-animale-IconeAppeler.svg"
        title="Signalez sans perdre de temps !"
        description="Signalez sans perdre de temps une maltraitance animale au 3677. Un numéro d'écoute, de régulation et d'orientation. Ouvert 7/7, 365J/an, prix d'un appel local."
        buttonText="Appeler"
        icon='phone'
      />
    </View>
  );
}
