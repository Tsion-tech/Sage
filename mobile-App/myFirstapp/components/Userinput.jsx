import { TextInput, Text ,View, Button } from "react-native"; 
import {useState} from "react";
export default function Userinput() {
     const [name,setName]= useState("");
         const [password,setPassword]= useState("");
  return (
   
    <View style={{ padding:20}}>
    <TextInput
      placeholder="Enter Name"
      value={name}
      onChangeText={setName}
      style={{ borderWidth: 2, padding: 10 ,}}
    />
    <Text style={{margin:10}}>Your name is:{name}</Text>
    <TextInput
      placeholder="Enter Password"
      secureTextEntry
      value={password}
      onChangeText={setPassword}
      style={{ borderWidth: 2, padding: 10 ,margin:10}}
    />
    <Button title="submit" onPress={()=>alert("name:"+name+ "password:"+password)}/>
    </View>
  );
}