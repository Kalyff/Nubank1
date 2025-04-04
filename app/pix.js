import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PixTransferScreen() {
  const navigation = useNavigation();
  const [transferValue, setTransferValue] = React.useState('0,00');

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
       
        <Text style={styles.title}>Qual é o valor da transferência?</Text>
        <View style={{ width: 24 }} /> {/* Espaçador para alinhamento */}
      </View>

      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Saldo da conta: <Text style={styles.balanceValue}>R$ 74,43</Text></Text>
        <Text style={styles.limitText}>Limite do cartão: <Text style={styles.limitValue}>R$ 204,47</Text></Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.currency}>R$</Text>
        <TextInput
          style={styles.input}
          value={transferValue}
          onChangeText={setTransferValue}
          keyboardType="numeric"
          placeholder="0,00"
          textAlign="left"
          selectionColor="#8A05BE"
        />
      </View>

      <TouchableOpacity style={styles.limitInfo}>
        <Text style={styles.limitInfoText}>Consultar meus limites Pix</Text>
        <Feather name="chevron-right" size={20} color="#777" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.continueButton}>
        <Feather name="arrow-right" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  backButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textAlign: 'left',
  },
  balanceContainer: {
    marginBottom: 20,
  },
  balanceText: {
    fontSize: 16,
    color: '#777',
  },
  balanceValue: {
    fontWeight: 'bold',
    color: '#333',
  },
  limitText: {
    fontSize: 16,
    color: '#777',
    marginTop: 5,
  },
  limitValue: {
    fontWeight: 'bold',
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10,
  },
  currency: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    paddingVertical: 10,
  },
  limitInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 30,
  },
  limitInfoText: {
    fontSize: 16,
    color: '#333',
  },
  continueButton: {
    backgroundColor: '#8A05BE',
    borderRadius: 50,
    padding: 18,
    alignSelf: 'flex-end',
  },
});