import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ListView,
  Button,
  StackNavigator,
  ActivityIndicator,
  Alert,
  AsyncStorage
} from 'react-native';

import styles from './ConsultStyle'


export default class ConsultScreen extends React.Component {
  static navigationOptions = {
    title: 'Consultar', header:null 
  };	

  ShowUsers = () => {
    //this.props.navigation.navigate('')
    Alert.alert(responseJson);

  }

  constructor(props){
    super(props)
    this.state = {
      isLoding: true,
      content: true,
      list: ''
    }

    try{
      AsyncStorage.getItem('database').then((value) =>{
        this.setState({
          list:value
        })
      })

    }
    catch(error){
      console.log(error)
    }
  }

  componentHideAndShow = () => {
    this.setState(previousState => ({ content: !previousState.content }))
  }

  componentDidMount(){
    return fetch('https://react-connection.000webhostapp.com/usuario/view.php')
    .then((response) => response.json())
    .then((responseJson) => {
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2})
      this.setState({
        isLoding: false,
        dataSource: ds.cloneWithRows(responseJson)
      },function(){})
    }).catch((error)=>{
      console.error(error);
    })
  }

  Action_Click(id_usuario, fecha, comentarios){

    Alert.alert(id_usuario);

  }

  ListViewItemSeparator = () => {
    return(
      <View
      style = {{
       height: .5,
       width: '100%',
       backgroundColor: '#f7c744'
      }} 
      /> 
    )
  }

  render() {

    const data = JSON.stringify(this.state.list)


    if(this.state.isLoding)
    {
      return(
        <View style={{flex:1, paddingTop:20}}>
        <ActivityIndicator/>
        
        </View>
      ) 
    }

    return (
      
      <View style={styles.container}>

     {
        // Display the content in screen when state object "content" is true.
        // Hide the content in screen when state object "content" is false. 
        this.state.content ?  
        
        <ListView 
      
          dataSource = {this.state.dataSource}
          renderSeparator = {this.ListViewItemSeparator}
          renderRow = {(rowData) =>
          <Text style = {styles.rowViewContainer} onPress = {this.Action_Click.bind(this,
            rowData.numero_radicado
          )}>
          {rowData.numero_radicado}
          </Text>
          }

        />
        
        :null
      }        

      <Text>{data}</Text> 

      </View>

     

    );
  }
}

