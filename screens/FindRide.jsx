import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import DateTimePickerModal from '@react-native-community/datetimepicker';

const FindRide = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    selectedTime: new Date(),
  });

  const [formErrors, setFormErrors] = useState({
    from: '',
    to: '',
  });

  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTimePickerChange = (event, selectedTime) => {
    if (selectedTime) {
      setFormData({
        ...formData,
        selectedTime,
      });
    }
    setShowTimePicker(false);
  };

  const handleSubmit = () => {
    // Validation
    const errors = {};

    if (!formData.from) {
      errors.from = 'From field is required';
    }

    if (!formData.to) {
      errors.to = 'To field is required';
    }

    if (Object.keys(errors).length === 0) {
      // Combine the selected time with today's date
      const today = new Date();
      const combinedDateTime = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        formData.selectedTime.getHours(),
        formData.selectedTime.getMinutes(),
        formData.selectedTime.getSeconds(),
      );

      console.log('Form Data:', {
        from: formData.from,
        to: formData.to,
        combinedDateTime,
      });
      
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <View>
      <Text>From:</Text>
      <TextInput
        value={formData.from}
        onChangeText={text => handleInputChange('from', text)}
      />
      <Text style={{color: 'red'}}>{formErrors.from}</Text>

      <Text>To:</Text>
      <TextInput
        value={formData.to}
        onChangeText={text => handleInputChange('to', text)}
      />
      <Text style={{color: 'red'}}>{formErrors.to}</Text>

      <Text>Selected Time: {formData.selectedTime.toTimeString()}</Text>
      <Button title="Pick Time" onPress={() => setShowTimePicker(true)} />

      {showTimePicker && (
        <DateTimePickerModal
          mode="time"
          value={formData.selectedTime}
          onChange={handleTimePickerChange}
        />
      )}

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default FindRide;
