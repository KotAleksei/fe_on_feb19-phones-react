import React from 'react';

const Filter = (props) => {
  return (
    <section>
      <p>
        Search:
        <input />
      </p>

      <p>
        Sort by:
        <select onChange={(el) => props.sort(el.target.value)} >
          <option value="name" >Alphabetical</option>
          <option value="age">Newest</option>
        </select>
      </p>
    </section>
  );
};

export default Filter;
