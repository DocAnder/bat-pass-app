import React, { useState } from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { styles } from './styles';
import { InputText } from '../TextInput/InputText';
import generatePassword from '../../services/passwordService';

export function PassButton() {

  const [pass, setPass] = useState('')

  function handleGeneretorButton(){
    let passwordToken = generatePassword()
    setPass(passwordToken)
  }

  function handleCopyButton(){
    Clipboard.setStringAsync(pass);
  }

  return (
    <>
    <InputText pass={pass}/>


    <TouchableOpacity
    onPress={handleGeneretorButton}>
        <Text style={styles.buttonText}>GENERATOR</Text>
    </TouchableOpacity>

    <Pressable
    onPress={handleCopyButton}>  
        <Text style={styles.buttonText}>📥  COPY</Text>
    </Pressable>
    </>    
  );
}