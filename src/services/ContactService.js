import { AsyncStorage } from 'react-native';
import {CONTACTS} from "../constants/initialData";

const key = '@agenda/contacts';

export async function setData(contacts) {
  AsyncStorage.setItem(key, JSON.stringify(contacts));
}

export async function getAll() {
  const contacts = await AsyncStorage.getItem(key);
  if (!contacts) {
    await setData(CONTACTS);
    return CONTACTS;
  }
  return contacts ? JSON.parse(contacts) : [];
}

export async function getOne(email) {
  const contacts = await getAll();
  return contacts.find((contact) => contact.email === email);
}

export async function create(contact) {
  let oldContacts = await getAll();

  await setData([
    contact,
    ...oldContacts,
  ]);
}

export async function remove(id) {
  const oldContacts = await getAll();
  const newContacts = oldContacts.filter((contact) => contact.id !== id);
  await setData(newContacts);
  return newContacts;
}
