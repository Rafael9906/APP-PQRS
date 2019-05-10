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



export default class RegisterScreen extends React.Component {
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

    // variable to hold the references of the textfields
inputs = {};
// function to focus the field
focusTheField = (id) => {
  this.inputs[id].focus();
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

        <TextInput keyboardType='number-pad' maxLength = {10} label={"Field 1"} returnKeyType = 'next'
         placeholder = 'Identificación'
         onChangeText = {TextInputValue => this.setState({userID: TextInputValue})}
         underlineColorAndroid = 'transparent'
         style = {styles.TextInputStyle2}
         onSubmitEditing={() => { this.focusTheField('field2'); }}

       />

       <TextInput  ref={input => { this.inputs['field2'] = input }}
         label={"Field 2"} returnKeyType = 'next'
         placeholder = 'Nombre'
         onChangeText = {TextInputValue => this.setState({userName: TextInputValue})}
         underlineColorAndroid = 'transparent'
         style = {styles.TextInputStyle2}
         onSubmitEditing={() => { this.focusTheField('field3'); }}
       />

       <TextInput  ref={input => { this.inputs['field3'] = input }}
         keyboardType='email-address' returnKeyType = 'next' 
         label={"Field 3"}
         placeholder = 'Correo electrónico'
         onChangeText = {TextInputValue => this.setState({userEmail: TextInputValue})}
         underlineColorAndroid = 'transparent'
         style = {styles.TextInputStyle2}
         onSubmitEditing={() => { this.focusTheField('field4'); }}
       />

       <TextInput ref={input => { this.inputs['field4'] = input }}
         keyboardType='number-pad' maxLength = {10} returnKeyType = 'next'
         placeholder = 'Teléfono'
         onChangeText = {TextInputValue => this.setState({userPhone: TextInputValue})}
         underlineColorAndroid = 'transparent'
         style = {styles.TextInputStyle2}
         onSubmitEditing={() => { this.focusTheField('field5'); }}

       />

        <Text>PQRS</Text>

      <Picker 
        selectedValue={this.state.userPQRS}
        style={{height: 30, width: 200}}
        onValueChange={(TextInputValue) =>
        this.setState({userPQRS: TextInputValue})
        }>
        <Picker.Item label="Tipo de PQRS" value="0" />
        <Picker.Item label="Petición" value="1" />
        <Picker.Item label="Queja" value="2" />
        <Picker.Item label="Reclamo" value="3" />
        <Picker.Item label="Sugerencia" value="4" />
      </Picker>
        

        <TextInput ref={input => { this.inputs['field5'] = input }}
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

  }
  
});
