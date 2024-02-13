import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import ModalMapa from './components/modal_mapa';
import mapa from './images/map/mapa_principal.png';
import mapa_cuckoo from './images/map/mapa_cuckoo_silueta.png';
import mapa_edificio_a from './images/map/mapa_edificio_a_silueta.png';
import mapa_edificio_b from './images/map/mapa_edificio_b_silueta.png';
import mapa_edificio_e1 from './images/map/mapa_edificio_e1_silueta.png';
import mapa_edificio_e2 from './images/map/mapa_edificio_e2_silueta.png';
import mapa_edificio_c from './images/map/mapa_edificio_c_silueta.png';
import mapa_edificio_d from './images/map/mapa_edificio_d_silueta.png';
import mapa_edificio_g from './images/map/mapa_edificio_g_silueta.png';
import mapa_SUM from './images/map/mapa_SUM_silueta.png';
import mapa_basket from './images/map/mapa_basket_silueta.png';
import mapa_usos from './images/map/mapa_usos_silueta.png';
import mapa_capilla from './images/map/mapa_capilla_silueta.png';
import mapa_canchaFut from './images/map/mapa_canchaFut_silueta.png';
import mapa_canchaFutR from './images/map/mapa_canchaFutR_silueta.png';
import mapa_canchaTenis from './images/map/mapa_canchaTenis_silueta.png';
import mapa_plaza_central from './images/map/mapa_plaza_central_silueta.png';
import mapa_estacionamiento1 from './images/map/mapa_estacionamiento1_silueta.png';
import mapa_estacionamiento2 from './images/map/mapa_estacionamiento2_silueta.png';
import mapa_estacionamientoD from './images/map/mapa_estacionamientoD_silueta.png';
import globo_cuckoo_c from './images/map/globo_cuckoo_c.png';
import globo_cuckoo_b from './images/map/globo_cuckoo_b.png';
import globo_a_c from './images/map/globo_a_c.png';
import globo_a_b from './images/map/globo_a_b.png';
import globo_b_c from './images/map/globo_b_c.png';
import globo_b_b from './images/map/globo_b_b.png';
import globo_c_c from './images/map/globo_c_c.png';
import globo_c_b from './images/map/globo_c_b.png';
import globo_d_c from './images/map/globo_d_c.png';
import globo_d_b from './images/map/globo_d_b.png';
import globo_e_c from './images/map/globo_e_c.png';
import globo_e_b from './images/map/globo_e_b.png';
import globo_g_c from './images/map/globo_g_c.png';
import globo_g_b from './images/map/globo_g_b.png';
import globo_s_c from './images/map/globo_s_c.png';
import globo_s_b from './images/map/globo_s_b.png';
import globo_basket_c from './images/map/globo_basket_c.png';
import globo_basket_b from './images/map/globo_basket_b.png';
import globo_usos_c from './images/map/globo_usos_c.png';
import globo_usos_b from './images/map/globo_usos_b.png';
import globo_capilla_c from './images/map/globo_capilla_c.png';
import globo_capilla_b from './images/map/globo_capilla_b.png';
import globo_canchaFut_c from './images/map/globo_canchaFut_c.png';
import globo_canchaFut_b from './images/map/globo_canchaFut_b.png';
import globo_canchaFutR_c from './images/map/globo_canchaFutR_c.png';
import globo_canchaFutR_b from './images/map/globo_canchaFutR_b.png';
import globo_canchaTenis_c from './images/map/globo_canchaTenis_c.png';
import globo_canchaTenis_b from './images/map/globo_canchaTenis_b.png';
import globo_plaza_central_c from './images/map/globo_plaza_central_c.png';
import globo_plaza_central_b from './images/map/globo_plaza_central_b.png';
import globo_estacionamiento1_c from './images/map/globo_estacionamiento1_c.png';
import globo_estacionamiento1_b from './images/map/globo_estacionamiento1_b.png';
import globo_estacionamiento2_c from './images/map/globo_estacionamiento2_c.png';
import globo_estacionamiento2_b from './images/map/globo_estacionamiento2_b.png';
import globo_estacionamientoD_c from './images/map/globo_estacionamientoD_c.png';
import globo_estacionamientoD_b from './images/map/globo_estacionamientoD_b.png';

