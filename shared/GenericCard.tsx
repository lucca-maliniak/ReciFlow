import { Linking, StyleSheet, Text } from 'react-native'
import { Card } from "react-native-paper";

interface IGenericCard {
  title: string;
  content: string;
  link: string;
}

export default function GenericCard({ title, content, link }: IGenericCard) {
  const openWebsite = () => {
    Linking.openURL(link);
  }

  return (
    <Card style={styles.card} onPress={openWebsite} mode='contained'>
      <Card.Title title={title} titleNumberOfLines={5} titleStyle={styles.title}/>
      <Card.Content>
        <Text style={styles.content}>{content}</Text>
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingVertical: 35,
    borderRadius: 4,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    textAlign: 'justify'
  }
})