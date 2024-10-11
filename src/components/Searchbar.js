import React from 'react';
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap';
import './Searchbar.css';

const Searchbar = ({ placeholder }) => {
  return (
    <Form className="d-flex">
      <InputGroup>
        <FormControl
          type="text"
          placeholder={placeholder || "Search..."}
          className="search-input"
        />
        <Button variant="primary">
          Search
        </Button>
      </InputGroup>
    </Form>
  );
};

export default Searchbar;