export default function Mapa() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [tituloModal, setTituloModal] = useState(null);
  const [colorModal, setColorModal] = useState('black');
  const [botonModal, setBotonModal] = useState(false);
  const [textoBotonModal, setTextoBotonModal] = useState('');

  const handleImagePress = (image, titulo, color, boton, textoBoton) => {
    setSelectedImage(image);
    setTituloModal(titulo);
    setColorModal(color);
    setBotonModal(boton);
    setTextoBotonModal(textoBoton);
    if(!mostrarModal){
      setMostrarModal(true);
    }
  };

  const alCerrarModal = () => {
    setMostrarModal(false);
  };

  return (
    <View style={styles.container}>
      <ModalMapa titulo={tituloModal} color={colorModal} backgroundColor={colorModal} mostrarModal={mostrarModal} alCerrar={alCerrarModal} display={botonModal} textoBoton={textoBotonModal} style={{zIndex: 999}}></ModalMapa>
      <ScrollView
       horizontal={true}
       style={styles.scrollview} 
       pinchGestureEnabled={true} 
       maximumZoomScale={5.8} 
       minimumZoomScale={0.4}
       centerContent={true}
       >
        <View style={styles.contenedor_mapa}>
          <Image source={mapa} style={styles.image}/>
          <Image 
            source={mapa_cuckoo} 
            style={selectedImage === 'cuckoo' ? [styles.mapa_cuckoo,styles.estructura_onon] : [styles.mapa_cuckoo,styles.estructura_offoff]}
          />
          <Image 
            source={mapa_edificio_d} 
            style={selectedImage === 'edificio_d' ? [styles.mapa_edificio_d,styles.estructura_onon] : [styles.mapa_edificio_d,styles.estructura_offoff]}
          />
          <Image 
            source={mapa_edificio_a} 
            style={selectedImage === 'edificio_a' ? [styles.mapa_edificio_a,styles.estructura_onon] : [styles.mapa_edificio_a,styles.estructura_offoff]}
          />
          <Image 
            source={mapa_edificio_b} 
            style={selectedImage === 'edificio_b' ? [styles.mapa_edificio_b,styles.estructura_onon] : [styles.mapa_edificio_b,styles.estructura_offoff]}
          />
          <Image 
            source={mapa_edificio_c} 
            style={selectedImage === 'edificio_c' ? [styles.mapa_edificio_c,styles.estructura_onon] : [styles.mapa_edificio_c,styles.estructura_offoff]}
          />
          <Image 
            source={mapa_edificio_e1} 
            style={selectedImage === 'edificio_e' ? [styles.mapa_edificio_e1,styles.estructura_onon] : [styles.mapa_edificio_e1,styles.estructura_offoff]}
          />
          <Image 
            source={mapa_edificio_e2} 
            style={selectedImage === 'edificio_e' ? [styles.mapa_edificio_e2,styles.estructura_onon] : [styles.mapa_edificio_e2,styles.estructura_offoff]}
          />
          <Image 
            source={mapa_edificio_g} 
            style={selectedImage === 'edificio_g' ? [styles.mapa_edificio_g,styles.estructura_onon] : [styles.mapa_edificio_g,styles.estructura_offoff]}
          />
          <Image 
            source={mapa_SUM} 
            style={selectedImage === 'SUM' ? [styles.mapa_s,styles.estructura_onon] : [styles.mapa_s,styles.estructura_offoff]}
          />
          <Image 
            source={mapa_basket} 
            style={selectedImage === 'basket' ? [styles.mapa_basket,styles.estructura_onon] : [styles.mapa_basket,styles.estructura_offoff]}
          />
          <Image 
            source={mapa_usos} 
            style={selectedImage === 'usos' ? [styles.mapa_usos,styles.estructura_onon] : [styles.mapa_usos,styles.estructura_offoff]}
          />
          <Image 
            source={mapa_capilla} 
            style={selectedImage === 'capilla' ? [styles.mapa_capilla,styles.estructura_onon] : [styles.mapa_capilla,styles.estructura_offoff]}
          />
          <Image 
            source={mapa_plaza_central} 
            style={selectedImage === 'plaza_central' ? [styles.mapa_plaza_central,styles.estructura_onon] : [styles.mapa_plaza_central,styles.estructura_offoff]}
          />
          <Image 
            source={mapa_canchaFut} 
            style={selectedImage === 'canchaFut' ? [styles.mapa_canchaFut,styles.estructura_onon] : [styles.mapa_canchaFut,styles.estructura_offoff]}
          />
          <Image 
            source={mapa_canchaFutR} 
            style={selectedImage === 'canchaFutR' ? [styles.mapa_canchaFutR,styles.estructura_onon] : [styles.mapa_canchaFutR,styles.estructura_offoff]}
          />
          <Image 
            source={mapa_canchaTenis} 
            style={selectedImage === 'canchaTenis' ? [styles.mapa_canchaTenis,styles.estructura_onon] : [styles.mapa_canchaTenis,styles.estructura_offoff]}
          />
          <Image 
            source={mapa_estacionamiento1} 
            style={selectedImage === 'estacionamiento1' ? [styles.mapa_estacionamiento1,styles.estructura_onon] : [styles.mapa_estacionamiento1,styles.estructura_offoff]}
          />
          <Image 
            source={mapa_estacionamiento2} 
            style={selectedImage === 'estacionamiento2' ? [styles.mapa_estacionamiento2,styles.estructura_onon] : [styles.mapa_estacionamiento2,styles.estructura_offoff]}
          />
          <Image 
            source={mapa_estacionamientoD} 
            style={selectedImage === 'estacionamientoD' ? [styles.mapa_estacionamientoD,styles.estructura_onon] : [styles.mapa_estacionamientoD,styles.estructura_offoff]}
          />
          {}
          {}
          {}
          {}
          <TouchableOpacity onPress={() => handleImagePress('edificio_a','Edificio A','#f7712e','none')} style={styles.globo_a} activeOpacity={1.0}>
              <Image 
              source={selectedImage === 'edificio_a' ? globo_a_c : globo_a_b} 
              style={styles.globo_on}
              />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleImagePress('edificio_b','Edificio B','#e44060','none')} style={styles.globo_b} activeOpacity={1.0}>
            <Image 
              source={selectedImage === 'edificio_b' ? globo_b_c : globo_b_b} 
              style={styles.globo_on}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleImagePress('edificio_e','Edificio E','#166834','none')} style={styles.globo_e} activeOpacity={1.0}>
            <Image 
              source={selectedImage === 'edificio_e' ? globo_e_c : globo_e_b} 
              style={styles.globo_on}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleImagePress('edificio_c','Edificio C','#197aa4','none')} style={styles.globo_c} activeOpacity={1.0}>
            <Image 
              source={selectedImage === 'edificio_c' ? globo_c_c : globo_c_b} 
              style={styles.globo_on}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleImagePress('edificio_d','Edificio D','#5d3626','none')} style={styles.globo_d} activeOpacity={1.0}
            hitSlop={{left:-100,bottom:-500}}
          >
            <Image 
              source={selectedImage === 'edificio_d' ? globo_d_c : globo_d_b} 
              style={styles.globo_on}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleImagePress('edificio_g','Gimnasio UAO','#f59730','none')} style={styles.globo_g} activeOpacity={1.0}>
            <Image 
              source={selectedImage === 'edificio_g' ? globo_g_c : globo_g_b} 
              style={styles.globo_on}
            />
          </TouchableOpacity>
          {}
          <TouchableOpacity onPress={() => handleImagePress('SUM','Auditorio SUM','#80b918','none')} style={styles.globo_s} activeOpacity={1.0}>
            <Image 
              source={selectedImage === 'SUM' ? globo_s_c : globo_s_b} 
              style={styles.globo_on}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleImagePress('basket','Canchas de Basketball','#0184da','none')} style={styles.globo_basket} activeOpacity={1.0}>
            <Image 
              source={selectedImage === 'basket' ? globo_basket_c : globo_basket_b} 
              style={styles.globo_on}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleImagePress('usos','Salón de usos múltiples','#f6bd03','none')} style={styles.globo_usos} activeOpacity={1.0}>
            <Image 
              source={selectedImage === 'usos' ? globo_usos_c : globo_usos_b} 
              style={styles.globo_on}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleImagePress('capilla','Capilla','#64ba20','none')} style={styles.globo_capilla} activeOpacity={1.0}>
            <Image 
              source={selectedImage === 'capilla' ? globo_capilla_c : globo_capilla_b} 
              style={styles.globo_on}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleImagePress('plaza_central','Plaza Central','#c4498f','none')} style={styles.globo_plaza_central} activeOpacity={1.0}>
            <Image 
              source={selectedImage === 'plaza_central' ? globo_plaza_central_c : globo_plaza_central_b} 
              style={styles.globo_on}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleImagePress('canchaFut','Cancha de Futbol','#7522bd','none')} style={styles.globo_canchaFut} activeOpacity={1.0}>
            <Image 
              source={selectedImage === 'canchaFut' ? globo_canchaFut_c : globo_canchaFut_b} 
              style={styles.globo_on}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleImagePress('canchaFutR','Cancha de Futbol Rápido','#219bbc','none')} style={styles.globo_canchaFutR} activeOpacity={1.0}>
            <Image 
              source={selectedImage === 'canchaFutR' ? globo_canchaFutR_c : globo_canchaFutR_b} 
              style={styles.globo_on}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleImagePress('canchaTenis','Canchas de Tenis','#a34837','none')} style={styles.globo_canchaTenis} activeOpacity={1.0}>
            <Image 
              source={selectedImage === 'canchaTenis' ? globo_canchaTenis_c : globo_canchaTenis_b} 
              style={styles.globo_on}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleImagePress('estacionamiento1','Estacionamiento 1','#c2256f','none')} style={styles.globo_estacionamiento1} activeOpacity={1.0}>
            <Image 
              source={selectedImage === 'estacionamiento1' ? globo_estacionamiento1_c : globo_estacionamiento1_b} 
              style={styles.globo_on}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleImagePress('estacionamiento2','Estacionamiento 2','#bb3222','none')} style={styles.globo_estacionamiento2} activeOpacity={1.0}>
            <Image 
              source={selectedImage === 'estacionamiento2' ? globo_estacionamiento2_c : globo_estacionamiento2_b} 
              style={styles.globo_on}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleImagePress('estacionamientoD','Estacionamiento para personal Docente','#203cba','none')} style={styles.globo_estacionamientoD} activeOpacity={1.0}>
            <Image 
              source={selectedImage === 'estacionamientoD' ? globo_estacionamientoD_c : globo_estacionamientoD_b} 
              style={styles.globo_on}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleImagePress('cuckoo','Cuckoo Coffee','#563b33','flex','Ordenar')} style={styles.globo_cuckoo} activeOpacity={1.0}>
            <Image 
              source={selectedImage === 'cuckoo' ? globo_cuckoo_c : globo_cuckoo_b} 
              style={styles.globo_on}
            />
          </TouchableOpacity>
          {}
        </View>
        
      </ScrollView>
      {}        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '90%',
    width: 800,
    resizeMode: 'center',
  },
  scrollview: {
    backgroundColor: '#cabec8',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  contenedor_mapa: {
    width: '10%',    
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },  
  mapa_edificio_a: {
    position: 'absolute',
    height: '8.3%',
    width: '20.8%',
    top: '51.9%',
    left: '29.25%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  globo_a: {
    position: 'absolute',
    height: '5.0%',
    width: '4.2%',
    top: '49.95%',
    left: '37.25%',
    resizeMode: 'contain',
    justifyContent: 'center',
  }, 
  mapa_edificio_b: {
    position: 'absolute',
    height: '6.55%',
    width: '13.15%',
    top: '48.575%',
    left: '24.4%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  globo_b: {
    position: 'absolute',
    height: '5.0%',
    width: '4.4%',
    top: '45.95%',
    left: '28.65%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  mapa_edificio_e1: {
    position: 'absolute',
    height: '6.25%',
    width: '11.6%',
    top: '47.7%',
    left: '58.25%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  mapa_edificio_e2: {
    position: 'absolute',
    height: '5.8%',
    width: '11.45%',
    top: '45.9%',
    left: '68.85%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  globo_e: {
    position: 'absolute',
    height: '5.0%',
    width: '4.1%',
    top: '44.1%',
    left: '66.95%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  mapa_edificio_c: {
    position: 'absolute',
    height: '5.25%',
    width: '10.6%',
    top: '42.85%',
    left: '55.95%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  globo_c: {
    position: 'absolute',
    height: '5.0%',
    width: '4.2%',
    top: '39.2%',
    left: '58.95%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  mapa_edificio_d: {
    position: 'absolute',
    height: '4.85%',
    width: '12.15%',
    top: '38.45%',
    left: '51.5%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  globo_d: {
    position: 'absolute',
    height: '5.0%',
    width: '4.2%',
    top: '34.9%',
    left: '55.65%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  mapa_edificio_g: {
    position: 'absolute',
    height: '3.9%',
    width: '5.6%',
    top: '31.45%',
    left: '47.1%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  globo_g: {
    position: 'absolute',
    height: '5.0%',
    width: '4.35%',
    top: '29.45%',
    left: '44.25%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  mapa_cuckoo: {
    position: 'absolute',
    height: '5.5%',
    width: '13.2%',
    top: '43.6%',
    left: '13.5%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  globo_cuckoo: {
    position: 'absolute',
    height: '5.0%',
    width: '4.7%',
    top: '41.0%',
    left: '15.8%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  mapa_s: {
    position: 'absolute',
    height: '6.1%',
    width: '8.5%',
    top: '47.2%',
    left: '13.9%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  globo_s: {
    position: 'absolute',
    height: '5.0%',
    width: '4.7%',
    top: '45.0%',
    left: '12.8%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  mapa_basket: {
    position: 'absolute',
    height: '8.3%',
    width: '10.3%',
    top: '35%',
    left: '28.5%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  globo_basket: {
    position: 'absolute',
    height: '2.8%',
    width: '2.5%',
    top: '36.0%',
    left: '34.3%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  mapa_usos: {
    position: 'absolute',
    height: '3.0%',
    width: '6.2%',
    top: '42.2%',
    left: '36.1%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  globo_usos: {
    position: 'absolute',
    height: '2.8%',
    width: '2.5%',
    top: '40.7%',
    left: '37.3%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  mapa_capilla: {
    position: 'absolute',
    height: '2.9%',
    width: '4.65%',
    top: '43%',
    left: '31.7%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  globo_capilla: {
    position: 'absolute',
    height: '2.8%',
    width: '2.5%',
    top: '41.1%',
    left: '33.3%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  mapa_plaza_central: {
    position: 'absolute',
    height: '4.0%',
    width: '6.75%',
    top: '45%',
    left: '44.85%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  globo_plaza_central: {
    position: 'absolute',
    height: '2.8%',
    width: '2.5%',
    top: '42.6%',
    left: '46.1%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  mapa_canchaFut: {
    position: 'absolute',
    height: '6.6%',
    width: '13.0%',
    top: '34.2%',
    left: '35.15%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  globo_canchaFut: {
    position: 'absolute',
    height: '2.8%',
    width: '2.5%',
    top: '32.6%',
    left: '38.65%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  mapa_canchaFutR: {
    position: 'absolute',
    height: '4.2%',
    width: '7.5%',
    top: '35.15%',
    left: '49.45%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  globo_canchaFutR: {
    position: 'absolute',
    height: '2.8%',
    width: '2.5%',
    top: '34.3%',
    left: '51.65%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  mapa_canchaTenis: {
    position: 'absolute',
    height: '2.45%',
    width: '6.65%',
    top: '33.55%',
    left: '26.8%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  globo_canchaTenis: {
    position: 'absolute',
    height: '2.8%',
    width: '2.5%',
    top: '31.8%',
    left: '28.65%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },   
  mapa_estacionamiento1: {
    position: 'absolute',
    height: '8.25%',
    width: '100.3%',
    top: '46.85%',
    left: '27.75%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  globo_estacionamiento1: {
    position: 'absolute',
    height: '2.8%',
    width: '4.5%',
    top: '44.5%',
    left: '82.2%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  mapa_estacionamiento2: {
    position: 'absolute',
    height: '10.65%',
    width: '17.6%',
    top: '34.65%',
    left: '12.4%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  globo_estacionamiento2: {
    position: 'absolute',
    height: '2.8%',
    width: '3.5%',
    top: '33.8%',
    left: '17.5%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  mapa_estacionamientoD: {
    position: 'absolute',
    height: '8.25%',
    width: '13.9%',
    top: '55.85%',
    left: '13.15%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  globo_estacionamientoD: {
    position: 'absolute',
    height: '2.8%',
    width: '4.5%',
    top: '55.5%',
    left: '17.2%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },  
  globo_on: {
    resizeMode: 'contain',
    width: '100%',
  },  
  estructura_on: {
    opacity: 0.7,
    resizeMode: 'contain',
    width: '100%',
  },  
  estructura_onon: {
    opacity: 0.7,
    resizeMode: 'contain',
  },  
  estructura_off: {
    opacity: 0.01,
    resizeMode: 'contain',
    width: '100%',
  },
  estructura_offoff: {
    opacity: 0.01,
    resizeMode: 'contain',
  },
  menu_principal: {
    width: '100%',
  } 
});
