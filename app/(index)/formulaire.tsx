import { useState } from "react";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "@/components/common/typography/Text";
import { RadioButton } from "@/components/common/form/RadioButton";
import { Dropdown } from "@/components/common/form/Dropdown";
import { StatusBar } from "expo-status-bar";
import AlerteBandeau from "@/components/AlertBandeau";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
interface FormData {
  userType: "particulier" | "professionnel" | undefined;
  isOngoing: boolean | undefined;
  whenHappened: string | null;
  isDomesticAnimal: boolean | undefined;
  animalType: string | null;
  animalCount: string | null;
  isOwnAnimal: boolean | undefined;
  ownerType: string | null;
}

export default function FormulaireScreen() {
  const [formData, setFormData] = useState<FormData>({
    userType: undefined,
    isOngoing: undefined,
    whenHappened: null,
    isDomesticAnimal: undefined,
    animalType: null,
    animalCount: null,
    isOwnAnimal: undefined,
    ownerType: null,
  });

  const whenOptions = [
    { label: "Hier", value: "yesterday" },
    { label: "Plus de 2 jours", value: "moreThan2Days" },
    { label: "Plusieurs mois", value: "months" },
    { label: "Plusieurs années", value: "years" },
    { label: "Depuis mon arrivée sur les lieux", value: "sinceMoved" },
  ];

  const animalCountOptions = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4 ou +", value: "4+" },
    { label: "Je ne sais pas", value: "unknown" },
  ];

  const handleSubmit = () => {
    console.log("Données du formulaire:", formData);
  };

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <StatusBar style='dark' />
      <ScrollView>
        <Text variant='title' className='text-center mb-6'>
          Formulaire de signalement
        </Text>
        <Card variant='elevated' padding='small'>
          <View className='space-y-6'>
            {/* Section 1 */}
            <View>
              <Text variant='subtitle' weight='bold' className='mb-4'>
                1 • Quelques précisions sur les faits et les animaux en cause
              </Text>

              <Text variant='body' className='mb-2' weight='bold'>
                Je souhaite signaler un animal maltraité en tant que :
              </Text>
              <RadioButton
                options={[
                  { label: "Je suis un particulier", value: "particulier" },
                  {
                    label: "Je suis un professionnel au contact des animaux",
                    value: "professionnel",
                  },
                ]}
                value={formData.userType}
                onChange={(value) =>
                  setFormData({ ...formData, userType: value })
                }
              />
            </View>

            {/* Faits en cours */}
            <View>
              <Text variant='body' className='mb-2' weight='bold'>
                Les faits sont-ils en train de se dérouler ?
              </Text>
              <RadioButton
                options={[
                  { label: "Oui", value: true },
                  { label: "Non", value: false },
                ]}
                value={formData.isOngoing}
                onChange={(value) =>
                  setFormData({ ...formData, isOngoing: value })
                }
              />

              {formData.isOngoing === true && <AlerteBandeau />}

              {formData.isOngoing === false && (
                <View className='mt-4'>
                  <Text variant='body' className='mb-2' weight='bold'>
                    Les faits datent de :
                  </Text>
                  <Dropdown
                    options={whenOptions}
                    value={formData.whenHappened}
                    onValueChange={(value) =>
                      setFormData({ ...formData, whenHappened: value })
                    }
                    placeholder='Sélectionnez une période'
                  />
                </View>
              )}
            </View>

            {/* Type d'animal */}
            <View>
              <Text variant='body' className='mb-2' weight='bold'>
                S'agit-il d'un animal domestique ou détenu en captivité ?
              </Text>
              <RadioButton
                options={[
                  { label: "Oui", value: true },
                  {
                    label: "Non (animaux libres, de la forêt et des campagnes)",
                    value: false,
                  },
                ]}
                value={formData.isDomesticAnimal}
                onChange={(value) =>
                  setFormData({ ...formData, isDomesticAnimal: value })
                }
              />
            </View>

            {formData.isDomesticAnimal && (
              <>
                <View>
                  <Text variant='body' className='mb-2' weight='bold'>
                    Quel animal est-il en cause :
                  </Text>
                  <Dropdown
                    options={[
                      { label: "Chien", value: "dog" },
                      { label: "Chat", value: "cat" },
                    ]}
                    value={formData.animalType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, animalType: value })
                    }
                    placeholder="Sélectionnez un type d'animal"
                  />
                </View>

                <View>
                  <Text variant='body' className='mb-2' weight='bold'>
                    Combien d'animaux sont en cause ?
                  </Text>
                  <Dropdown
                    options={animalCountOptions}
                    value={formData.animalCount}
                    onValueChange={(value) =>
                      setFormData({ ...formData, animalCount: value })
                    }
                    placeholder='Sélectionnez un nombre'
                  />
                </View>
              </>
            )}
            <View>
              <Text variant='body' className='mb-2' weight='bold'>
                S'agit-il de votre animal ?
              </Text>
              <RadioButton
                options={[
                  { label: "Oui", value: true },
                  { label: "Non", value: false },
                ]}
                value={formData.isOwnAnimal}
                onChange={(value) =>
                  setFormData({ ...formData, isOwnAnimal: value })
                }
              />
            </View>

            <View>
              <Text variant='body' className='mb-2' weight='bold'>
                L'animal appartient-il à un professionnel ou un particulier ?
              </Text>
              <Dropdown
                options={[
                  { label: "Particulier", value: "particular" },
                  { label: "Professionnel", value: "professional" },
                ]}
                value={formData.ownerType}
                onValueChange={(value) =>
                  setFormData({ ...formData, ownerType: value })
                }
                placeholder='Sélectionnez un type de propriétaire'
              />
            </View>

            <Button content='submit' onPress={handleSubmit} />
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
