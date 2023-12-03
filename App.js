import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'

export default function App() {
  const [cep, setCep] = useState('')

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
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={[styles.botao, {backgroundColor: '#1d75cd'}]} activeOpacity={0.7}>
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, {backgroundColor: '#cd3e1d'}]} >
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultado}>
        <Text style={styles.itemText}>CEP: 58164577</Text>
        <Text style={styles.itemText}>Logradouro: Rua Pedro Monteval de Brito</Text>
        <Text style={styles.itemText}>Bairro: Mangabeira</Text>
        <Text style={styles.itemText}>Cidade: João Pessoa</Text>
        <Text style={styles.itemText}>Estado: PB</Text>
      </View>

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
