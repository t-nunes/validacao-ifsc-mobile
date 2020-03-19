import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler';

export const Wrapper = styled(RectButton).attrs((p) => ({
  size: p.size || '100%',
}))`
  width: ${p => p.size};
  text-align: center;
  padding: 15px;
  background-color: #4285f4;
`;

export const Content = styled.Text`
  color: white;
  text-align: center;
`;
