
import { Text } from 'react-native';
export default  function Greet(props) {
    return (
        <Text style={{margin:20}}>Good morning!!{props.name}</Text>
    )
}