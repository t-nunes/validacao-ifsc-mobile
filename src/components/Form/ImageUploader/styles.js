import styled from 'styled-components/native';
import Button from '../../Button';

export const Wrapper = styled.View`
  justify-content: center;
  margin-bottom: 30px;
`

export const Buttons = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`

export const Spacer = styled.View`
  width: ${p => p.width};
`

export const CustomButton = styled(Button)`
  width: auto;
  flex-grow: 1;
  flex-shrink: 0;
  border-radius: 5px;
`;
