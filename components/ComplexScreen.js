import React, { Component }  from 'react';
import { Button, View, Text ,StyleSheet,ScrollView, Image,ImageBackground } from 'react-native';
import TitleF from './TitleF';
//import Subtitle from '../Subtitle';
//import TextBase from '../TextBase';
//import ImageBall from './ImageBall';
//import TitleF from '../TitleF';



export default class ComplexScreen extends React.Component {
  render() {
    return (
     <ScrollView style={{ flex: 1, alignItems: 'center' }}>
<Text></Text>
 <TitleF name='Formulas for Complex Number' />
 <Text></Text>

<Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/fakultet-76497.appspot.com/o/complex.png?alt=media&token=6dda5139-fa73-451b-8174-b1090a7398b5'}}
       style={{width: 280, height: 260}} />

  <Button
          title="Home"
           color="#0000b3"
          onPress={() => this.props.navigation.navigate('Home')}
        />
       <Text></Text> 
      
      </ScrollView>
    );
  }
}


