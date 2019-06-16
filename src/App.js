import React from 'react';

import { getAll, getById } from './api/phone';
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
      shoppingCardItems: {}
    };
  }
  removeItem = (phoneID) => {
    const copy = { ...this.state.shoppingCardItems };
    let count = copy[phoneID] || 0;
      if( count > 1)
        --copy[phoneID];
      else 
        delete copy[phoneID];
    this.setState({
      shoppingCardItems: copy
    })
    console.log('SLPH: ', count);
  }
  addInShopping = (phoneID) => {
    const copy = { ...this.state.shoppingCardItems },
          count = copy[phoneID] || 0;
          copy[phoneID] = count + 1;
    this.setState({
      shoppingCardItems: copy
    });
  }
  selectedPhone = (phoneID) => {
    this.setState({
      selectedPhone: getById(this.state.phones, phoneID),
    });
    console.log(getById(this.state.phones, phoneID));
  }
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Filter />
              <ShoppingCart 
                cards={this.state.shoppingCardItems}
                removeItem={this.removeItem}

              />
            </div>

            <div className="col-md-10">
              { this.state.selectedPhone ? (
                <Viewer
                  phone={this.state.selectedPhone}
                  onBack={() => {
                    this.setState({
                      selectedPhone: null,
                    });
                  }}
                  addInShopping={this.addInShopping}
  
                />
              ) : (
                <Catalog
                    phones={this.state.phones}
                    addInShopping={this.addInShopping}
                    removeItem={this.removeItem}
                    selectedPhone={this.selectedPhone}
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
