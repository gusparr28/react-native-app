import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Drawer from './routes/drawer';

const getFonts = () => Font.loadAsync({
  'ubuntu-light': require('./assets/fonts/Ubuntu-Light.ttf'),
  'ubuntu-bold': require('./assets/fonts/Ubuntu-Bold.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Drawer />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}
