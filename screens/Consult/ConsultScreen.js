import React from 'react';
import {
  Text,
  View,
  ListView,
  ActivityIndicator,
  AsyncStorage,
  Alert
} from 'react-native';

import styles from './ConsultStyle'



export default class ConsultScreen extends React.Component {
  static navigationOptions = {
    title: 'Consultar', header:null 
  };	

  constructor(props){
    super(props)
    this.state = {
      isLoding: true,
      content: true,
      list: ''
    }

    try{
      AsyncStorage.getItem('user').then((value) =>{
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
    return fetch('http://144.217.85.47/pqrs/user/view.php')
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

  Action_Click(id_usuario,comentarios, id_estado_radicado){



    alert('Usuario: '+id_usuario+'\n'+'Comentarios: '+comentarios+'\n'+'Estado: '+id_estado_radicado);
 
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
            rowData.id_usuario, rowData.comentarios, rowData.id_estado_radicado
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

