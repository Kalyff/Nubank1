import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 

export default function EmprestimoNubank() {
  const navigation = useNavigation(); 

  const handleGoBack = () => {
    navigation.goBack(); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
       
        <Text style={styles.title}>Qual o objetivo do seu empréstimo?</Text>
      </View>

      <TouchableOpacity style={styles.option}>
        <Feather name="file-text" size={24} color="#777" />
        <Text style={styles.optionText}>Contas da casa</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.option, styles.selectedOption]}>
        <Feather name="tool" size={24} color="#8A05BE" />
        <Text style={[styles.optionText, styles.selectedOptionText]}>Reformas ou consertos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Feather name="briefcase" size={24} color="#777" />
        <Text style={styles.optionText}>Investir no meu negócio</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Feather name="send" size={24} color="#777" />
        <Text style={styles.optionText}>Viagem</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Feather name="file-text" size={24} color="#777" />
        <Text style={styles.optionText}>Dívida</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  backButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  optionText: {
    fontSize: 16,
    marginLeft: 15,
    color: '#333',
  },
  selectedOption: {
    backgroundColor: '#F0D4FF',
    borderColor: '#8A05BE',
  },
  selectedOptionText: {
    color: '#8A05BE',
  },
  continueButton: {
    backgroundColor: '#8A05BE',
    borderRadius: 50,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 30,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});