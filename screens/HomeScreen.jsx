import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

function HomeScreen() {
  const user = useSelector(state => state.formData);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <Text>{user.name}</Text>

      <Text style={styles.label}>Phone Number:</Text>
      <Text>{formData.phoneNumber}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
});
export default HomeScreen;
