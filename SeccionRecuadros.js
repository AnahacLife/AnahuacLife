import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

// Importa todas las imágenes necesarias
import verticeImage from './images/grupos/vertice.png';
import accionImage from './images/grupos/accion.png';
import adefaImage from './images/grupos/adefa.png';
import fesalImage from './images/grupos/fesal.png';
import asuaImage from './images/grupos/asua.png';
import pastoralImage from './images/grupos/pastoral.png';
import culmenImage from './images/grupos/culmen.png';
import espacioculturalImage from './images/grupos/espaciocultural.png';
import leonesImage from './images/grupos/leones.png';

const SeccionRecuadros = ({ navigation }) => {
  const secciones = [
    { nombre: 'vertice', imagen: verticeImage },
    { nombre: 'accion', imagen: accionImage },
    { nombre: 'adefa', imagen: adefaImage },
    { nombre: 'fesal', imagen: fesalImage },
    { nombre: 'asua', imagen: asuaImage },
    { nombre: 'pastoral', imagen: pastoralImage },
    { nombre: 'culmen', imagen: culmenImage },
    { nombre: 'espaciocultural', imagen: espacioculturalImage },
    { nombre: 'leones', imagen: leonesImage },
  ];

  const handlePress = (seccion) => {
    // Aquí puedes navegar a la nueva ventana con el título de la sección
    navigation.navigate('NuevaVentana', { titulo: seccion.nombre });
  };

  return (
    <View style={styles.container}>
      {secciones.map((seccion, index) => (
        <TouchableOpacity key={index} style={styles.icono} onPress={() => handlePress(seccion)}>
          <Image source={seccion.imagen} style={styles.imagen} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  icono: {
    width: 100,
    height: 100,
    margin: 15,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FD5900',
    elevation: 4,
    shadowColor: '#000000',
    overflow: 'hidden',
  },
  imagen: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default SeccionRecuadros;
