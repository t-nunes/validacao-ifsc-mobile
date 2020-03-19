import styled from 'styled-components/native';

export const Wrapper = styled.View`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
`;

export const List = styled.FlatList`
  flex-grow: 1;
  width: 100%;
`

export const Contact = styled.View`
  width: 100%;
  padding: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Name = styled.Text`
  font-size: 18px;
  margin-bottom: 5px;
`

export const Text = styled.Text`
  font-size: 14px;
  color: #3a4a4a;
`;

export const Avatar = styled.Image`
  width: 100%;
  height: 40%;
  margin-bottom: 15px;
  background: red;
  flex-shrink: 0;
`
