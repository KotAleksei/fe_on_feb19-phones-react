import React from 'react';

class ShoppingCart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    }
  }

  render(){
    const { removeItem, cards } = this.props;
        
    return (
      <section>
        <p className='tittle_shoping_card'>Shopping Cart: {Object.keys(cards).length} Items</p>
        <ul className='shopingCardList'>
          {
             Object.keys(cards).map((el,idx) => (
              <li key={idx} className='shopingCardItem'>
                <span className='shopinCardName'>{el} ({cards[el]})</span>
                <button onClick={() => removeItem(el)} className='removeButn'>Remove</button>
              </li>
            ))
          }
        </ul>
      </section>
    );
  }
};

export default ShoppingCart;
