import { Linking, StyleSheet, Text } from 'react-native'
import { Button, Card } from "react-native-paper";
import { useState } from 'react';

interface IGenericCard {
  id: number;
  handle: (id: number) => void;
  title: string; 
  description: string; 
  link: string;
  isLiked: boolean;
}

export default function GenericCard({ id, title, description, link, isLiked, handle }: IGenericCard) {
  const [randomNumber, _] = useState(() => Math.ceil(Math.random() * 100));

  const openWebsite = () => {
    Linking.openURL(link);
  }

  return (
    <Card style={styles.card} onPress={openWebsite} mode='contained'>
      <Card.Title title={title} titleNumberOfLines={5} titleStyle={styles.title}/>
      <Card.Content>
        <Text style={styles.content}>{description}</Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => handle(id)} mode="text" icon={isLiked ? 'thumb-up' : 'thumb-up-outline'}>{randomNumber}K</Button>
      </Card.Actions>
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
  },
  like: {
    backgroundColor: 'transparent',
  }
})