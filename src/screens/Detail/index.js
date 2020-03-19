import React from 'react';
import { Avatar, Wrapper, Text, Name } from './styles';

export default function Detail({ route }) {
  const { name, phone, email, image } = route.params;

  return (
    <Wrapper>
      <Avatar source={{ uri: image }} />
      <Name>{name}</Name>
      <Text>{email}</Text>
      <Text>{phone}</Text>
    </Wrapper>
  )
}
