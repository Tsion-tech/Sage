import { View,Text,Button } from "react-native";
import About from "./About";
export default function Home({navigation}){
    return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text> Home Page</Text>
            <Button title="About" onPress={()=>navigation.navigate("About")}/>
            </View>
    )
}