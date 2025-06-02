import { GreenPoints, GreenPointsRecord } from '@/model/GreenPoint';
import ColetaRepository from '@/repository/ColetaRepository';
import { MaterialIcons } from '@expo/vector-icons';
import { useCallback, useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Map() {
  const [greenPoints, setGreenPoints] = useState<GreenPoints | null>(null);
  const [filteredGreenPoints, setFilteredGreenPoints] = useState<GreenPointsRecord[]>([]);

  const handleGetGreenPoints = useCallback(async () => {
    const greenPoints = await ColetaRepository.getGreenPoints();
    setGreenPoints(greenPoints.result);
    handleSetIconsInMap();
  }, []);

  const handleSetIconsInMap = () => {
    if (greenPoints && greenPoints.records) {
      const filteredGreenPoints = greenPoints.records.filter(r => r.bairro === 'Parque São Pedro')
      setFilteredGreenPoints(filteredGreenPoints)
    }
  }

  const getLatitudeAndLogitude = (point: GreenPointsRecord) => {
    const regex = /POINT \((-?[\d.]+) (-?[\d.]+)\)/;
    const match = point.geometria.match(regex);
    if (match) {
      const latitude = parseFloat(match[1]);
      const longitude = parseFloat(match[2]);
      return { latitude, longitude }
    }
  }
  
  useEffect(() => {
    handleGetGreenPoints();
  }, [handleGetGreenPoints])

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
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          {filteredGreenPoints && filteredGreenPoints.map(point => {
            const coordinates = getLatitudeAndLogitude(point);
            return (
              <Marker
                coordinate={{
                  latitude: coordinates?.latitude ?? 0,
                  longitude: coordinates?.longitude ?? 0,
                }}
              >
                <MaterialIcons name="recycling" size={26} color="green" />
              </Marker>
            )
          })}
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
