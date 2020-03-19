import React, {useEffect, useState} from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { WrapperText,
  Avatar, Wrapper, List, Contact, Name, Email } from './styles';
import * as ContactService from '../../services/ContactService'
import ActionButton from 'react-native-action-button';
import Search from "./components/Search";
import Button from "../../components/Button";

export default function ListContacts({ navigation }) {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState(false);

  function handleAddContact() {
    navigation.navigate('Cadastro')
  }

  function handleSearch({ name }) {
    if (!name) setSearchData(false);
    const newContacts = data.filter((contact) => {
      let contactName = contact?.name?.toLowerCase?.();
      return contactName.includes(name)
    });

    setSearchData(newContacts);
  }

  async function fetchData() {
    setSearchData(false);
    const contacts = await ContactService.getAll();
    setData(contacts);
  }

  async function handleRemoveContact(id) {
    const contacts = await ContactService.remove(id);
    setData(contacts);
  }

  React.useEffect(() => {
    setSearchData(false);

    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });

    return unsubscribe;
  }, [navigation]);

  const _data = searchData || data;
  const noData = !_data || _data.length <= 0;

  return (
    <Wrapper>
      {
        noData ? (
          <View style={{ width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ width: '100%', textAlign: 'center' }}><MaterialIcons name="person-outline" size={62} color="#000" /></Text>
            <Text style={{ width: '100%', textAlign: 'center' }}>Nenhum contato adicionado</Text>
          </View>
        ) : (
          <>
            <Search onSubmit={handleSearch} />
            <List
              data={_data}
              keyExtractor={contact => contact.id}
              renderItem={({ item, item: { id, image, name, email } }) => {
                return (
                  <Contact
                    onPress={() => navigation.navigate('Detalhes', item)}
                  >
                    <Avatar
                      source={{ uri: image }}
                    />
                    <WrapperText>
                      <Name>{name}</Name>
                      <Email>{email}</Email>
                    </WrapperText>
                    <TouchableOpacity onPress={() => handleRemoveContact(id)}>
                      <MaterialCommunityIcons name="delete-circle" size={28} color="#ff0000" />
                    </TouchableOpacity>
                  </Contact>
                )
              }}
            />
          </>
        )
      }

      <ActionButton buttonColor="#7159c1" onPress={handleAddContact} />
    </Wrapper>
  )
}
