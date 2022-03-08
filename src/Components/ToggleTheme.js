import React from 'react';
import PropTypes from 'prop-types';

export default function ToggleTheme(props) {
  return (
    <div id="themeToggle">
        <input type="checkbox" className="checkbox" id="checkbox" onChange={props.change}/>
        <label htmlFor="checkbox" className="label">
            <i className="bi bi-moon-fill"></i>
            <i className="bi bi-brightness-high-fill"></i>
            <div className='ball'></div>
        </label>
    </div>
  );
}

ToggleTheme.propTypes = {
    change: PropTypes.func.isRequired
};