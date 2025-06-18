import { GreenPointsRecord } from '@/model/GreenPoint';
import WasteCollection from '@/repository/WasteCollectionRepository';
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import proj4 from 'proj4';

proj4.defs("EPSG:31983", "+proj=utm +zone=23 +south +datum=SIRGAS2000 +units=m +no_defs");

export default function Map() {
  const [greenPoints, setGreenPoints] = useState<GreenPointsRecord[]>([]);

  useEffect(() => {
    handleGetGreenPoints();
  }, [])

  const handleGetGreenPoints = async () => {
    const greenPointsResponse = await WasteCollection.getGreenPoints();
    setGreenPoints(greenPointsResponse.result.records);
  };

  const getLatitudeAndLogitude = (point: GreenPointsRecord) => {
    const regex = /POINT \((-?[\d.]+) (-?[\d.]+)\)/;
    const match = point.GEOMETRIA.match(regex);
    if (match) {
      const [ longitude, latitude ] = proj4("EPSG:31983", "EPSG:4326", [parseFloat(match[1]), parseFloat(match[2])]);
      return { longitude, latitude }
    } else {
      return { longitude: 0, latitude: 0 } 
    }
  }

  return (
    <ImageBackground
      source={require('../../assets/images/background3.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <MapView
          style={styles.map} 
          initialRegion={{
            latitude: -19.853846,
            longitude: -43.967177,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          {greenPoints && greenPoints.map(point => {
            const coordinates = getLatitudeAndLogitude(point);
            return (
              <Marker
                key={point._id}
                coordinate={{
                  latitude: coordinates.latitude,
                  longitude: coordinates.longitude,
                }}
              >
                <MaterialIcons name="recycling" size={35} color="green" />
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
