import { registerRootComponent } from 'expo';
import { Alert, Platform } from 'react-native';

import App from './App';

// no navegador o Alert do React Native nao aparece,
// entao no web uso o alert do proprio navegador
if (Platform.OS === 'web') {
  Alert.alert = (titulo, mensagem) => {
    window.alert(mensagem ? `${titulo}\n\n${mensagem}` : titulo);
  };
}

registerRootComponent(App);
