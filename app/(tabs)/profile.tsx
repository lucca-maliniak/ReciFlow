import { GenericButton } from '@/components/BotaoGenerico';
import { useUserStore } from '@/store/UserStore';
import { router } from 'expo-router';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';

export default function Profile() {
  const state = useUserStore((state: any) => state);

  const handleLogOut = () => {
    router.push('/');
  }

  return (
    <ImageBackground
        source={require('../../assets/images/fundo3.png')}
        style={styles.background}
        resizeMode="cover"
    >
      <View style={styles.header}>
        <View style={styles.imageView}>
          <Avatar.Image size={100} style={{ backgroundColor: 'white', paddingLeft: 1 }} source={require('../../assets/images/reciflow.png')} />
        </View>
        <View style={styles.textView}>
          <Text style={styles.title}>{state.selectedUser.name}</Text>
          <Text style={styles.subTitle}>{state.selectedUser.email}</Text>
        </View>
      </View>
      <View style={styles.buttonsArea}>
        <GenericButton textButton='Log out' textColor={'red'} iconButton="power" onPress={handleLogOut}/>
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
    fontSize: 24,
    color: 'rgb(0, 0, 0)',
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  imageView: {
    marginLeft: 15,
  },
  textView: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  subTitle: {
    fontSize: 14,
    color: 'rgb(63, 63, 63)',
  },
  buttonsArea: {

  },
  textButton: {
    color: 'red',
  },
});
