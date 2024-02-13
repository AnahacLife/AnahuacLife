import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function MenuPrincipal() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePress = (image) => {
    // Cambiar la imagen seleccionada al tocarla
    setSelectedImage(image);
  };

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => handleImagePress('horario')}>
          <Image
            source={selectedImage === 'horario' ? require('../images/horario_selected.png') : require('../images/horario.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImagePress('directorio')}>
          <Image
            source={selectedImage === 'directorio' ? require('../images/directorio_selected.png') : require('../images/directorio.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImagePress('mapa')}>
          <Image
            source={selectedImage === 'mapa' ? require('../images/mapa_selected.png') : require('../images/mapa.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImagePress('comida')}>
          <Image
            source={selectedImage === 'comida' ? require('../images/comida_selected.png') : require('../images/comida.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImagePress('eventos')}>
          <Image
            source={selectedImage === 'eventos' ? require('../images/eventos_selected.png') : require('../images/eventos.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: 80,
    backgroundColor: '#FD5900',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  image: {
    width: 65,
    height: 65,
  },
});
