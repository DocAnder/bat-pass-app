import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {},

  title:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#FFE608',
    textShadowColor: 'black', // Cor da sombra (usada para a borda)
    textShadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
    textShadowRadius: 1, // Desfoque da sombra (ajusta a suavidade) 
    paddingBottom: 15   
  },


});