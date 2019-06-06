import React from 'react';

class ShoppingCart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    }
  }

  render(){
    const { removeItem } = this.props;
    return (
      <section>
        <p>Shopping Cart</p>
        <ul>
          {
            this.props.cards && this.props.cards.map((el,idx) => (
              <li key={idx}>
                {el}
                <button onClick={() => removeItem(idx)}>Remove</button>
              </li>
            ))
          }
        </ul>
      </section>
    );
  }
};

export default ShoppingCart;
