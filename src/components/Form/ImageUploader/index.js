import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import Photo from './components/Photo'
import { Wrapper, Buttons, Spacer, CustomButton } from './styles';

export default function ImageUploader({ label, form, field, ...props }) {
  const [canShowPhoto, setCanShowPhoto] = useState(null);

  function onChangeText(text) {
    form.setFieldValue(field.name, text);
  }

  async function toggleVisibilityCamera() {
    setCanShowPhoto((value) => !value);
  }

  function takeScreenshot(localUri) {
    onChangeText(localUri);
  }

  async function choosePhoto() {
    await ImagePicker.requestCameraRollPermissionsAsync();
    const image = await ImagePicker.launchImageLibraryAsync();
    if (!image.cancelled) {
      return onChangeText(image.uri);
    }
  }

  useEffect(() => {
    setCanShowPhoto(false);
  }, [field.value])

  const hasPhoto = !!field.value && !canShowPhoto;

  return (
    <Wrapper>
      <Buttons>
        <CustomButton onPress={toggleVisibilityCamera}>
          {canShowPhoto ? 'Fechar camera' : 'Tirar foto'}
        </CustomButton>
        <Spacer width="10px" />
        <CustomButton onPress={choosePhoto}>Escolher uma foto</CustomButton>
      </Buttons>
      {
        hasPhoto && (
          <Image resizeMode="contain" source={{ uri: field.value }} style={{ width: "100%", height: 200 }} />
        )
      }

      {canShowPhoto && (
        <Photo handleTakeScreenshot={takeScreenshot} handleClose={toggleVisibilityCamera} />
      )}
    </Wrapper>
  )
}
