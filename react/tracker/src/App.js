import React, { Component } from 'react';
import { Grid, Segment, Input, Dropdown, Radio, Button, Header } from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import AddTrade from './components/AddTrade.jsx';
import TradeList from './components/TradeList.jsx';

import store from './store';

const TradeApp = (props) => {
  return (
    <Grid columns={2} stackable centered>
      <Grid.Column width={4}>
        <AddTrade />
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <Header size='small'>Trade Log</Header>
          <TradeList />
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <TradeApp />
    </Provider>
  );
};

export default App
