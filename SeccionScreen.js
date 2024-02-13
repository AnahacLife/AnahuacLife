import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const SeccionScreen = ({ route, navigation }) => {
  const { titulo } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.botonRegreso}>
          <Image source={require('./images/back_arrow.png')} style={styles.iconoRegreso} />
        </View>
      </TouchableOpacity>
      <Text style={styles.titulo}>{titulo}</Text>
      {/* Contenido específico para cada sección */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonRegreso: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#FD5900',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  iconoRegreso: {
    width: 30,
    height: 30,
    tintColor: '#FD5900',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default SeccionScreen;
