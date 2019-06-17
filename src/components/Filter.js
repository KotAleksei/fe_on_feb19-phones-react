import React from 'react';

const Filter = (props) => {
  return (
    <section>
      <p>
        Search:
        <input onChange={el => props.searchEl(el.target.value)}/>
      </p>

      <p>
        Sort by:
        <select onChange={el => props.sortCards(el.target.value)} >
          <option value="name" >Alphabetical</option>
          <option value="age">Newest</option>
        </select>
      </p>
    </section>
  );
};

export default Filter;
