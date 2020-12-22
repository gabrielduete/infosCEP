import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {

  const [cep, setCep] = useState('')
  const [endereco, setEndereco] = useState('')
  const [cidade, setCidade] = useState('')
  const [ddd, setDDD] = useState('')
  const [bairro, setBairro] = useState('')

  const guardarCEP = (value) =>{
    setCep(value)
  }

  const buscar = async () => {
    let url = 'https://cep.awesomeapi.com.br/json/' + cep
    let result = await fetch(url)
    let dados = await result.json()
    console.log(dados)


    setEndereco(dados.address_name)
    setCidade(dados.city)
    setDDD(dados.ddd)
    setBairro(dados.district)
  }

  return (
    <View style={styles.container}>

      <View style={styles.container1}>
        <Text style={styles.titulo}>Infos CEP</Text>
        <Image style={styles.imagem} source={require('./imagens/imagemInfosCEP.png')}></Image>
      </View>

      <View style={styles.container2}>
        <TextInput style={styles.input} placeholder='Digite o CEP' onChangeText={guardarCEP}/>

        <View style={styles.conteinerBOTAO}>
          <Button style={styles.btn} title='Procurar Infos' onPress={buscar}></Button>
        </View>

      </View>


      <View style={styles.containerTextos}>
        <Text style={styles.textos}>Cidade: {cidade} </Text>
        <Text style={styles.textos}>Rua: {endereco} </Text>
        <Text style={styles.textos}>DDD: {ddd} </Text>
        <Text style={styles.textos}>Bairro: {bairro}</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.textoFooter}>Desenvolvido por Gabriel Duete</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#fff',
  },

  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#B0C4DE',
    marginTop: 50,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
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
    backgroundColor: '#B0C4DE',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 30,
    textAlign: 'right',
  },

  textos: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    textAlign: 'right',
    alignSelf: 'flex-start',

  },

  conteinerBOTAO: {
    marginTop: 8,  
  },

  btn: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
  },

  input: {
    width: 200,
    backgroundColor: '#B0C4DE',
    height: 50,
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 30,
  },

  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    padding: 10,
    marginTop: 140
  },
});
