import React from 'react';
import { connect } from 'react-redux';
import { Grid, Segment, Input, Dropdown, Radio, Button, Header, Select } from 'semantic-ui-react'

import { addTransaction } from '../actions';

const AddTrade = ({ dispatch }) => {
  let quantity, symbol, price, baseSymbol;
  const options = [
    { key: 'BTC', text: 'BTC', value: 'BTC' },
    { key: 'ETH', text: 'ETH', value: 'ETH' },
    { key: 'USD', text: 'USD', value: 'USD' },
  ]

  const handleClick = (action) => {
    dispatch(addTransaction({
      type: action,
      symbol: symbol.inputRef.value,
      quantity: quantity.inputRef.value,
      price: price.inputRef.value}));
    symbol.inputRef.value = '';
    quantity.inputRef.value = '';
    price.inputRef.value = '';
  }

  return (
   <Segment>
    <div>
      <Input 
        fluid 
        icon='search' 
        iconPosition='left' 
        size='small' 
        list='symbols' 
        placeholder='Select symbol...' 
        ref={node => {
          symbol = node;
        }}
      />
      <datalist id='symbols'>
        <option value='SBD' />
        <option value='NEO' />
        <option value='BCH' />
      </datalist>
    </div>
    <Input
      action={<Dropdown button basic options={options} defaultValue='BTC' ref={node => {
        baseSymbol = node;
      }}/>}
      icon='dollar'
      iconPosition='left'
      placeholder='Price...'
      fluid 
      size='small'
      ref={node => {
        price = node;
      }}
    />
    <Input
      placeholder='Quantity...'
      fluid 
      size='small'
      ref={node => {
        quantity = node;
      }}
    />
    <Button.Group fluid>
      <Button color='blue' name='BUY' onClick={(e, { name }) => {
        handleClick(name);
      }}>BUY</Button>
      <Button.Or />
      <Button color='orange' name='SELL' onClick={(e, { name }) => {
        handleClick(name);
      }}>SELL</Button>
    </Button.Group>
   </Segment>
  );
};
export default connect()(AddTrade);

/*
let AddTrade = ({ dispatch }) => {
  return (
    <TransactionForm onSubmit={(values) => {
      dispatch(addTransaction(values));
    }}/>
  );
};
*/

