import React from 'react';
import { Component } from 'react';
import { InputName } from './Input/InputName';
import { Title } from './NameBlock/NameBlock';
import { Wrap } from './DefaultStylse.styled';
import { nanoid } from 'nanoid';
import { InputFind } from './Input/InputFind';


import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
   
  };

  addContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };
    this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
    }));
    // console.log(this.state);
  };

  handelDel = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter((contact) => contact.id !== id)
    }));
  };

// findId =id=>{

// }


  render() {
    return (
      <>
        <Title text="Phonebook" />
        <Wrap>
          <InputName cont={this.state.contacts} send={this.addContact} />
        </Wrap>
        <Title text="Contscts" />
        <InputFind />
        <Contacts contact={this.state.contacts} />
      </>
    );
  }
}
