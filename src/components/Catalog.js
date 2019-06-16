import React from 'react';

class Catalog extends React.Component {

  render() {
    const { phones, selectedPhone, addInShopping } = this.props;
    // console.log("CATALOG: ", phones);
    return (
      <ul className="phones">
  
        {  phones.map(phone => (
          <li className="thumbnail" key={phone.id} >
            <a
              href={'#' + phone.id}
              className="thumb"
              onClick={() => {
                selectedPhone(phone.id)
              }}
            >
              <img
                alt={phone.name}
                src={phone.imageUrl}
              />
            </a>
  
            <div className="phones__btn-buy-wrapper">
              <a className="btn btn-success" 
                onClick={() => {
                  addInShopping(phone.name);
                }}>
                Add
              </a>
            </div>
  
            <a
              href={`#${phone.id}`}
              onClick={() => {
                selectedPhone(phone.id);
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
