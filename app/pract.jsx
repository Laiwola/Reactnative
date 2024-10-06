import { Text, View,TextInput,StyleSheet,Button,Image,
    SafeAreaView,StatusBar,
    FlatList,ScrollView,ActivityIndicator,
    Modal,
   
  
  
  } from "react-native";
  import { useState } from "react";
  const Logo= require('../assets/images/adaptive-icon.png')
  
  
  export default function Index() {
    const [name,setName]=useState('ibraim')
    const textchange=()=>{
      setName('laiwola')
      if (name=='laiwola'){
        setName('ibrahim')
      }
    }
   
    return (
     
      <View style={style.container}>
        <StatusBar backgroundColor='white'hidden={false}/>
        <View style={{backgroundColor:'green', width:100,height:100}}>
  {/* <Image source={Logo}/> */}
        </View>
  
   
        <Text style={style.text} onPress={textchange}>Hello {name}</Text>
        <TextInput style={style.input} value={name}/>
        <Button title="click me" onPress={textchange} />
  
      
      </View>
    )
  }
  const style=StyleSheet.create({
  container:{
    flex:1,
    paddingTop:StatusBar.currentHeight,
    backgroundColor:'blue',
    alignItems:'center',
    justifyContent:"center"
  
  },
   listcon:{
    flex:1,
    paddingHorizontal:16
  }, 
  label:{
    fontSize:15,
    marginBottom:5,
    fontWeight:'bold'
  },
  input:{
    height:40,
    borderColor:'#ddd',
    borderWidth:1,
    marginBottom:15,
    padding:10,
    borderRadius:5
  
  },
  Image:{
    width:200,
    height:200,
    alignSelf:'center',
    marginBottom:50
  },
  card:{
    backgroundColor:'white',
    padding:16,
    borderRadius:8,
    borderWidth:1
  },
  Bodytext:{
    fontSize:24,
    color:'black'
  },
  loading:{
    flex:1,
    backgroundColor:"white",
    paddingTop:StatusBar.currentHeight,
    justifyContent:'center',
    alignItems:"center"
  },
   InputCon:{
  backgroundColor:'white',
  padding:16,
  borderRadius:8,
  borderWidth:1,
  margin:16
  },
  text:{
    color:'white',
    fontSize:25
  }
  
  })