import React, { Component }  from 'react';
import { Button, View, Text ,StyleSheet,ScrollView,Image, ImageBackground } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

import TitleF from './components/TitleF';
import ContentScreen from './components/ContentScreen';
import ComplexScreen from './components/ComplexScreen';
import QuadraticScreen from './components/QuadraticScreen';




class HomeScreen extends React.Component {
  render() {
    return (
<ImageBackground  source={{uri: 'https://firebasestorage.googleapis.com/v0/b/formule-332a0.appspot.com/o/20151005_145145.jpg?alt=media&token=ba1a45d8-d0cd-4b39-ba32-5d148293e1bc'}}
       style={{width: '100%', height: '100%'}} >
      
       <Text>{'\n'}{'\n'}</Text> 
       
        <TitleF name='MATHS Formulas' />
        
 

      <View style={{ flex: 1, alignItems: 'center'}}>
        <Text>{'\n'}{'\n'}</Text> 
        <Button
          title="Content"
           color="#0000b3"
          onPress={() => this.props.navigation.navigate('Content')}
        />
      </View>
   </ImageBackground> );
  }
}


const 
 styles = StyleSheet.create({
  baseText: {
    padding: 20,
    fontFamily: 'Cochin',
  
  },
  titleText: {
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
      color:'blue',
      width: '90%'
      
  },
   naslov: {
    fontSize: 20,
      padding: 10,
    borderRadius: 1,
    borderWidth: 3,
    borderColor: '#0000b3',
    color:'#0000b3'
  }
});





const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Content: {
      screen: ContentScreen,
    },
    Complex: {
      screen: ComplexScreen,
    },
    Quadratic: {
      screen: QuadraticScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}