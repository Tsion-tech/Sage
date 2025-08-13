
import { useState } from 'react';
import { Text, View, Image, Pressable, Switch, SafeAreaView, ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TextInput, Button } from 'react-native';
import Greet from './components/Greet';
import Userinput from './components/Userinput';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/pages/Home';
import About from './components/pages/About';

const Stack = createNativeStackNavigator();
export default function App() {
  // const [on,setOn]=useState(false)

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>

    // <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>

    //   <Greet  name="Tsion"/>
    //   <Userinput/>

    // <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6zoRR_FPG7f2knECoYTgOuETejMYPg71vg&s"}} style={{width:385,height:200}}/>

    // <Text style={{ fontWeight:"bold", margin:20,padding:"10px",fontSize:30,color:"purple"}}> My first  react app !! </Text>
    // <ActivityIndicator size="large" color="purple"  />
    // <Image source={require("./assets/favicon.png")}
    //   style={{width:50,height:50,margin:10}}  />


    //   <TextInput
    //   placeholder="Enter Name"
    //   style={{borderWidth:1,padding:10,margin:10}}/>


    //   <Button title="Click me" onPress={()=>alert("Clicked")}
    //     style={{margin:10}}/>

    //   <Pressable style={{margin:10}} onPress={()=> alert("Pressable")}>
    //     <Text>click me</Text>
    //   </Pressable>
    //   <Switch value={on} onValueChange={(value)=>setOn(value)} />

    // </View>


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
