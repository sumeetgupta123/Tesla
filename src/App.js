import { Home } from "./component/home"
import { Header } from "./component/header"
import Allcars from "./component/allcars"
import Order from "./component/order"
import Cardetails from "./component/cardetails"
import OrderPlaced from "./component/orderPlaced"
import Logoblack from './assets/black-tesla.jpg';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './component/ScrollToTop'
import './App.css';
import Landing from './component/landing/landing'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: null,
      carName: null,
      allcarsspecs:[{displayName:''}],
      range: null,
      topwall: null,
      orders: null,
      selectedCarColor: null,
      selectedCarModel: null,
      selectedCarWheel: null,
      selectedCarInterior: null,
      carSpecs: null,
      total: null,
      colorPrice: null,
      interiorPrice: null,
      wheelPrice: null,
      variantPrice: null,
      activeColorIndex: 0,
      activeIndex: 0,
      activeWheelIndex: 0,
      activeInteriorIndex: 0,
      Interior: [
        { name: "All Black", color: "black", price: 0 },
        { name: "Walnut Beige ", color: "beige", price: 2000 },
        { name: "All White ", color: "white", price: 2000 },
      ],
    };
  }


  changeState = (name, range, topwall,allcarsspecs) => {
    fetch('https://tesla-app-server.herokuapp.com/models/modelS/configure')
      .then(res => res.json())
      .then(carSpecs => {
        console.log(allcarsspecs);
        this.setState({
          allcarsspecs:allcarsspecs,
          carSpecs: carSpecs,
          selectedCarColor: carSpecs.paints[0],
          selectedCarModel: carSpecs.variants[0],
          selectedCarWheel: carSpecs.wheels[0],
          selectedCarInterior: this.state.Interior[0],
          carName: name,
          range: range,
          topwall: topwall,
          total: carSpecs.paints[0].price + carSpecs.variants[0].price + carSpecs.wheels[0].price + this.state.Interior[0].price
        }, () => {
          console.log(this.state.carName, '$' + this.state.total)
        })
      })
  };




  changeOrderState = (orders) => {
    console.log(orders);
    this.setState({
      orders: orders,
    }, () => {
      console.log(this.state.orders)
    });
  };


  getcarloader = () => {
    setTimeout(() => {
      this.setState({ loading: true }, () => {
        fetch('https://tesla-app-server.herokuapp.com/models/all')
          .then(res => res.json())
          .then(data => this.setState({
            loading: false,
            data
          }));
      });
    }, 500);
  }

  setCarColor = (selectedCarColor, i, colorPrice) => {
    this.setState({
      ...this.state, activeColorIndex: i, selectedCarColor: selectedCarColor, colorPrice: colorPrice
    }, () => {
      console.log(this.state.activeColorIndex, selectedCarColor, colorPrice)
    });
  }
  setCarDetails = (selectedCarModel, i, variantPrice) => {
    this.setState({
      ...this.state, activeIndex: i, selectedCarModel: selectedCarModel, variantPrice: variantPrice
    }, () => {
      console.log(this.state.activeIndex, selectedCarModel)
    });
  }
  setCarWheel = (selectedCarWheel, i, wheelPrice) => {
    this.setState({
      ...this.state, activeWheelIndex: i, selectedCarWheel: selectedCarWheel, wheelPrice: wheelPrice
    }, () => {
      console.log(this.state.activeWheelIndex, selectedCarWheel)
    });
  }

  setCarInterior = (selectedCarInterior, i, interiorPrice) => {
    this.setState({
      ...this.state, activeInteriorIndex: i, selectedCarInterior: selectedCarInterior, interiorPrice: interiorPrice
    }, () => {
      console.log(this.state.activeInteriorIndex, selectedCarInterior)
    });
  }
  render() {
    const { loading, data } = this.state;
    return (
      <Router>
        <div className="App">
          <Header />
          <ScrollToTop />
          <Switch>
            <Route exact path="/" >
              <Home getcarloader={this.getcarloader} />
            </Route>
            <Route exact path="/Allcars">
              <Allcars getcarloader={this.getcarloader} data={data} changeState={this.changeState} loading={loading} />
            </Route>
            <Route exact path="/Cardetails">
              <Cardetails allcarsspecs={this.state.allcarsspecs} carName={this.state.carName} range={this.state.range} topwall={this.state.topwall} BottomWall={Logoblack} />
            </Route>
            <Route exact path="/Order">
              <Order carName={this.state.carName} topwall={this.state.topwall} changeOrderState={this.changeOrderState}
                activeColorIndex={this.state.activeColorIndex} activeIndex={this.state.activeIndex}
                setCarColor={this.setCarColor} setCarDetails={this.setCarDetails} setCarWheel={this.setCarWheel}
                activeWheelIndex={this.state.activeWheelIndex} setCarInterior={this.setCarInterior}
                activeInteriorIndex={this.state.activeInteriorIndex} />
            </Route>
            <Route exact path="/OrderPlaced">
              <OrderPlaced carName={this.state.carName} selectedCarModel={this.state.selectedCarModel}
                selectedCarColor={this.state.selectedCarColor} activeColorIndex={this.state.activeColorIndex}
                activeIndex={this.state.activeIndex} activeWheelIndex={this.state.activeWheelIndex}
                activeInteriorIndex={this.state.activeInteriorIndex} selectedCarWheel={this.state.selectedCarWheel}
                selectedCarInterior={this.state.selectedCarInterior} carSpecs={this.state.carSpecs} total={this.state.total}
                colorPrice={this.state.colorPrice} wheelPrice={this.state.wheelPrice}
                interiorPrice={this.state.interiorPrice} variantPrice={this.state.variantPrice} />
            </Route>
            <Route exact path="/landing" >
              <Landing />
            </Route>
       
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
