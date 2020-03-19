if(__DEV__) {
  import('./src/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

import React from 'react';
import { YellowBox } from 'react-native'
import Routes from './src/routes.js'

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket',
  'componentWillReceiveProps',
  'VirtualizedLists should never be nested',
  'RootError'
]);

export default function App() {
  return (
    <Routes />
  )
}
