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
  Keyboard,
  Alert,
  AsyncStorage
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



//   async checkUserSignedIn(){
//     let context = this;
//     try {
//        let value = await AsyncStorage.getItem('user');
//        if (value != null){
//           // do something 
//           this.setState(previousState => ({ content: !previousState.content }));
//           this.setState(previousState => ({ content1: !previousState.content }));
//        }
//        else {
//           // do something else
//       }
//     } catch (error) {
//       // Error retrieving data
//     }
// }


  
  
  componentHideAndShow = () => {
    this.setState(previousState => ({ content: !previousState.content }))
  }
 

  Login = () =>{

    const arrayData = [];
    const {userId,userPassword} = this.state;
    
    //Mandar datos al servidor
    fetch('http://144.217.85.47/pqrs/user/login.php',{
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
         let user = this.state.userId;
         AsyncStorage.setItem('user', user)

        //  const data = {
        //    id:this.state.userId,
        //    //password:this.state.userPassword
        //  }
        //  arrayData.push(user);

        //  try{
        //   AsyncStorage.getItem('database').then((value)=> {
        //     if(value!==null){
        //       const d = JSON.parse(value);
        //       d.push(data)
        //       AsyncStorage.setItem('database', JSON.stringify(d))

        //     }else{
        //       AsyncStorage.setItem('database',JSON.stringify(arrayData))
        //       // .then(() => {
                
        //       // })
        //     }
        //   })
        //  }
        //  catch(error){

        //  }

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

  close= () =>{
    AsyncStorage.removeItem('user');
    this.setState(previousState => ({ content: !previousState.content }))
    this.setState(previousState => ({ content1: !previousState.content1 }))
  }
 
  
  goSecond = () => {
    this.props.navigation.navigate('consult');
  }

  inputs = {};
// function to focus the field
focusTheField = (id) => {
  this.inputs[id].focus();
}

  render() {

  

    return(

      <View style={styles.container}>  

      {
        this.state.content1 ?

        <Text style={styles.textStyle}>INICIAR SESIÓN</Text>
        :null
      }

      {
        this.state.content ?

        <Text style={styles.textStyle}>CUENTA</Text>
        :null
      }


      {
        this.state.content ?

        <TouchableOpacity  onPress={this.goSecond}activeOpacity = {.4} style = {styles.TouchableOpacityStyle1} >
        <Text style={styles.textOpacityStyle}>Consultar</Text>
        </TouchableOpacity>
        
        :null
      }

      {
          this.state.content ?

        <TouchableOpacity  onPress={this.close}activeOpacity = {.4} style = {styles.TouchableOpacityStyle1} >
        <Text style={styles.textOpacityStyle }>Cerrar sesión</Text>
        </TouchableOpacity>

        :null
      }

      {
        this.state.content1 ?

        <TextInput  keyboardType='number-pad'maxLength = {11} label={"Field 1"} returnKeyType = 'next'
        placeholder="Identificación" 
        style = {styles.TextInputStyle}
        onChangeText={userId => this.setState({userId})}
        onSubmitEditing={() => { this.focusTheField('field2'); }}
        />

        :null

      }

      {
        this.state.content1 ?
          <TextInput ref={input => { this.inputs['field2'] = input }}
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
        <Text style={styles.textOpacityStyle }>Iniciar sesión</Text>
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
