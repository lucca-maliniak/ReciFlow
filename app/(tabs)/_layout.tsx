import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { ImageBackground, StyleSheet, View } from 'react-native';

interface FooterStyleProps {
  headerTintColor: string;
  headerStyle: { backgroundColor: string; },
  tabBarStyle: { backgroundColor: string; },
  tabBarActiveTintColor: string;
  tabBarInactiveTintColor: string;
  animation: 'none' | 'fade' | 'shift' | undefined;
} 

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <ImageBackground 
      source={require("../../assets/images/fundo3.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.content}>
        <Tabs>
          <Tabs.Screen
            name="home"
            options={{
              title: 'Noticias',
              tabBarIcon: ({ color }) => <TabBarIcon name="newspaper-o" color={color} />,
              ...footerStyle,
            }}
          />
          <Tabs.Screen
            name="map"
            options={{
              title: 'Mapa',
              tabBarIcon: ({ color }) => <TabBarIcon name="map" color={color} />,
              ...footerStyle,
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              title: 'Perfil',
              tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
              ...footerStyle,
            }}
          />
        </Tabs>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: 'transparent',
  }
})

const footerStyle: FooterStyleProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: 'rgb(0, 114, 0)' },
  tabBarStyle: { backgroundColor: 'rgb(0, 114, 0)' },
  tabBarActiveTintColor: 'white',
  tabBarInactiveTintColor: 'rgba(0, 0, 0, 0.5)',
  animation: 'shift',
}