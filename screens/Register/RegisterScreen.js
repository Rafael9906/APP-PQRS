import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Picker,
  Navigator,
  View,
  KeyboardAvoidingView
} from 'react-native';
import { WebBrowser } from 'expo';

import { TextInput } from 'react-native-gesture-handler';
import styles from './RegisterStyle';
import Textarea from 'react-native-textarea';


//import LoginScreen from '../screens/LoginScreen';


export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'Registro de PQRS', header:null,
    headerStyle: {
      backgroundColor: 'rgb(32, 53, 70)'
    }
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

<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
<ScrollView style={styles.contentContainer}> 
        <Text style={styles.textStyle}>DATOS PERSONALES</Text>

        <TextInput keyboardType='number-pad' maxLength = {10} label={"Field 1"} returnKeyType = 'next'
         placeholder = 'Identificación'
         onChangeText = {TextInputValue => this.setState({userID: TextInputValue})}
         underlineColorAndroid = 'transparent'
         style = {styles.TextInputStyle}
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
         keyboardType='number-pad' maxLength = {10}
         placeholder = 'Teléfono'
         onChangeText = {TextInputValue => this.setState({userPhone: TextInputValue})}
         underlineColorAndroid = 'transparent'
         style = {styles.TextInputStyle2}

       />

        <Text style={styles.textStyle}>PQRS</Text>

      <Picker 
        selectedValue={this.state.userPQRS}
        style={styles.pickerStyle}
        onValueChange={(TextInputValue) =>
        this.setState({userPQRS: TextInputValue})
        }>
        <Picker.Item label="Seleccione el tipo de PQRS..." value="0" />
        <Picker.Item label="Petición" value="1" />
        <Picker.Item label="Reclamo" value="2" />
        <Picker.Item label="Queja" value="4" />
        <Picker.Item label="Sugerencia" value="5" />
      </Picker>

      <Textarea
    containerStyle={styles.textareaContainer}
    style={styles.textarea}
    maxLength={100}
    placeholder={'Comentarios'}
    onChangeText = {TextInputValue => this.setState({userComent: TextInputValue})}
    placeholderTextColor={'#fff'}
    underlineColorAndroid={'transparent'}
  />
        



        {/* <TextInput ref={input => { this.inputs['field5'] = input }}
         placeholder = 'Comentarios'
         onChangeText = {TextInputValue => this.setState({userComent: TextInputValue})}
         underlineColorAndroid = 'transparent'
         style = {styles.TextInputStyle3}
       /> */}

      
         <TouchableOpacity  onPress={this.InsertUsers}activeOpacity = {.4} style = {styles.TouchableOpacityStyle} >
         <Text style={styles.textStyle1 }>Registrar</Text>
         </TouchableOpacity>
         </ScrollView>

  </KeyboardAvoidingView>
      )};       

    }
    







    