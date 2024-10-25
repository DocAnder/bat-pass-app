import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './styles';

interface InputTextProps{
  pass:string
}

export function InputText(props: InputTextProps) {
  return (    
      <TextInput style={styles.input}
      placeholder='pass'
      value={props.pass}>
      </TextInput>    
  );
}