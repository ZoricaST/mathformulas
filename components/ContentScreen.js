import React, { Component }  from 'react';
import { Button, View, Text ,StyleSheet,ScrollView, Image,ImageBackground } from 'react-native';
import TitleF from './TitleF';

export default class ContentScreen extends React.Component {
  render() {
    return (
      <ImageBackground  source={{uri: 'https://firebasestorage.googleapis.com/v0/b/formule-332a0.appspot.com/o/20151005_145145.jpg?alt=media&token=ba1a45d8-d0cd-4b39-ba32-5d148293e1bc'}}
       style={{width: '100%', height: '100%'}} >
     <ScrollView style={{ flex: 1, alignItems: 'center',justifyContent: 'center' }}>
            
        <TitleF name='MATHS Formulas' />
        
 
  <Text> </Text>
        <Button
          title="formulas for Complex Number"
           color="#0000b3"
          onPress={() => this.props.navigation.navigate('Complex')}
        />
        <Text> </Text>
<Button
          title="Quadratic Equations"
           color="#0000b3"
          onPress={() => this.props.navigation.navigate('Quadratic')}
        />
        <Text> </Text>
        
        
      </ScrollView>
      
      </ImageBackground>   
    );
  }
}
