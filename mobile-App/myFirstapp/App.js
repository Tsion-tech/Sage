
import { useState } from 'react';
import {  Text, View,Image, Pressable,Switch,SafeAreaView } from 'react-native';
import { TextInput ,Button} from 'react-native';

export default function App() {
  const [on,setOn]=useState(false)
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      
    <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6zoRR_FPG7f2knECoYTgOuETejMYPg71vg&s"}} style={{width:385,height:200}}/>
    
    <Text style={{ fontWeight:"bold", margin:20,padding:"10px",fontSize:30,color:"purple"}}> My first  react app !! </Text>
    <Image source={require("./assets/favicon.png")}
      style={{width:70,height:70,margin:10}}  />
      
      
      <TextInput
      placeholder="Enter Name"
      style={{borderWidth:1,padding:10,margin:10}}/>
      

      <Button title="Click me" onPress={()=>alert("Clicked")}
        style={{margin:10}}/>
        
      <Pressable style={{margin:10}} onPress={()=> alert("Pressable")}>
        <Text>click me</Text>
      </Pressable>
      <Switch value={on} onValueChange={(value)=>setOn(value)} />
  
    </View>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
