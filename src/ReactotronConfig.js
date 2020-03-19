import Reactotron from 'reactotron-react-native'
import { AsyncStorage } from 'react-native';

let tron = null;
console.tron = () => {};

if (__DEV__) {
  tron = Reactotron
    .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
    .configure({
      host: 'localhost'
    }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect() // let's connect!

  console.tron = tron.log;
  tron.clear();
}

