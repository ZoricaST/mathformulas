import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class TitleF extends React.Component {
 render() {
    return (
      <View style={{alignItems: 'center', fontWeight: 'bold',color:'#0000b3',fontSize: 25}}>
       
        <Text style={ {fontSize: 20,padding: 10,borderRadius: 1,borderWidth:3,borderColor: '#0000b3', color:'#0000b3'}}> {this.props.name}</Text>
      </View>
    );
  }
}

