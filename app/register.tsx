import { View, Image, StyleSheet, ImageBackground, Text } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router';
import UsuarioRepository from '@/repository/UsuarioRepository';
import Toast from 'react-native-toast-message';
import { User } from '@/model/User';
import { GenericForm } from '@/shared/GenericForm';


export default function Register () {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegistrarUsuario = async () => {
    if (password === confirmPassword) {
      const userInput: User = { name, email, password }
      const response = await UsuarioRepository.registerUser(userInput);
      if (response.id) {
        router.push('/');
        Toast.show({ type: 'success', text1: 'Sucesso!', text2: 'Usuário cadastrado com sucesso! 🚀' });
      } 
    } else {
      Toast.show({ type: 'error', text1: 'Erro!', text2: 'As senhas precisam ser iguais! 💥' });
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
        <GenericForm.Root styles={styles.form}>
          <GenericForm.Input
            label="Nome"
            textPlaceholder="Digite o nome..."
            setValue={setName}
            value={name}
            style={styles.input}
          />
          <GenericForm.Input
            label="Email"
            textPlaceholder="Digite o email..."
            setValue={setEmail}
            value={email}
            style={styles.input}
          />
          <GenericForm.Input
            label="Senha"
            textPlaceholder="Digite a senha..."
            setValue={setPassword}
            value={password}
            style={styles.input}
            password
          />
          <GenericForm.Input
            label="Confirme a senha"
            textPlaceholder="Confirme a senha..."
            setValue={setConfirmPassword}
            value={confirmPassword}
            style={styles.input}
            password
          />
          <GenericForm.Button icon="account-plus" mode="contained" textColor="white" styles={styles.registerButton} handle={handleRegistrarUsuario}>
            <Text style={{ fontSize: 18, fontWeight: 600 }}>Registrar</Text>
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
    height: 300,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  registerButton: {
    backgroundColor: '#298867',
    marginTop: 10,
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