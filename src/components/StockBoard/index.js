import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import TradeModal from "../Trade";
import "./index.css";

class StockList extends Component {
  render() {
    return (
      <div>
        <h3>Available Stocks</h3>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Stock</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.stocks.map((stock) => (
              <tr key={stock.name}>
                <td>{stock.name}</td>
                <td>${stock.price.toFixed(2)}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => this.props.onTrade(stock, "buy", 1)}
                  >
                    Trade
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default StockList;
