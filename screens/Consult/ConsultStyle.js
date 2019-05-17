import React from 'react';
import {
    StyleSheet
} from 'react-native';
//Estilos
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
      marginLeft: 25,
      backgroundColor: 'rgb(32, 53, 70)',
      height: '100%',
      width: '100%'      
    },
  
    TouchableOpacityStyle: {
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 5,
      marginBottom: 7,
      width: '90%',
      backgroundColor: '#00BCD4'
    },
  
    ContainerDataUser: {
      flex:1,
      paddingTop:20,
      marginLeft:5,
      marginRight:5
    },
  
    rowViewContainer: {
      textAlign: 'center',
      fontSize:20,
      fontWeight: 'bold',
      paddingTop:10,
      paddingRight:10,
      paddingBottom:10,
      color: '#fff'
    },
  
    TextStyle: {
      color:'#fff',
      textAlign: 'center'
    }
  });

  export default styles;