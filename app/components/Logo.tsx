import { Image } from 'expo-image';
import React from 'react';
import { View, StyleSheet } from 'react-native';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image source='https://3677.fr/wp-content/uploads/2024/04/3677-SOS-maltraitance-animale-LogoFull.svg' style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0, // Positionnement en haut à gauche
    paddingLeft: 5, // Marges pour éviter que le logo soit collé au bord
    zIndex: 1000, // Assurez-vous que le logo est au-dessus des autres éléments
    backgroundColor: 'transparent', // Transparent pour s'adapter à la page
  },
  logo: {
    width: 80,
    height: 80, // Ajustez la taille selon vos besoins
    resizeMode: 'contain',
  },
});

export default Logo;