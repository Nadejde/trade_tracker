import React, { Component } from 'react';
import { Grid, Segment, Input, Dropdown, Radio, Button, Header } from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';

function SymbolPrice(props) {
  const options = [
    { key: 'BTC', text: 'BTC', value: 'BTC' },
    { key: 'ETH', text: 'ETH', value: 'ETH' },
    { key: 'USD', text: 'USD', value: 'USD' },
  ]

  return (
    <Input
      action={<Dropdown button basic floating options={options} defaultValue='BTC' />}
      icon='dollar'
      iconPosition='left'
      placeholder='Price...'
      fluid 
      size='mini'
    />
  )
}

function SymbolSelect(props) {
  return (
    <div>
      <Input fluid icon='search' iconPosition='left' size='mini' list='symbols' placeholder='Select symbol...' />
      <datalist id='symbols'>
        <option value='SBD' />
        <option value='NEO' />
        <option value='BCH' />
      </datalist>
    </div>
  )
}

function BuySell(props){
  const options = [
    { key: 'BUY', text: 'BUY', value: 'BUY' },
    { key: 'SELL', text: 'SELL', value: 'SELL' },
  ]

  return (
    <Input
      placeholder='Quantity...'
      fluid 
      size='mini'
    />
  )
}

function App(props){
  return (
    <Grid columns={2} stackable centered>
      <Grid.Column width={4}>
      
        <Segment>
          <Header size='mini'>Record Trade</Header>
          <SymbolSelect />
          <SymbolPrice />
          <BuySell />
          <Button.Group fluid size='mini'>
            <Button>BUY</Button>
            <Button >SELL</Button>
          </Button.Group>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <Header size='mini'>Trade Log</Header>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}

export default App;
