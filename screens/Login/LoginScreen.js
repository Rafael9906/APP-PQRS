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
  TouchableHighlight,
  Keyboard
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './LoginStyle'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ConsultScreen from '../Consult/ConsultScreen';





class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Cuenta', header:null
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

  goSecond = () => {
    this.props.navigation.navigate('consult');
    

  }

  render() {


    return(

      <View style={styles.container}>  


      {
        this.state.content ?

        <TouchableOpacity  onPress={this.goSecond}activeOpacity = {.4} style = {styles.TouchableOpacityStyle} >
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

export default Consult = createStackNavigator({
  first:{screen: LoginScreen},
  consult:{ screen: ConsultScreen}
},

{
  navigationOptions: {
      header: null,
  },
});
