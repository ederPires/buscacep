import React, { useState, useRef } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert, Keyboard } from 'react-native'
import api from './src/services/api'

export default function App() {
  const [cep, setCep] = useState('')
  const inputRef = useRef(null) //referência
  const [cepUser, setCepUser] = useState(null) //cep que o usuário digitou

  function limpar (){
    setCep('')
    //clicando em limpar o cursos aparece no input
    inputRef.current.focus()
    setCepUser(null)
  }

  async function buscar(){
    if(cep == ''){
      Alert.alert('Digite um CEP válido!') // exibe um alerta
      setCep('') //foca no input
      return //para o código
    }

    try {
      const response = await api.get(`/${cep}/json`)
      Keyboard.dismiss() //fecha o teclado após clicar no botão
      setCepUser(response.data)
      //console.log(response.data)
    } catch (error) {
      console.log("ERROR: "+ error)
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
      <Text style={styles.text}>Digite o cep desejado</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 58059165"
        value={cep}
        onChangeText={setCep}
        keyboardType='numeric'
        ref={inputRef}
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity
          style={[styles.botao, {backgroundColor: '#1d75cd'}]} activeOpacity={0.7}
          onPress={buscar}
          >
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, {backgroundColor: '#cd3e1d'}]}
          onPress={limpar}
          >
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {cepUser &&
        <View style={styles.resultado}>
        <Text style={styles.itemText}>CEP: {cepUser.cep}</Text>
        <Text style={styles.itemText}>Logradouro: {cepUser.logradouro}</Text>
        <Text style={styles.itemText}>Bairro: {cepUser.bairro}</Text>
        <Text style={styles.itemText}>Cidade: {cepUser.localidade}</Text>
        <Text style={styles.itemText}>Estado: {cepUser.uf}</Text>
        <Text style={styles.itemText}>DDD: {cepUser.ddd}</Text>
      </View>

      }

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1, //ocupa todo espaço disponivel
  },
  text:{
    marginTop: 25, //margem do topo
    marginBottom: 15, //margem de baixo
    fontSize: 25,
    fontWeight: 'bold' //negrito
  },
  input:{
    backgroundColor: '#FFF', //cor interna
    borderWidth: 1, //borda
    borderColor: '#DDD', //cor borda
    borderRadius: 5, //borda arredondada
    width: '90%', //largura
    padding: 10, //distância interna
    fontSize: 18 //tamanho da fonte
  },
  areaBtn:{
    alignItems: 'center', //centralizar verticalmente
    flexDirection: 'row', //botão ao lado do outro
    marginTop: 15,
    justifyContent: 'space-around' //espaço entre botões
  },
  botao:{
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
  },
  botaoText:{
    fontSize: 22,
    color: '#FFF'
  },
  resultado:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemText:{
    fontSize: 22
  }
})
