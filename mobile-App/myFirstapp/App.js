
import {  Text, View,Image, Pressable, } from 'react-native';
import { TextInput ,Button} from 'react-native';

export default function App() {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      
    <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6zoRR_FPG7f2knECoYTgOuETejMYPg71vg&s"}} style={{width:385,height:200}}/>
    <br/> <br/>
    <Text style={{ fontWeight:"bold", margin:20,padding:"10px",fontSize:30,color:"purple"}}> My first  react-native app ! </Text>
    <Image source={require("./assets/favicon.png")}
      style={{width:70,height:70}}  />
      <br/> <br/>
      
      <TextInput
      placeholder="Enter Name"
      style={{borderWidth:1,padding:10}}/>
      <br/> <br/>

      <Button title="Click me" onPress={()=>alert("Clicked")}
        style={{margin:10}}/>
        <br/> <br/>
      <Pressable onPress={()=> alert("Pressable")}>
        <Text>click me</Text>
      </Pressable>
      <Swich value={on} onValueChange={(value)=>setOn(value)} />
  
    </View>
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
