import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Alert, 
  Dimensions, 
  Platform 
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../redux/userSlice';

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.user);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hovered, setHovered] = useState(false);

  const handleSignup = async () => {
    if (!name || !email || !password) {
      return Alert.alert('Error', 'Please fill in all fields');
    }

    const result = await dispatch(
      signupUser({ name, email, password, role: 'client' })
    );

    if (result.meta.requestStatus === 'fulfilled') {
      navigation.replace('Dashboard');
    } else {
      Alert.alert('Signup Failed', result.payload?.message || 'Error signing up');
    }
  };

  const windowWidth = Dimensions.get('window').width;
  const cardWidth = windowWidth > 500 ? 420 : '90%';

  return (
    <View style={styles.container}>
      <View style={styles.background} />

      <View
        style={[styles.card, { width: cardWidth }, hovered && styles.cardHover]}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Text style={styles.title}>Sign Up</Text>

        <TextInput
          placeholder="Name"
          placeholderTextColor="#A374FF"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <TextInput
          placeholder="Email"
          placeholderTextColor="#A374FF"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#A374FF"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity 
          style={styles.button} 
          onPress={handleSignup} 
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Signing up...' : 'Sign Up'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.linkText}>
            Already have an account? Sign In
          </Text>
        </TouchableOpacity>

        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  background: { ...StyleSheet.absoluteFillObject, backgroundColor: '#ffffff' },
  card: {
    paddingVertical: 40,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    shadowColor: '#800080',
    shadowOpacity: 0.25,
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 15 },
    elevation: 15,
    minHeight: 500,
    transitionProperty: 'all',
    transitionDuration: '0.3s',
  },
  cardHover: { shadowOpacity: 0.35, shadowRadius: 30, transform: [{ scale: 1.02 }] },
  title: { fontSize: 34, fontWeight: '700', marginBottom: 30, color: '#A374FF' },
  input: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#A374FF',
    borderRadius: 15,
    padding: Platform.OS === 'web' ? 14 : 16,
    marginBottom: 20,
    backgroundColor: '#F9F9FF',
    fontSize: 16,
    color: '#6B1FFF',
  },
  button: { 
    width: '100%', 
    padding: 18, 
    borderRadius: 15, 
    alignItems: 'center', 
    marginTop: 10, 
    backgroundColor: '#A374FF' 
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
  linkText: { marginTop: 20, fontSize: 16, color: '#FF6FD8', textDecorationLine: 'underline' },
  error: { color: 'red', textAlign: 'center', marginTop: 10 },
});

export default SignUp;
