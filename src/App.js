import React from 'react';

import { getAll, getById } from './api/phone'
import ShoppingCart from './components/ShoppingCart'
import Filter from './components/Filter'
import Catalog from './components/Catalog'
import { Viewer } from './components/Viewer';

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phones: getAll(),
      selectedPhone: null,
      shoppingCardItems: [],
      namePhone: null
    };
  }

  render() {
    console.log(this.state.shoppingCardItems);
    // const { phones } = this.state;
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Filter />
              <ShoppingCart 
                cards={this.state.shoppingCardItems}
                removeItem={(idx) => {
                  this.state.shoppingCardItems.splice(idx,1)
                  this.setState({
                    shoppingCardItems: this.state.shoppingCardItems
                  
                })}}
              />
            </div>

            <div className="col-md-10">
              { this.state.selectedPhone ? (
                <Viewer
                  phone={this.state.selectedPhone}
                  phones={this.state.phones}
                  onBack={() => {
                    this.setState({
                      selectedPhone: null,
                      namePhone: null
                    });
                  }}
                  addInShopping={() => {
                    this.setState({
                      shoppingCardItems: this.state.shoppingCardItems.concat(this.state.namePhone)
                    })
                  }}
                />
              ) : (
                <Catalog
                  phones={this.state.phones}
                  onPhoneSelected={(phoneName) => {
                    this.setState({
                      selectedPhone: getById(phoneName),
                      namePhone: phoneName
                    });
                  }}
                  addInShopping={(phoneName) => {
                    this.setState({
                      shoppingCardItems: this.state.shoppingCardItems.concat(phoneName)
                    })
                  }}
                />
              ) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
