import { Item } from './Contacts.styled';
import { nanoid } from 'nanoid';

export const Contacts = ({ contact, onDelete }) => {
  return contact.map(({ name, number }) => {
    return (
      <Item key={nanoid()}>
        {name} :{number}
      </Item>
    );
  });
};
