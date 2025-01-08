import { Image } from "expo-image";
import Button from "./common/Button";
import { Text, View } from "react-native";

export default function Signalement() {
  return (
    <View className='space-y-4 bg-[#ededed]'>
      <View className='space-y-2'>
        <Image
          source='https://3677.fr/wp-content/uploads/2024/05/3677-SOS-maltraitance-animale-IconeAnnuaire.svg'
          className='w-20 h-20 block'
          style={{ width: "20%", height: "20%" }} // On utilise style ici car className ne fonctionne pas toujours bien avec expo-image
        />
        <Text className='text-base'>
          Trouvez rapidement les bons interlocuteurs: commissariats,
          gendarmeries, associations, refuges, centres de soins, tribunaux,
          mairies ou DDPP.
        </Text>
        <Button content='Annuaire' />
      </View>
      <View className='space-y-2'>
        <Image
          source='https://3677.fr/wp-content/uploads/2024/05/3677-SOS-maltraitance-animale-IconeAnnuaire.svg'
          className='w-20 h-20'
        />
        <Text className='text-base'>
          Vous êtes témoin d'une maltraitance animale ? Remplissez notre
          formulaire de signalement et vous serez orienté.e vers les bons
          interlocuteurs.
        </Text>
        <Button content='Formulaire' />
      </View>
      <View className='space-y-2'>
        <Image
          source='https://3677.fr/wp-content/uploads/2024/05/3677-SOS-maltraitance-animale-IconeAnnuaire.svg'
          className='w-20 h-20'
        />
        <Text className='text-base'>
          Signalez sans perdre de temps une maltraitance animale au 3677. Un
          numéro d'écoute, de régulation et d'orientation. Ouvert 7/7, 365J/an,
          prix d'un appel local.
        </Text>
        <Button content='Appeler' />
      </View>
    </View>
  );
}
