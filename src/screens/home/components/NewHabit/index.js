import React, { useState } from 'react';
import { KeyboardAvoidingView, Modal, Platform, Pressable, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Text from '../../../../components/Text';
import BaseView from '../../../../components/BaseView';
import NavBar from '../../../../components/NavBar';
import Icons from '../../../../components/Icons';
import useHabits from '../../../../hooks/Habits';
import Constants from '../../../../components/Constants';

function NewHabit({ visible, setIsVisible }) {
  const { addHabit } = useHabits();

  const [name, setName] = useState('');

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
            <View>
              <Text
                style={{
                  fontFamily: Constants.FontNames.Primary.Bold,
                  marginBottom: 10,
                }}
              >
                Title
              </Text>
              <TextInput
                onChangeText={setName}
                style={{
                  backgroundColor: '#1F222A',
                  color: 'white',
                  height: 56,
                  fontFamily: Constants.FontNames.Primary.SemiBold,
                  paddingHorizontal: 20,
                  borderRadius: 10,
                }}
                placeholder="Type the new Habit name"
                placeholderTextColor={Constants.Colors.Secondary.gray}
              />
            </View>
          </View>

          <View style={{ marginBottom: 80 }}>
            <Pressable
              style={{
                width: '100%',
                height: 60,
                backgroundColor: Constants.Colors.Primary.info,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}
              onPress={() => {
                setIsVisible(false);
                addHabit({ text: name });
              }}
            >
              <Text.Heading
                style={{
                  fontSize: Constants.FontSizes.HeadingSize.small,
                  fontFamily: Constants.FontNames.Primary.Bold,
                }}
              >
                Add
              </Text.Heading>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </BaseView>
    </Modal>
  );
}

export default NewHabit;
