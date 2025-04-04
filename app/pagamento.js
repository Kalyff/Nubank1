import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PagamentoNubank() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
       
        <Text style={styles.title}>Opções de pagamento</Text>
        <View style={{ width: 24 }} /> {}
      </View>

      <View style={styles.paymentOptions}>
        <TouchableOpacity style={styles.option}>
          <View style={styles.optionIcon}>
            <Feather name="credit-card" size={24} color="#333" />
          </View>
          <Text style={styles.optionText}>Fatura do cartão</Text>
          <Text style={styles.optionSubtitle}>Nubank</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <View style={styles.optionIcon}>
            <Feather name="barcode" size={24} color="#333" />
          </View>
          <Text style={styles.optionText}>Boleto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <View style={styles.optionIcon}>
            <Feather name="grid" size={24} color="#333" />
          </View>
          <Text style={styles.optionText}>Pix</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.assistantSection}>
        <Text style={styles.sectionTitle}>Contas encontradas pelo Assistente</Text>

        <TouchableOpacity style={styles.accountItem}>
          <View style={styles.accountIcon}>
            <Feather name="barcode" size={24} color="#333" />
          </View>
          <View style={styles.accountDetails}>
            <Text style={styles.accountName}>Banco Inter Sa</Text>
            <Text style={styles.accountDescription}>Pagar boleto vencido</Text>
          </View>
          <Text style={styles.accountValue}>R$ 772,83</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.accountItem}>
          <View style={styles.accountIcon}>
            <Feather name="barcode" size={24} color="#333" />
          </View>
          <View style={styles.accountDetails}>
            <Text style={styles.accountName}>Banco Bradesco</Text>
            <Text style={styles.accountSubtitle}>Financiamentos Sa</Text>
            <Text style={styles.accountDescription}>Pagar boleto vencido</Text>
          </View>
          <Text style={styles.accountValue}>R$ 1.045,70</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.accountItem}>
          <View style={styles.accountIcon}>
            <Feather name="barcode" size={24} color="#333" />
          </View>
          <View style={styles.accountDetails}>
            <Text style={styles.accountName}>Flavio Kalyff Souza Gomes</Text>
            <Text style={styles.accountDescription}>5 ABR • Boleto vence amanhã</Text>
          </View>
          <Text style={styles.accountValue}>R$ 308,45</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomActions}>
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.actionIcon}>
            <Feather name="dollar-sign" size={20} color="#333" />
            <Feather name="message-square" size={20} color="#333" style={{ marginLeft: 5 }} />
          </View>
          <Text style={styles.actionText}>Assistente de Pagamentos</Text>
          <Feather name="chevron-right" size={20} color="#777" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.actionIcon}>
            <Feather name="barcode" size={20} color="#333" />
          </View>
          <Text style={styles.actionText}>Buscador de Boletos</Text>
          <Feather name="chevron-right" size={20} color="#777" />
        </TouchableOpacity>
      </View>
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
    marginBottom: 20,
  },
  backButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  paymentOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  option: {
    alignItems: 'center',
  },
  optionIcon: {
    backgroundColor: '#eee',
    borderRadius: 50,
    padding: 15,
    marginBottom: 5,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    textAlign: 'center',
  },
  optionSubtitle: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
  },
  assistantSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  accountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  accountIcon: {
    backgroundColor: '#eee',
    borderRadius: 8,
    padding: 10,
    marginRight: 15,
  },
  accountDetails: {
    flex: 1,
  },
  accountName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  accountSubtitle: {
    fontSize: 14,
    color: '#777',
  },
  accountDescription: {
    fontSize: 14,
    color: '#777',
  },
  accountValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  bottomActions: {
    marginTop: 20,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#eee',
    marginBottom: 10,
  },
  actionIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  actionText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});