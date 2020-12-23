import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';

export default function App() {

  const [cep, setCep] = useState('')
  const [endereco, setEndereco] = useState('')
  const [cidade, setCidade] = useState('')
  const [ddd, setDDD] = useState('')
  const [bairro, setBairro] = useState('')
  const [estado, setEstado] = useState('')
  
  const guardarCEP = (value) =>{
    setCep(value)
  }

  const buscar = async () => {

    let url = 'https://cep.awesomeapi.com.br/json/' + cep
    let result = await fetch(url)
    var dados = await result.json()
    console.log(dados)
    
    if(dados.code == 'invalid'){
      Alert.alert('Erro!','CEP INVALIDO!')
    }
    else if (dados.code == 'not_found'){
      Alert.alert('Erro!','CEP NÃO ENCONTRADO!')
    }

    setEndereco(dados.address_name)
    setCidade(dados.city)
    setDDD(dados.ddd)
    setBairro(dados.district)
    setEstado(dados.state)

  }

  return (
    <View style={styles.container}>

      <View style={styles.container1}>
        <Text style={styles.titulo}>Infos CEP</Text>
        <Image style={styles.imagem} source={require('./imagens/imagemInfosCEP.png')}></Image>
      </View>

      <View style={styles.container2}>
        <TextInput style={styles.input} placeholderTextColor='white' placeholder='Digite o CEP' onChangeText={guardarCEP} keyboardType = 'numeric'/>

        <View style={styles.conteinerBOTAO}>
          <Button color= '#9932CC' title='Procurar Infos' onPress={buscar}></Button>
        </View>

      </View>

      <View style={styles.containerTextos}>
        <Text style={styles.textos}>Cidade: {cidade} </Text>
        <Text style={styles.textos}>Rua: {endereco} </Text>
        <Text style={styles.textos}>DDD: {ddd} </Text>
        <Text style={styles.textos}>Bairro: {bairro}</Text>
        <Text style={styles.textos}>Estado: {estado}</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.textoFooter}>Desenvolvido por Gabriel Duete</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#FFE4E1',
  },

  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#4B0082',
    marginTop: 50,
    textShadowColor: '#4B0082',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 20,

  },

  container1: {
    marginTop: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },

  container2:{
    alignItems: 'center',
  },

  imagem: {
    width: 50,
    height: 50,
    marginLeft: 10,
    marginTop: 30
  },

  containerTextos:{
    height: 200,
    width:  260,
    backgroundColor: '#4B0082',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 30,
    textAlign: 'right',
  },

  textos: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'right',
    alignSelf: 'flex-start',

  },

  conteinerBOTAO: {
    marginTop: 8,  
  },

  input: {
    width: 200,
    backgroundColor: '#4B0082',
    height: 50,
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 30,
    color: 'white',
  },

  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    padding: 10,
    marginTop: 140
  },

  textoFooter: {
    color: '#4B0082'
  }
});
