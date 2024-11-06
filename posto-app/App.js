import React  from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image,TextInput,Modal, TouchableOpacity ,Button} from 'react-native';

export default function App() {
  const [alc,setAlc] = useState('');
  const [gas,setGas] = useState('');
  const[Resultado,setResultado] = useState(true)
  const[combustivel,setCombustivel] =useState('Alcool')
  function Calc(){
    let conta = alc/gas
    if (conta > 0.7){
     setResultado(true);
     setCombustivel('Gasolina')
    }
    else{
      setResultado(true);
     setCombustivel('Alcool')
    }
  }
  return (
    <View style={styles.container}>
      <Image
      source={require('./assets/bomb.jpg')}
      style={styles.img}
      />
      <Text style={{fontSize:30,fontWeight:'bold', marginTop:25, color:'white'}}>Qual a melhor opçao?</Text>
      
      
      <View style={styles.areaPrecos}>
      <Text style={styles.texto}>Alcool(preço por litro):</Text>
      
      <TextInput
      style={styles.input}
      placeholder='Digite o Valor'
      keyboardType='numeric'
      value={alc}
      onChangeText={setAlc}
      
      
      />
      <Text style={styles.texto}>Gasolina(preço por litro):</Text>
      
      <TextInput
      style={styles.input}
      placeholder='Digite o Valor'
      keyboardType='numeric'
      value={gas}
      onChangeText={setGas}
      />
      <TouchableOpacity style={styles.areaBtn} onPress={Calc}>
        <Text style={styles.btn}>Calcular</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
      <View>
      <Modal
        animationType="slide" // Tipo de animação (pode ser 'none', 'slide', 'fade')
        transparent={true} // Define se o fundo do modal será transparente
        visible={Resultado} // Controla se o modal está visível ou não
        onRequestClose={() => setResultado(false)} // Fecha o modal ao clicar no botão de fechar
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
              <Image
                source={require('./assets/gasolina.jpg')}
                  style={styles.img}
                  />
            <Text style={{color:'#00ff00',fontSize:30,fontWeight:'bold',}}>Compensa usar {combustivel}</Text>
            <Text style={{color:'white'}}>Com os Preços:</Text>
            <Text style={styles.texto}>Alcool R$: {alc}</Text>
              <Text style={styles.texto}>Gasolina R$: {gas} </Text>
            <Button
              title="Calcular Novamente"
              onPress={() => setResultado(false)} // Fecha o modal
            />
          </View>
        </View>
      </Modal>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    paddingTop:150
  },
  img:{
    borderRadius:100,
    height:200,
    width:150
  },
  input:{
    borderWidth:1,
    width:370,
    borderRadius:5,
    height:40,
    backgroundColor:'#FFF'
  },
  texto:{
    fontWeight:'bold',
    color:'#FFF'
  },
  areaPrecos:{
    marginTop:70,
    
  },
  btn:{
    color:'#FFF',
    fontSize:30,
    fontWeight:'bold',

    
  },areaBtn:{
      alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    backgroundColor: '#00BFFF',
    borderRadius:5
  },modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semi-transparente
  },
  modalContent: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    height:'100%',
    alignItems: 'center',
  },
});
