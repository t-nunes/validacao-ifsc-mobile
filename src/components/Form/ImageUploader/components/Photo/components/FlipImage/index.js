import React from 'react';
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { Wrapper } from './styles';

export default function FlipImage({ type, setType }) {
  return (
    <Wrapper
      onPress={() => {
        setType(
          type === Camera.Constants.Type.back
            ? Camera.Constants.Type.front
            : Camera.Constants.Type.back
        );
      }}
    >
      <Ionicons name="md-reverse-camera" size={32} color="white" />
    </Wrapper>
  )
}
