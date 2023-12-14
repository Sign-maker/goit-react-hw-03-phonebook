import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { Info } from 'components/Info/Info.styled';
export const ContactList = ({ contacts, onItemDelete }) => (
  <List>
    {contacts.length > 0 ? (
      contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onItemDelete={onItemDelete}
        />
      ))
    ) : (
      <Info>There are no contacts</Info>
    )}
  </List>
);
