
/*
import React from 'react';
import { View } from 'react-native';
import Mapa from './Mapa';


export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {}
      <Mapa />
      {}
    </View>
  );
}
//*/

///*
import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ScrollView, Text, StatusBar, Animated, Platform } from 'react-native';
import Constants from 'expo-constants';
import { SliderBox } from 'react-native-image-slider-box'; //yarn add megamaxs1234/react-native-image-slider-box (te amo megamax1234)
import { Ionicons } from '@expo/vector-icons';
import SeccionRecuadros from './SeccionRecuadros';
import Mapa from './Mapa';

const Menu = () => {
  const [selectedTab, setSelectedTab] = useState('eventos'); // Estado para rastrear la pestaña actual
  const [selectedImage, setSelectedImage] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const menuAnimation = useRef(new Animated.Value(0)).current;
  const overlayAnimation = useRef(new Animated.Value(0)).current;

  const handleTabPress = (tab) => { // Función para cambiar la pestaña actual
    setSelectedTab(tab);
  };

  const toggleMenu = () => {
    const newValue = !showMenu;
    setShowMenu(newValue);
    Animated.timing(overlayAnimation, {
      toValue: newValue ? 1 : 0,
      duration: 250,
      useNativeDriver: false,
    }).start(() => {
      if (newValue) {
        Animated.timing(menuAnimation, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }).start();
      } else {
        Animated.timing(menuAnimation, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }).start(() => {
          setShowMenu(false);
        });
      }
    });
  };
  
  const closeMenu = () => {
    Animated.timing(overlayAnimation, {
      toValue: 0,
      duration: 250,
      useNativeDriver: false,
    }).start(() => {
      setShowMenu(false);
    });
    Animated.timing(menuAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const menuTranslateX = menuAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-300, 0],
  });

  const overlayOpacity = overlayAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.5],
  });

  const images = [
    require('./images/eventos/evento1.png'),
    require('./images/eventos/evento2.png'),
    require('./images/eventos/evento3.png'),
  ]

  const ExpandableContainer = ({ title, imageSource }) => {
    const [expanded, setExpanded] = useState(false);
    const [rotation] = useState(new Animated.Value(0));
    const [containerHeight] = useState(new Animated.Value(100));
    const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

    const rotateArrow = () => {
      Animated.timing(rotation, {
        toValue: expanded ? 0 : 1,
        duration: 300,
        useNativeDriver: true
      }).start();
    };
  
    const toggleExpand = () => {
      setExpanded(!expanded);
      rotateArrow();
      Animated.timing(containerHeight, {
        toValue: expanded ? 100 : imageDimensions.height + 100, // Adjust height accordingly
        duration: 300,
        useNativeDriver: false
      }).start();
    };
  
    const spin = rotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg']
    });
  
    return (
      <Animated.View style={styles.container_eventos}>
        <TouchableOpacity style={styles.titleContainer_eventos} onPress={toggleExpand}>
          <Text style={styles.titleText_eventos}>{title}</Text>
          <View style={styles.arrowCircle}>
            <Animated.View style={{ transform: [{ rotate: spin }] }}>
              <Ionicons name="chevron-down-outline" size={24} style={styles.arrowIcon} />
            </Animated.View>
          </View>
        </TouchableOpacity>
        <Animated.View style={{ overflow: 'hidden' }}>
          {expanded && (
            <Image source={imageSource} style={{ flex: 1, width: '100%', height: 207, resizeMode: 'contain' }} />
          )}
        </Animated.View>
      </Animated.View>
    );
  };

  if (Platform.OS === 'android') {
    StatusBar.setTranslucent(true);
  }

  //StatusBar.setTranslucent(true); //Ajuste para Android

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" /> 
      <View style={{ flex: 1  }} >
              {}
              <Mapa style={{ flex: 1}}/>
              {}
      </View> 
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}> 
          <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
            <Image source={require('./images/boton_menu.png')} style={styles.menuIcon} /> 
          </TouchableOpacity> 
          {selectedTab === 'eventos' && ( // Mostrar la imagen del header solo en la pestaña de eventos
            <Image source={require('./images/header_eventos.png')} style={styles.headerImage} /> // Encabezado
          )}
        </View>
        <View style={styles.content}>
          {selectedTab === 'horario' && (
            // Contenido específico para la pestaña de horario
            <Text>Contenido del Horario</Text> 
          )} 
          {selectedTab === 'directorio' && (
            // Contenido específico para la pestaña de directorio (MAIK)
            <Text>Contenido del Directorio</Text> 
          )}
          {selectedTab === 'mapa' && (
            // Contenido específico para la pestaña de mapa  
            //<Text>Mapa</Text>   
            <Mapa style={{ flex: 1 }}/>                               
          )}
          {selectedTab === 'comida' && (
            // Contenido específico para la pestaña de comida
            <Text>Contenido de Comida</Text>
          )}
          {selectedTab === 'eventos' && (
            // Contenido específico para la pestaña de eventos
            <View>
              <SliderBox 
                images = {images} 
                dotStyle = {{height: 8, width: 8, borderRadius: 50}} 
                circleLoop autoplay={true} 
                autoplayInterval={4000} 
                disableOnPress
                firstItem={0}
                resizeMode={'cover'}
                paginationBoxVerticalPadding={15}
                paginationBoxStyle={{
                  position: 'absolute', 
                }}
                sliderBoxHeight={200}
              />
              <ExpandableContainer title="Actividades comunidad universitaria" imageSource={require('./images/contenedorcomunidad_eventos.png')} />
              <ExpandableContainer title="Actividades grupos de liderazgo" imageSource={require('./images/contenedorcomunidad_eventos.png')} />
              <View style={styles.divider} />
              <View style={styles.contenedor_titulo}>
                <Text style={styles.titulo}>Grupos Universitarios</Text>
              </View>
              <SeccionRecuadros/>{}
              <View style={styles.divider}/>
            </View>            
          )}
        </View>
      </ScrollView>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => handleTabPress('horario')}>
          <Image
            source={selectedTab === 'horario' ? require('./images/horario_selected.png') : require('./images/horario.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress('directorio')}>
          <Image
            source={selectedTab === 'directorio' ? require('./images/directorio_selected.png') : require('./images/directorio.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress('mapa')}>
          <Image
            source={selectedTab === 'mapa' ? require('./images/mapa_selected.png') : require('./images/mapa.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress('comida')}>
          <Image
            source={selectedTab === 'comida' ? require('./images/comida_selected.png') : require('./images/comida.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress('eventos')}>
          <Image
            source={selectedTab === 'eventos' ? require('./images/eventos_selected.png') : require('./images/eventos.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      {showMenu && (
        <Animated.View style={[styles.sideMenu, { transform: [{ translateX: menuTranslateX }] }]}>
          <TouchableOpacity onPress={closeMenu} style={styles.closeButton}>
            <Image source={require('./images/boton_menu_cierre.png')} style={styles.closeIcon} />
          </TouchableOpacity>
          <Text style={styles.sideMenuItem}>Perfil</Text>
          <Text style={styles.sideMenuItem}>Notificaciones</Text>
          <Text style={styles.sideMenuItem}>Configuración</Text>
        </Animated.View>
      )}
      {showMenu && (
        <TouchableOpacity onPress={closeMenu} style={[styles.overlay, { zIndex: 1, opacity: overlayOpacity }]} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    marginBottom: 50,
  },
  header: {
    paddingTop: Constants.statusBarHeight,
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  menuButton: {
    position: 'absolute',
    top: Constants.statusBarHeight + 20,
    left: 0,
    zIndex: 1,
  },
  menuIcon: {
    width: 30,
    height: 40,    
  },
  headerImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    padding: 0,
    backgroundColor: '#ffffff',
  },
  menu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#FD5900',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  image: {
    width: 65,
    height: 65,    
  },
  sideMenu: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '60%',
    backgroundColor: '#ffffff',
    elevation: 4,
    shadowColor: '#000000',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 20,
    zIndex: 2,
  },
  closeButton: {
    position: 'absolute',
    top: Constants.statusBarHeight + 20,
    right: -30,
    zIndex: 3,
  },
  closeIcon: {
    width: 30,
    height: 40,
  },
  sideMenuItem: {
    top: Constants.statusBarHeight + 20,
    paddingTop: 10,
    fontSize: 14,
    //fontFamily: 'Araboto',
    color: '#333',
    textAlign: 'left',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0, 
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1,
  },
  container_eventos: {
    backgroundColor: '#FD5900',
    borderRadius: 12,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleContainer_eventos: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  titleText_eventos: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  arrowCircle: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 5,
    marginRight: 10,
  },
  arrowIcon: {
    color: '#9368DC',
  },
  divider: {
    borderBottomWidth: 3,
    borderBottomColor: '#FD5900',
    marginTop: 20,
    marginBottom: 10,
    elevation: 1,
    shadowColor: '#000000',
  },
  contenedor_titulo: {
    alignItems: 'center',
    margin: 15,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FD5900',
    textShadowColor: 'rgba(0, 0, 0, 0.4)', 
    textShadowOffset: { width: 0.05, height: 0.05 }, 
    textShadowRadius: 1, 
  },
});

export default Menu;

//*/