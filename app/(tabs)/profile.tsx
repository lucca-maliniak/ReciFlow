import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function Profile() {
  return (
    <ImageBackground
        source={require('../../assets/images/fundo3.png')}
        style={styles.background}
        resizeMode="cover"
    >
        <View style={styles.container}>
        <Text style={styles.title}>Perfil</Text>
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
  }
});
