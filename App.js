/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GamingSVG from './src/assets/images/gaming.svg';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Menu from './src/pages/Menu';
import Login from './src/pages/Login';
import DetailRecord from './src/pages/DetailRecord';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Navigator
          component={Login}
          name="Login"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Menu}
          name="Menu"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={DetailRecord}
          name="DetailRecord"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Main = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.textTitle}>GAMEON</Text>
      </View>
      <View style={styles.containerSVG}>
        <GamingSVG width={300} height={300} style={styles.imageSVG} />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Menu')}>
        <Text style={styles.text}>Let's Begin</Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#ffffff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// const Home = () => {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  containerTitle: {
    marginTop: 20,
  },
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#20315f',
    fontFamily: 'Inter-Bold',
  },
  containerSVG: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSVG: {
    transform: [
      {
        rotate: '-15deg',
      },
    ],
  },
  button: {
    backgroundColor: '#AD40AF',
    padding: 20,
    width: '90%',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#ffffff',
    fontFamily: 'Roboto-MediumItalic',
  },
});

export default App;
