import React, { useState , useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ModalMapa({ titulo , color, backgroundColor, mostrarModal , alCerrar, display , textoBoton }){
  const [visible, setVisible] = useState(mostrarModal);

  useEffect(() => {
    setVisible(mostrarModal);
  }, [mostrarModal]);

  const cerrarModal = () => {
    setVisible(false);
    alCerrar();
  }

  return (
    <View style={[styles.modal, { opacity: visible ? 1 : 0 }]}>
      <TouchableOpacity activeOpacity={0.3} style={styles.modal_cerrar} onPress={cerrarModal}>
        <MaterialCommunityIcons name="close-thick" size={20} color="gray" />
      </TouchableOpacity>
      <Text style={[styles.title, { color }]}>{titulo}</Text>
      <Text style={styles.description}>No hay eventos que mostrar</Text>
      <TouchableOpacity /*onPress={onPress}*/ style={[styles.button, { backgroundColor }, { display }]}>
        <Text style={styles.buttonText}>{textoBoton}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 20,
        paddingBottom: 44,
        shadowColor: '#000',
        shadowOffset: { width: 7, height: 7 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5, // propiedad exclusiva de Android
        position: 'absolute',
        top: 60,
        left: 20,
        right: 20,
        zIndex: 10,
      },
      modal_cerrar: {
        alignSelf: 'flex-end', //alinea la X a la izquierda
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        // color: '#7522bd',
      },
      description: {
        fontSize: 14,
      },
      button: {
        borderRadius: 20,
        marginTop: 10,
        marginBottom: -28,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: '70%',
        alignSelf: 'center',
      },
      buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
        alignSelf: 'center',
      },
})