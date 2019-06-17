import React from 'react';

import { getAll, getById } from './api/phone';
import ShoppingCart from './components/ShoppingCart'
import Filter from './components/Filter'
import Catalog from './components/Catalog'
import { Viewer } from './components/Viewer';
import { sortByAge, sortByName } from './api/sort';

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phones: getAll(),
      selectedPhone: null,
      shoppingCardItems: {},
      searchEl: ''
    };
  }
  removeItem = (phoneID) => {
    const copy = { ...this.state.shoppingCardItems },
     count = copy[phoneID] || 0;
      if( count > 1)
        --copy[phoneID];
      else 
        delete copy[phoneID];
    this.setState({
      shoppingCardItems: copy
    })
  }
  addInShopping = (phoneID) => {
    const copy = { ...this.state.shoppingCardItems },
          count = copy[phoneID] || 0;
          copy[phoneID] = count + 1;
    this.setState({
      shoppingCardItems: copy
    });
  }
  selectedPhone =  (phoneID) => {
    this.setState({
      selectedPhone: getById(this.state.phones, phoneID),
    });
  }
  sortCards = (value) => {
    let  copy  = [ ...this.state.phones ] ;
    value === 'age' ? copy.sort(sortByAge) : copy.sort(sortByName)
    this.setState({
      phones: copy
    })
  }
  searchEl = (value) => {
    this.setState({
      searchEl: value
    })
  }
  componentDidMount() {
    this.setState({
      phones: this.state.phones.sort(sortByName)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Filter 
                sortCards={this.sortCards}
                searchEl={this.searchEl}
                />
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
                    searchEl={this.state.searchEl}
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
