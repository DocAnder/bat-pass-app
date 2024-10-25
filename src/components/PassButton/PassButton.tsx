import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { InputText } from '../TextInput/InputText';

export function PassButton() {
  return (
    <>
    <InputText />


    <TouchableOpacity
    onPress={() => {console.log("GENERATOR!")}}>
        <Text style={styles.buttonText}>GENERATOR</Text>
    </TouchableOpacity>

    <Pressable
    onPress={() => {console.log("COPY!")}}>
        <Text style={styles.buttonText}>📥  COPY</Text>
    </Pressable>
    </>    
  );
}