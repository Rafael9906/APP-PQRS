import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Picker,
  View,
  Keyboard
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Iniciar sesión',
  };

  constructor(props){
		super(props)
		this.state={
			userId:'',
			userPassword:''
		}
	}

  Login = () =>{
    const {userId,userPassword} = this.state;
    
    //Mandar datos al servidor
    fetch('https://react-connection.000webhostapp.com/usuario/login.php',{
      method: 'POST',
      header:{
        'Accept':'application/json',
        'Content-type':'application/json'
      },
      body:JSON.stringify({
        //Pasar los datos ingresados al servidor
        id: userId,
        password: userPassword

      })

    })
    .then((response)=>response.json())
     .then((responseJson)=>{
       if(responseJson == "ok")
       {
         alert("bien");
       }
       else
       {
         alert("Datos incorrectos");
       }
     })
     .catch((error)=>{
       console.error(error);
     });

    Keyboard.dismiss();


  }

  render() {

    return(

      <View style={styles.container}>  

      <TextInput  keyboardType='number-pad'
      placeholder="Identificación" 
      style = {styles.TextInputStyle2}
      onChangeText={userId => this.setState({userId})}
      />

      <TextInput 
      placeholder="Contraseña" 
      style = {styles.TextInputStyle2}
      secureTextEntry={true}
      onChangeText={userPassword => this.setState({userPassword})}
      />

      <TouchableOpacity  onPress={this.Login}activeOpacity = {.4} style = {styles.TouchableOpacityStyle} >
        <Text style={styles.TextStyle }>Iniciar sesión</Text>
       </TouchableOpacity>

       <TextInput 
      placeholder="Usuario"
      style = {styles.TextInputStyle2}
      onChangeText={userPassword => this.setState({userPassword})}
      />

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