
import { Button,Image,Text,View } from 'react-native';
import { Camera,CameraView } from 'expo-camera';
import { useEffect,useState,useRef } from 'react';


export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const[photo, setPhoto] = useState(null);
  const cameraRef = useRef(null);
  useEffect(async()=>{
    const {status}= await Camera.requestCameraPermissionsAsync();
    setHasPermission(status == 'granted');
  },[])
  async function takePhoto() {
    if (cameraRef.current) {
      const data = await cameraRef.current.takePictureAsync();
      setPhoto(data.uri);
    }
    }

  if (hasPermission === null) {
    return <Text>Requesting permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No Permission Granted!</Text>;
  }

  return(
    <View style={{flex:0}}>
      <CameraView style={{height:500}} ref={cameraRef}/>
        <Button title="Take Photo" onPress={takePhoto} />
        {photo && <Image source={{ uri: photo }} style={{ height: 300 }} />}
      
    </View>
  )
  }
  
  



