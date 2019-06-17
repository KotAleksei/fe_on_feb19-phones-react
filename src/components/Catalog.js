import React from 'react';

const  Catalog = (props) => {
    const { phones, selectedPhone, addInShopping, searchEl } = props,
      phonesToShow =  phones.filter(phone => phone.name.toLowerCase().includes(searchEl.toLowerCase()));
      
    return (
      <ul className="phones">
  
        {  phonesToShow.map(phone => (
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
};

export default Catalog;
