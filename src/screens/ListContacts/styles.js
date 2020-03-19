import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Wrapper = styled.View.attrs(() => ({
  hitSlop: {
    bottom: 10
  }
}))`
  display: flex;
  height: 100%;
  align-items: flex-end;
`

export const List = styled.FlatList`
  flex-grow: 1;
  width: 100%;
`

export const Contact = styled.TouchableOpacity`
  width: 100%;
  padding: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const WrapperText = styled.View`
  flex-grow: 1;
`

export const Name = styled.Text`
  font-size: 18px;
  margin-bottom: 5px;
`

export const Email = styled.Text`
  font-size: 14px;
  color: #3a4a4a;
`

export const Avatar = styled.Image`
  width: 62px;
  height: 62px;
  background: #ddd;
  flex-shrink: 0;
  border-radius: 62px;
  margin-right: 15px;
`
