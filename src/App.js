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
      basketItems: [],
    };
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Filter />
              <ShoppingCart />
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
                />
              ) : (
                <Catalog
                  phones={this.state.phones}
                  onPhoneSelected={(phoneId) => {
                    this.setState({
                      selectedPhone: getById(phoneId),
                    });
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
