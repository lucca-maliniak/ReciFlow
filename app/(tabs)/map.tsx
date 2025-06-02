import ColetaRepository from '@/repository/ColetaRepository';
import { MaterialIcons } from '@expo/vector-icons';
import { useCallback } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Map() {
  useCallback(() => {
    const teste = ColetaRepository.getGreenPoints();
    alert(teste);
  }, [])

  return (
    <ImageBackground
      source={require('../../assets/images/fundo3.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <MapView 
          style={styles.map} 
          initialRegion={{
            latitude: -19.90573018842239,
            longitude: -43.963491202747605,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: -19.90573018842239,
              longitude: -43.963491202747605,
            }}
          >
            <MaterialIcons name="recycling" size={26} color="green" />
          </Marker>
        </MapView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  }
});
