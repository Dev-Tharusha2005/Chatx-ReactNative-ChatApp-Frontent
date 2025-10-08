import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUp from './SignUp';
import Home from './Home';
import Chat from './Chat';

const Stack = createStackNavigator();

const Welcome = ({ navigation }) => {
  const { container, coverImg, headerText, button, buttonText } = styles;

  return (   
    <View style={container}>
      <Text style={headerText}>Start a Fun Communication with Anonymity</Text>
      <Image source={require("./assets/Group1.png")} style={coverImg} />

      <TouchableOpacity style={button} onPress={() => navigation.navigate("SignUp")}>
        <Text style={buttonText}>Create an Account</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8ecf4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 44,
    color: "#0573F3",
    paddingBottom: 60,
    textAlign: "center",
  },
  coverImg: {
    width: 500,
    height: 300,
    resizeMode: "contain",
  },
  button: {
    width: "100%",
    backgroundColor: "#0573F3",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
