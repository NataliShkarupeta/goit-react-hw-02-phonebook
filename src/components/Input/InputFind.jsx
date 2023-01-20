import { Component } from 'react';
import { Input } from './inputName.styled';
import { Label } from './inputName.styled';
import { Wrap } from 'components/DefaultStylse.styled';
import { Contacts } from 'components/Contacts/Contacts';

export class InputFind extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
  };

  nameForFilter = e => {
    this.setState({ name: e.target.value });
  };

  cangeArreyContacts = () => {
    const { name, contacts } = this.state;
    if (name.length > 0) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(name.toLowerCase().trim())
      );
    } else {
      return this.state.contacts;
    }
  };

  render() {
    return (
      <>
        <Wrap>
          <Label>
            Find contact by name
            <Input
              type="text"
              name="filter"
              value={this.name}
              onChange={this.nameForFilter}
            />
          </Label>
        </Wrap>
        <Contacts contact={this.cangeArreyContacts()} />
      </>
    );
  }
}
