import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {Logo} from '../constants/images';
import {useDispatch, useSelector} from 'react-redux';
import {updateFormData} from '../store/formDataSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {Display} from '../utils';
const Login = () => {
  const [errors, setErrors] = useState({
    name: null,
    phoneNumber: null,
  });

  const dispatch = useDispatch();
  const formData = useSelector(state => state.formData);
  const navigation = useNavigation();
  const handleInputChange = (field, value) => {
    dispatch(updateFormData({[field]: value}));
  };
  const validateForm = () => {
    const newErrors = {
      name: null,
      phoneNumber: null,
    };

    if (formData.name.length <= 2) {
      newErrors.name = 'Name must be longer than 2 characters';
    }

    if (formData.phoneNumber.length !== 10) {
      newErrors.phoneNumber = 'Phone number must be 10 digits';
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.phoneNumber;
  };
  const handleExplorePress = () => {
    if (validateForm()) {
      // Access form data from Redux state
      console.log('Name:', formData.name);
      console.log('Phone Number:', formData.phoneNumber);

      // Save form data to local storage
      // Note: You should handle AsyncStorage operations asynchronously
      AsyncStorage.setItem('formData', JSON.stringify(formData));
      navigation.replace('Options');
    } else {
      Alert.alert('Validation Error', 'Please check the form fields.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image source={Logo} />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Name"
          placeholderTextColor="#8C949C"
          value={formData.name}
          onChangeText={text => handleInputChange('name', text)}
        />
        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="number-pad"
          placeholderTextColor="#8C949C"
          value={formData.phoneNumber}
          onChangeText={text => handleInputChange('phoneNumber', text)}
        />
        {errors.phoneNumber && (
          <Text style={styles.errorText}>{errors.phoneNumber}</Text>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          value={formData.name}
          onChangeText={text => handleInputChange('name', text)}
          style={styles.button}
          onPress={handleExplorePress}>
          <Text style={styles.buttonText}>Explore</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: Display.setHeight(100),
    width: Display.setWidth(100),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#364547',
    gap: 10,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    width: Display.setWidth(100),
  },
  input: {
    width: Display.setWidth(80),
    height: 40,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    color: '#FFB647',
  },
  button: {
    width: Display.setWidth(30),
    height: Display.setHeight(5),
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderColor: '#FFB647',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFB647',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
  },
});
export default Login;
