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
  Button,
  Keyboard
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { createStackNavigator, createAppContainer } from 'react-navigation';




export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Cuenta',
  };

  constructor(props){
		super(props)
		this.state={
			userId:'',
      userPassword:'',
      content: false,
      content1: true
		}
  }

  
  
  componentHideAndShow = () => {
    this.setState(previousState => ({ content: !previousState.content }))
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
         this.setState(previousState => ({ content: !previousState.content }))
         this.setState(previousState => ({ content1: !previousState.content1 }))

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

            

      {
        this.state.content ?

        <TouchableOpacity  onPress={this.Login}activeOpacity = {.4} style = {styles.TouchableOpacityStyle} >
        <Text style={styles.TextStyle }>Consultar</Text>
        </TouchableOpacity>
        
        :null
      }

      {
          this.state.content ?

        <TouchableOpacity  onPress={this.Login}activeOpacity = {.4} style = {styles.TouchableOpacityStyle} >
        <Text style={styles.TextStyle }>Cerrar sesión</Text>
        </TouchableOpacity>

        :null
      }

      {
        this.state.content1 ?

        <TextInput  keyboardType='number-pad'maxLength = {11}
        placeholder="Identificación" 
        style = {styles.TextInputStyle2}
        onChangeText={userId => this.setState({userId})}
        />

        :null

      }

      {
        this.state.content1 ?
          <TextInput 
          placeholder="Contraseña"  maxLength = {6}
          style = {styles.TextInputStyle2}
          secureTextEntry={true}
          onChangeText={userPassword => this.setState({userPassword})}
          />

        :null
      }

      {
        this.state.content1 ?

        <TouchableOpacity  onPress={this.Login}activeOpacity = {.4} style = {styles.TouchableOpacityStyle} >
        <Text style={styles.TextStyle }>Iniciar sesión</Text>
       </TouchableOpacity>

        :null
      }
  
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