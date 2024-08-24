import React, { Component } from "react";
import Header from "./components/Header";
import StockList from "./components/StockBoard";
import Portfolio from "./components/Portfolio";

class App extends Component {
  state = {
    stocks: [],
    portfolio: [],
  };

  componentDidMount() {
    this.fetchStockData();
    this.interval = setInterval(this.fetchStockData, 5000); // Fetch new data every 5 seconds
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchStockData = () => {
    const mockData = [
      { name: "Apple", price: Math.random() * 100 + 150 },
      { name: "Google", price: Math.random() * 100 + 1800 },
      { name: "Amazon", price: Math.random() * 100 + 3700 },
      { name: "Microsoft", price: Math.random() * 100 + 150 },
      { name: "Intel", price: Math.random() * 100 + 800 },
      { name: "Flip kart", price: Math.random() * 100 + 3900 },
      { name: "MRF", price: Math.random() * 100 + 150 },
      { name: "Infosys", price: Math.random() * 100 + 2600 },
      { name: "Cognizant", price: Math.random() * 100 + 3200 },
    ];
    this.setState({ stocks: mockData });
  };

  handleTrade = (stockName, action, quantity) => {
    const { portfolio } = this.state;
    const updatedPortfolio = { stockName, quantity };

    this.setState((prevState) => ({
      portfolio: [...prevState.portfolio, updatedPortfolio],
    }));
  };

  render() {
    const { stocks, portfolio } = this.state;
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <StockList stocks={stocks} onTrade={this.handleTrade} />
            </div>
            <div className="col-md-4">
              <Portfolio portfolio={portfolio} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
