import { View, Image, StyleSheet, ImageBackground, Text } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import React, { useCallback, useEffect, useState } from 'react'
import { Link, router } from 'expo-router';
import UsuarioRepository, { User } from '@/repository/UsuarioRepository';
import Toast from 'react-native-toast-message';

export default function Login () {
  const [users, setUsers] = useState<User[]>([]);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleGetUsers = useCallback(async () => {
    const users = await UsuarioRepository.getUsers();
    setUsers(users);
  }, []);

  useEffect(() => {
    handleGetUsers();
  }, [handleGetUsers])

  const handleLogin = async () => {
    const userFinded = users.find((user: User) => user.senha === password && user.email === email)
    if (userFinded) {
      Toast.show({ type: 'success', text1: 'Sucesso!', text2: 'Usuário encontrado! 🚀' })
      router.push('/(tabs)/home');
    } else {
      Toast.show({ type: 'error', text1: 'Erro!', text2: 'Usuário não foi encontrado! 💥' })
    }
  }

  return (
    <ImageBackground
    source={require("../assets/images/fundo3.png")}
    style={styles.backgroundImage}
    resizeMode="cover"
    >
      <View style={styles.content}>
        <View>
          <Image source={require('../assets/images/reciflow.png')} style={styles.image}/>
        </View>
        <View style={styles.form}>
          <TextInput
            mode='outlined'
            label="Email"
            placeholder="Enter the email..."
            onChangeText={(value: string) => setEmail(value)}
            value={email}
            style={styles.input}
            outlineColor="green"
            textColor="#298867"
            activeOutlineColor="green"
            placeholderTextColor={"grey"}
          />
          <TextInput
            mode="outlined"
            label="Password"
            placeholder="Enter the password..."
            onChangeText={(value: string) => setPassword(value)}
            value={password}
            style={styles.input}
            outlineColor="green"
            textColor="#298867"
            activeOutlineColor="green"
            placeholderTextColor={"grey"}
          />
          <Button icon="login" mode="contained" textColor="white" style={styles.loginButton} onPress={handleLogin}>
            <Text style={{ fontSize: 18, fontWeight: 600 }}>Entrar</Text>
          </Button>
          <Button icon="account-plus" mode="contained" textColor="#298867" style={styles.registerButton}>
            <Link href='/register' style={{ fontSize: 18, fontWeight: 600 }}>Registrar</Link>
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  image: {
    width: 200,
    height: 200,
  },
  form: {
    height: 260,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#298867',
    width: 280,
    borderRadius: 4,
  },
  registerButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: 280,
    borderRadius: 4,
  },
  input: {
    height: 50,
    width: 280,
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    flex: 1,
  },
});