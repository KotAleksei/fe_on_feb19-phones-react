import React from 'react';

class Filter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchEl: ''
    }
  }
  handleSubmit = el => {
    el.preventDefault();
    this.props.searchEl(this.state.searchEl);
  }
  handleChange = el => {
    this.setState({
      searchEl: el.target.value
    })
  }
  render() {
    return (
      <section>
          Search:
          <form onSubmit={el => this.handleSubmit(el)}>
            <input onChange={el => this.handleChange(el)} />
            <button style={{marginBottom: '20px'}}>Search</button>
          </form>
        <p>
          Sort by:
          <select onChange={el => this.props.sortCards(el.target.value)} >
            <option value="name" >Alphabetical</option>
            <option value="age">Newest</option>
          </select>
        </p>
      </section>
    );
  }
};

export default Filter;
