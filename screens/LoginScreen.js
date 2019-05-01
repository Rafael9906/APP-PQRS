import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Picker,
  View
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Iniciar sesión',
  };

  render() {

    return(

      <View style={styles.container}>  

      <TextInput placeholder="Identificación" style = {styles.TextInputStyle2}/>
      <TextInput placeholder="Contraseña" style = {styles.TextInputStyle2}/>

      </View>

    )
    
  
  }
}


//Estilos


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    marginTop: 5,
    backgroundColor: '#fff',
  },
  TextInputStyle:
  {
    textAlign: 'center',
    marginBottom: 7,
    width:'90%',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000'
  },
  TextInputStyle2:
  {
    textAlign: 'center',
    marginBottom: 7,
    marginTop: 20,
    width:'90%',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000'
  },
  TextInputStyle3:
  {
    textAlign: 'center',
    marginBottom: 7,
    marginTop: 20,
    width:'90%',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#FF0000'
  },

  TextStyle: {
    color:'#fff',
    textAlign: 'center'
  },

  TouchableOpacityStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 7,
    width: '90%',
    backgroundColor: '#00BCD4'

  }
  
});