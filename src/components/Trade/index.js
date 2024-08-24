import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

class TradeModal extends Component {
  state = {
    quantity: 1,
    action: "buy",
  };

  handleQuantityChange = (e) => {
    this.setState({ quantity: parseInt(e.target.value, 10) });
  };

  handleActionChange = (e) => {
    this.setState({ action: e.target.value });
  };

  handleSubmit = () => {
    const { quantity, action } = this.state;
    this.props.onTrade(this.props.stock.name, action, quantity);
    this.props.onHide();
  };

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>Trade {this.props.stock.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                value={this.state.quantity}
                onChange={this.handleQuantityChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Action</Form.Label>
              <Form.Control
                as="select"
                value={this.state.action}
                onChange={this.handleActionChange}
              >
                <option value="buy">Buy</option>
                <option value="sell">Sell</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onHide}>
            Cancel
          </Button>
          <Button variant="primary" onClick={this.handleSubmit}>
            Confirm Trade
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default TradeModal;
