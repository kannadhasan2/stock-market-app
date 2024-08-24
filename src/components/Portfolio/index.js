import { Component } from "react";
import { Card } from "react-bootstrap";
import "./index.css";
class Portfolio extends Component {
  render() {
    const { portfolio } = this.props;

    return (
      <div>
        <h3>Your Portfolio</h3>
        <Card>
          <Card.Body>
            {portfolio.length === 0 ? <p>No stocks</p> : ""}
            {portfolio.length !== 0
              ? portfolio.map((each) => (
                  <p>
                    {each.quantity} : {each.stockName.name} :{" "}
                    {each.stockName.price}
                  </p>
                ))
              : ""}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Portfolio;
