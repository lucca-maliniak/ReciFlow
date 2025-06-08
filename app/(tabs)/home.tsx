import CardGenerico from '@/shared/GenericCard';
import { MOCK_NEWS } from '@/shared/Mock';
import { View, StyleSheet, ImageBackground } from 'react-native';

export default function Home() {
  return (
    <ImageBackground
      source={require('../../assets/images/fundo3.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          {MOCK_NEWS.map(n => <CardGenerico key={MOCK_NEWS.indexOf(n)} title={n.title} content={n.description} link={n.link} />)}
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 25,
    paddingHorizontal: 20,
  },
});
