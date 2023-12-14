import React from 'react';
import { Input, Label } from './Filter.styled';
// import { nanoid } from 'nanoid';
// const filterInputId = nanoid();

export const Filter = ({ value, onFilterChange }) => (
  <Label>
    Filter contacts by name
    <Input type="text" value={value} onChange={onFilterChange} />
  </Label>
);
