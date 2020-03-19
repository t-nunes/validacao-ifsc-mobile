import React from 'react';
import Button from '../../../../components/Button';
import { Formik } from 'formik';
import { Wrapper, Input } from './styles';

function Search({ onSubmit }) {
  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={onSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <Wrapper>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            placeholder="Digite aqui para pesquisar"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
          <Button size="120px" onPress={handleSubmit}>Pesquisar</Button>
        </Wrapper>
      )}
    </Formik>
  )
}

export default Search;
