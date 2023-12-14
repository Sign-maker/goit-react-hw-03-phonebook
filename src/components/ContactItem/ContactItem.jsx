import { Button, ContactInfo, Item } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onItemDelete }) => (
  <Item>
    <ContactInfo>
      <span>{name}</span>
      <span>{number}</span>
    </ContactInfo>
    <Button type="button" onClick={() => onItemDelete(id)}>
      Delete
    </Button>
  </Item>
);
