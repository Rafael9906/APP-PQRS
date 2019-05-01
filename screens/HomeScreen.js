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
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import { StackNavigator } from 'react-navigation';
import { TextInput } from 'react-native-gesture-handler';





export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Registro de PQRS'
  };

    constructor(props){
      super(props)
      this.state={
        userID:'',
        userName:'',
        userEmail:'',
        userPhone: '',
        userPQRS: '',
        userComent: ''
      }
    }

    InsertUsers = () => {
      const {userID,userName,userEmail,userPhone,userPQRS,userComent} = this.state;

      fetch('https://react-connection.000webhostapp.com/usuario/insert.php',{
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          id: userID,
          nombre: userName,
          correo: userEmail,
          telefono: userPhone,
          pqrs: userPQRS,
          comentario: userComent
        })
      }).then((response)=>response.json())
        .then((responseJson) => {
          alert(responseJson);
        }).catch((error) =>{
          console.error(error);
        })

    }

    render() {
      
      return (
        <View style={styles.container}>
        <Text>DATOS PERSONALES</Text>

        <TextInput keyboardType='number-pad' maxLength = {10}
         placeholder = 'Identificación'
         onChangeText = {TextInputValue => this.setState({userID: TextInputValue})}
         underlineColorAndroid = 'transparent'
         style = {styles.TextInputStyle2}
       />

       <TextInput
         placeholder = 'Nombre'
         onChangeText = {TextInputValue => this.setState({userName: TextInputValue})}
         underlineColorAndroid = 'transparent'
         style = {styles.TextInputStyle2}
       />

       <TextInput
         placeholder = 'Correo electrónico'
         onChangeText = {TextInputValue => this.setState({userEmail: TextInputValue})}
         underlineColorAndroid = 'transparent'
         style = {styles.TextInputStyle2}
       />

       <TextInput keyboardType='number-pad' maxLength = {10}
         placeholder = 'Teléfono'
         onChangeText = {TextInputValue => this.setState({userPhone: TextInputValue})}
         underlineColorAndroid = 'transparent'
         style = {styles.TextInputStyle2}
       />

        <Text>PQRS</Text>

      <Picker
        selectedValue={this.state.language}
        style={{height: 100, width: 100}}
        onValueChange={(TextInputValue) =>
          this.setState({userPQRS: TextInputValue})
        }>
        <Picker.Item label="Tipo de PQRS" value="0" />
        <Picker.Item label="Petición" value="1" />
        <Picker.Item label="Queja" value="2" />
        <Picker.Item label="Reclamo" value="3" />
        <Picker.Item label="Sugerencia" value="4" />
      </Picker>
        

        <TextInput
         placeholder = 'Comentarios'
         onChangeText = {TextInputValue => this.setState({userComent: TextInputValue})}
         underlineColorAndroid = 'transparent'
         style = {styles.TextInputStyle3}
       />

      
         <TouchableOpacity  onPress={this.InsertUsers}activeOpacity = {.4} style = {styles.TouchableOpacityStyle} >
         <Text style={styles.TextStyle }>Registrar</Text>
         </TouchableOpacity>

         </View>
      )}; 

    }

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

  },

  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
