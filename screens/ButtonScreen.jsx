import React, {useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {Display} from '../utils';
import {useNavigation} from '@react-navigation/native';

function ButtonScreen() {
  const user = useSelector(state => state.formData);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.label}>Hey {user.name}dev </Text>
      </View>
      <View style={styles.rounds}>
        <TouchableOpacity
          style={styles.roundOne}
          onPress={() => navigation.navigate('Find')}>
          <Text style={styles.textOne}> Find Ride</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roundTwo}
          onPress={() => navigation.navigate('Create')}>
          <Text style={styles.textTwo}> Create Ride</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: Display.setWidth(100),
    height: Display.setHeight(100),
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#364547',
  },
  topBar: {
    width: Display.setWidth(100),
    height: Display.setHeight(10),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'left',
    padding: 10,
  },
  label: {
    fontWeight: '400',
    fontSize: 20,
    marginBottom: 5,
    color: 'white',
    textTransform: 'capitalize',
  },

  rounds: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: Display.setHeight(75),
    gap: 20,
    // backgroundColor: 'blue',
    // width: Display.setWidth(30),
  },
  roundOne: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: Display.setWidth(60),
    height: Display.setHeight(30),
    borderRadius: Display.setHeight(30) / 2,
    backgroundColor: '#FFAC2E',
  },
  textOne: {
    color: 'black',
    fontWeight: '800',
    fontSize: 20,
  },
  roundTwo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: Display.setWidth(60),
    height: Display.setHeight(30),
    borderRadius: Display.setHeight(30) / 2,
    backgroundColor: '#D9D9D9',
  },
  textTwo: {
    color: 'black',
    fontWeight: '800',
    fontSize: 20,
  },
});
export default ButtonScreen;
