import React from 'react';

class Catalog extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {

  //   }
  // }
  render() {
    const { phones, onPhoneSelected, addInShopping } = this.props;
    console.log("CATALOG: ", this.props);
    return (
      <ul className="phones">
  
        { phones.map(phone => (
          <li className="thumbnail" key={phone.id} >
            <a
              href={'#' + phone.id}
              className="thumb"
              onClick={() => {
                onPhoneSelected(phone.name)
              }}
            >
              <img
                alt={phone.name}
                src={phone.imageUrl}
              />
            </a>
  
            <div className="phones__btn-buy-wrapper">
              <a className="btn btn-success" onClick={() => addInShopping(phone.name)}>
                Add
              </a>
            </div>
  
            <a
              href={'#' + phone.id}
              onClick={() => {
                onPhoneSelected(phone.name)
              }}
            >
              {phone.name}
            </a>
  
            <p>{phone.snippet}</p>
          </li>
        )) }
      </ul>
    );
  }
};

export default Catalog;
