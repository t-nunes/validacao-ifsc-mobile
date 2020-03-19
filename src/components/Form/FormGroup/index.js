import React from 'react';
import { Wrapper, Label, Errors, Error } from './styles';

export default function FormGroup({ label, field, form, children }) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      {children}
      <Error>{form.errors[field.name]}</Error>
    </Wrapper>
  )
}
