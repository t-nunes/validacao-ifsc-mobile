import React from 'react';
import { Wrapper } from './styles';
import FormGroup from '../FormGroup';

export default function Input({
  label,
  form,
  field, // { name, value, onChange, onBlur }
  ...props
}) {
  function onChangeText(text) {
    form.setFieldValue(field.name, text);
  }

  return (
    <FormGroup label={label} field={field} form={form}>
      <Wrapper
        onChangeText={onChangeText}
        {...props}
      />
    </FormGroup>
  )
}
