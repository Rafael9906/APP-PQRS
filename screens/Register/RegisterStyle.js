import React from 'react';
import {
    StyleSheet
} from 'react-native';


    //Estilos

    const styles = StyleSheet.create({
        container: {
          alignItems: "center",
          flex: 1,
          //marginTop: 20,
          backgroundColor: 'rgb(32, 53, 70)'
        },
        contentContainer:{
          width: "100%",
          marginLeft:30
        },
        textStyle:
        {
          fontWeight: 'bold',
          color: '#f7c744',
          textAlign: 'center',
          marginTop: 30
        },
        textStyle1:
        {
          fontWeight: 'bold',
          color: 'rgb(32, 53, 70)',
          textAlign: 'center',
        },
        TextInputStyle:
        {
          textAlign: 'center',
          marginTop: 25,
          marginBottom: 7,
          width:'90%',
          height: 40,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: '#000',
          backgroundColor: 'rgba(255,255,255,0.2)',
          color: '#fff'
        },
        TextInputStyle2:
        {
          textAlign: 'center',
          marginBottom: 7,
          marginTop: 15,
          width:'90%',
          height: 40,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: '#000',
          backgroundColor: 'rgba(255,255,255,0.2)',
          color: '#fff'

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
          borderColor: '#FF0000',
          backgroundColor: 'rgba(255,255,255,0.2)',
          color: '#fff'
        },
      
        TouchableOpacityStyle: {
          paddingTop: 10,
          paddingBottom: 10,
          borderRadius: 5,
          marginTop: 15,
          marginBottom: 7,
          width: '90%',
          backgroundColor: '#f7c744',
          color: 'rgb(32, 53, 70)',
        },
        textareaContainer: {
          height: '15%',
          width: '90%',
          padding: 5,
          backgroundColor: 'rgba(255,255,255,0.2)',
          marginTop: 15
        },
        textarea: {
          textAlignVertical: 'top',  
          height: 100,
          fontSize: 14,
          color: '#fff',
        },
        pickerStyle:
        {
          marginTop:15,
          height: '5%', 
          width: '90%',
          //backgroundColor: 'rgba(255,255,255,0.2)',
          color: '#fff'
        }
        
      });
    export default styles;