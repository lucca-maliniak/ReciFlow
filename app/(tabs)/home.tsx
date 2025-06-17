import CardGenerico from '@/shared/GenericCard';
import { Mock } from '@/shared/Mock';
import { useUserStore } from '@/store/UserStore';
import { View, StyleSheet, ImageBackground } from 'react-native';

export default function Home() {
  const { mockNews, setMockNews } = Mock();
  const state = useUserStore((state: any) => state);
  
  const handleLike = (id: number) => {
    const findedNews = mockNews.find(n => n.id === id);

    if (findedNews?.isLiked)
      state.removePost(findedNews);
    else state.likePost();

    setMockNews(prev =>
      prev.map(n =>
        n.id === id ? { ...n, isLiked: !n.isLiked } : n
      )
    );
  }

  return (
    <ImageBackground
      source={require('../../assets/images/fundo3.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          {mockNews.map(n => 
            <CardGenerico
              id={n.id}
              key={mockNews.indexOf(n)} 
              title={n.title} 
              description={n.description} 
              link={n.link} 
              handle={handleLike}
              isLiked={n.isLiked}/>
            )}
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
