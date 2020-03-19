import React from 'react';
import { Formik, Field } from "formik";
import { Wrapper, Content } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Form/Input";
import * as ContactService from "../../services/ContactService";
import ImageUploader from "../../components/Form/ImageUploader";
import * as Yup from "yup";
// import Photo from "../../components/Form/ImageUploader/components/Photo";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  email: Yup.string().email('E-mail invalido').required('Campo obrigatório'),
  phone: Yup.string().required('Campo obrigatório'),
});

export default function Detail({ navigation }) {
  async function onSubmit(contact, { resetForm }) {
    const id = new Date().getTime().toString();
    await ContactService.create({ id, ...contact });
    resetForm();
    navigation.goBack();
  }

  return (
    <Formik
      validationSchema={ContactSchema}
      onSubmit={onSubmit}
      initialValues={{ name: '', phone: '', email: '', image: '' }}
    >
      {({ handleSubmit }) => (
        <Wrapper>
          <Content>
            <Field
              label="Nome"
              autoCorrect={false}
              autoCapitalize="none"
              name="name"
              component={Input}
              placeholder="Digite o nome do contato"
              returnKeyType="next"
            />
            <Field
              keyboardType="phone-pad"
              label="Telefone"
              autoCorrect={false}
              autoCapitalize="none"
              name="phone"
              component={Input}
              placeholder="(99) 9 9999-9999"
              returnKeyType="next"
            />
            <Field
              keyboardType="email-address"
              label="Email"
              autoCorrect={false}
              autoCapitalize="none"
              name="email"
              component={Input}
              placeholder="Digite o nome do contato"
              returnKeyType="send"
            />
            <Field
              name="image"
              component={ImageUploader}
            />
          </Content>
          <Button onPress={handleSubmit}>Cadastrar</Button>
        </Wrapper>
      )}
    </Formik>
  )
}
