import React, { useState } from 'react';
import { KeyboardAvoidingView, Modal, Platform, View } from 'react-native';

import BaseView from '../../../../components/BaseView';
import NavBar from '../../../../components/NavBar';
import Icons from '../../../../components/Icons';
import useHabits from '../../../../hooks/Habits';

import InputText from '../../../../components/InputText';
import Button from '../../../../components/Button';

function NewHabit({ visible, setIsVisible }) {
  const { addHabit } = useHabits();

  const [name, setName] = useState('');

  const addNewHabit = () => {
    setIsVisible(false);
    addHabit({ text: name });
  };

  return (
    <Modal transparent animationType="slide" visible={visible}>
      <BaseView style={{ flex: 1 }}>
        <NavBar
          title="New Habit"
          rightComponent={
            <View style={{ transform: [{ rotate: '45deg' }] }}>
              <Icons onPress={setIsVisible} name="plus" width={22} height={22} />
            </View>
          }
        />
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={{ flex: 1 }}>
            <InputText onChange={setName} />
          </View>

          <View style={{ marginBottom: 80 }}>
            <Button onPress={addNewHabit} />
          </View>
        </KeyboardAvoidingView>
      </BaseView>
    </Modal>
  );
}

export default NewHabit;
