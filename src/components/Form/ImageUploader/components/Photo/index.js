import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import FlipImage from './components/FlipImage';
import Button from '../../../../Button';
import { Wrapper, TakeScreenshot, TakeScreenshotBall } from './styles';
import * as MediaLibrary from 'expo-media-library';

let camera = null;

export default function Photo({ handleTakeScreenshot, handleClose }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  async function takeScreenshotAndSave() {
    const { uri } = await camera.takePictureAsync();
    await MediaLibrary.requestPermissionsAsync();
    const asset = await MediaLibrary.createAssetAsync(uri);
    const { localUri } = await MediaLibrary.getAssetInfoAsync(asset);
    handleTakeScreenshot(localUri);
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <Text />;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso a camera</Text>;
  }

  return (
    <Wrapper>
      <Camera ref={(ref) => camera = ref} style={{ flex: 1 }} type={type}>
        <View
          style={{
            width: '100%',
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <FlipImage type={type} setType={setType} />
          <TakeScreenshot onPress={takeScreenshotAndSave}>
            <TakeScreenshotBall />
          </TakeScreenshot>
          <View />
        </View>
      </Camera>
    </Wrapper>
  );
}
