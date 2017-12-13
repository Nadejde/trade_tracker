import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react'

const Trade = ({
  type,
  id,
  symbol,
  quantity,
  price
  }) => (
  <Table.Row>
    <Table.Cell>
      {type}
    </Table.Cell>
    <Table.Cell>
      {symbol}
    </Table.Cell>
    <Table.Cell>
      {quantity}
    </Table.Cell>
    <Table.Cell>
      {price}
    </Table.Cell>
  </Table.Row>
);

const TradeList = ({
  trades
}) => (
  <Table basic='very' celled unstackable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Action</Table.HeaderCell>
        <Table.HeaderCell>Symbol</Table.HeaderCell>
        <Table.HeaderCell>Quantity</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {trades.map(trade =>
          <Trade
            key={trade.id}
            {...trade}
          />
      )}
    </Table.Body>
  </Table>
);

const mapStateToProps = (
  state
) => {
  return {
    trades: state.trades
  };
};

export default connect(
  mapStateToProps
)(TradeList);