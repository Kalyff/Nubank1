import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function App() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <View style={styles.boxIconescabecalho}>
          <View style={styles.circulo}>
            <Image style={styles.icone} source={require('../imag/white.png')} />
          </View> 
          <View style={styles.itensIcones}>
            <Image style={styles.icone} source={require('../imag/view.png')} />
            <Image style={styles.icone} source={require('../imag/question.png')} />
            <Image style={styles.icone} source={require('../imag/mail.png')} />
          </View>
        </View>     
        <Text style={styles.textUsuario}>Olá, Kalyff</Text>
      </View>
      
      <View style={styles.saldoContainer}>
        <Text style={styles.saldoTitulo}>Conta</Text>
        <Text style={styles.saldoValor}>R$ 1.356,98</Text>
      </View>
      
      <View style={styles.acoesContainer}>
        <View style={styles.acaoItem}>
          <TouchableOpacity 
            style={styles.botaoAcao}
            onPress={() => router.push('/pix')} 
          >
            <Image style={styles.icone} source={require('../imag/pix.png')} />
          </TouchableOpacity>
          <Text style={styles.textBotao}>Pix</Text>
        </View>

        <View style={styles.acaoItem}>
        <TouchableOpacity style={styles.botaoAcao} onPress={() => router.push('/pagamento')}>
          <Image style={styles.icone} source={require('../imag/barras.png')} />
        </TouchableOpacity>
          <Text style={styles.textBotao}>Pagar</Text>
        </View>

        <View style={styles.acaoItem}>
        <TouchableOpacity style={styles.botaoAcao} onPress={() => router.push('/emprestimo')}>
          <Image style={styles.icone} source={require('../imag/emprestimo.png')} />
        </TouchableOpacity>
          <Text style={styles.textBotao}>Pegar empréstimo</Text>
        </View>

        <View style={styles.acaoItem}>
          <TouchableOpacity style={styles.botaoAcao}>
            <Image style={styles.icone} source={require('../imag/dolar.png')} />
          </TouchableOpacity>
          <Text style={styles.textBotao}>Transferir</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  
  cabecalho: {
    backgroundColor: '#820AD1',
    width: '100%',
    height: 130,
    paddingHorizontal: 24,
    paddingTop: 40,
    justifyContent: 'center',
  },
  
  textUsuario: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
  },
  
  boxIconescabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  itensIcones: {
    flexDirection: 'row',
    gap: 15,
  },
  
  circulo: {
    width: 36,
    height: 36,
    backgroundColor: '#9603E875',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  icone: {
    width: 24,
    height: 24,
  },
  
  saldoContainer: {
    width: '90%',
    marginTop: 20,
  },
  
  saldoTitulo: {
    fontSize: 18,
    color: '#333',
  },
  
  saldoValor: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  
  acoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginTop: 20,
  },
  
  acaoItem: {
    alignItems: 'center',
  },
  
  botaoAcao: {
    width: 70,
    height: 70,
    backgroundColor: '#eee',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  textBotao: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
});
