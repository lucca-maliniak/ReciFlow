import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Card } from 'react-native-paper';

export default function Home() {
  return (
    <ImageBackground
      source={require('../../assets/images/fundo3.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <Card style={styles.card}>
            <Card.Content>
              <Text>Titulo</Text>
              <Text>Conteudo</Text>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content>
              <Text>Titulo</Text>
              <Text>Conteudo</Text>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content>
              <Text>Conteudo</Text>
            </Card.Content>
          </Card>
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
  card: {
    backgroundColor: 'rgba(255, 255, 255)',
    paddingVertical: 35,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 25,
    paddingHorizontal: 20,
  },
});
