import { View, Image, StyleSheet, ImageBackground, Text } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import React, { useCallback, useEffect, useState } from 'react'
import { Link, router } from 'expo-router';
import UsuarioRepository from '@/repository/UserRepository';
import Toast from 'react-native-toast-message';
import { useUserStore } from '@/store/UserStore';
import { User } from '@/model/User';
import { GenericForm } from '@/shared/GenericForm';

export default function Login () {
   const setupUser = useUserStore((state: any) => state.setupUser);
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
    const userFound = findUser();
    if (!userFound)
        return Toast.show({ type: 'error', text1: 'Erro!', text2: 'Usuário não foi encontrado! 💥' })
    setUserIfFound(userFound)
  }

  const setUserIfFound = (userFound: User) => {
    setUpSelectedUser(userFound)
    Toast.show({ type: 'success', text1: 'Sucesso!', text2: 'Usuário encontrado! 🚀' })
    router.push('/(tabs)/home')
  }

  const findUser = () => {
    return users.find((user: User) => user.password === password && user.email === email)
  }

  const setUpSelectedUser = (userFinded: User) => {
    setupUser(userFinded);
  }

  return (
    <ImageBackground
    source={require("../assets/images/background3.png")}
    style={styles.backgroundImage}
    resizeMode="cover"
    >
      <View style={styles.content}>
        <View>
          <Image source={require('../assets/images/reciflow.png')} style={styles.image}/>
        </View>
        <GenericForm.Root styles={styles.form}>
          <GenericForm.Input
            label="Email"
            textPlaceholder="Enter the email..."
            setValue={setEmail}
            value={email}
            style={styles.input}
          />
          <GenericForm.Input
            label="Password"
            textPlaceholder="Enter the password..."
            setValue={setPassword}
            value={password}
            style={styles.input}
            password
          />
          <GenericForm.Button icon="login" mode="contained" textColor="white" styles={styles.loginButton} handle={handleLogin}>
            <Text style={{ fontSize: 18, fontWeight: 600 }}>Entrar</Text>
          </GenericForm.Button>
          <GenericForm.Button icon="account-plus" mode="contained" textColor="#298867" styles={styles.registerButton}>
            <Link href='/register' style={{ fontSize: 18, fontWeight: 600 }}>Registrar</Link>
          </GenericForm.Button>
        </GenericForm.Root>
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