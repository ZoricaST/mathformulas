import React, { Component }  from 'react';
import { Button, View, Text ,StyleSheet,ScrollView, Image,ImageBackground } from 'react-native';
import TitleF from './TitleF';
//import Subtitle from '../Subtitle';




export default class ComplexScreen extends React.Component {
 render() {
    return (
     <ScrollView  style={{ flex: 1, alignItems: 'center' }}>
 <TitleF name='Formulas for Quadratic Equations' />
 <Text></Text>
<Text></Text>


<Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/fakultet-76497.appspot.com/o/Quadratic.png?alt=media&token=a045f72d-ed7f-42df-bf10-4f6e2852a694'}}
       style={{width: 242, height: 276}} />

<Text></Text>
  <Button
          title="Home"
           color="#0000b3"
          onPress={() => this.props.navigation.navigate('Home')}
        />
       
      
      </ScrollView>
    );
  }
}
