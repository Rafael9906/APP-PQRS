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
  ActivityIndicator
} from 'react-native';

export default class ConsultScreen extends React.Component {
  static navigationOptions = {
    title: 'Consultar',
  };	

  ShowUsers = () => {
    //this.props.navigation.navigate('')
    alert(responseJson);

  }

  constructor(props){
    super(props)
    this.state = {
      isLoding: true,
      content: true
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

    alert(id_usuario);

  }

  ListViewItemSeparator = () => {
    return(
      <View
      style = {{
       height: .5,
       width: '100%',
       backgroundColor: '#2196F3'
      }} 
      /> 
    )
  }

  render() {


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
          {rowData.numero_radicado} -> {rowData.comentarios}
          </Text>
          }

        />
        
        :null
      }


 
        <TouchableOpacity  onPress={this.componentHideAndShow}activeOpacity = {.4} style = {styles.TouchableOpacityStyle} >
         <Text style={styles.TextStyle }>Consultar</Text>
        </TouchableOpacity>

          

      </View>

     

    );
  }
}

//Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    marginLeft: 25,
    backgroundColor: '#fff',
  },

  TouchableOpacityStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 7,
    width: '90%',
    backgroundColor: '#00BCD4'
  },

  ContainerDataUser: {
    flex:1,
    paddingTop:20,
    marginLeft:5,
    marginRight:5
  },

  rowViewContainer: {
    textAlign: 'center',
    fontSize:20,
    paddingTop:10,
    paddingRight:10,
    paddingBottom:10
  },

  TextStyle: {
    color:'#fff',
    textAlign: 'center'
  }
});
