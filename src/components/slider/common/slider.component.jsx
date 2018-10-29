import React from 'react';
import PropTypes from 'prop-types';
import ReactSlider from 'rc-slider';

import "./slider.scss";

const Slider = props => (
    <div className='promo-slider'>
        <ReactSlider
            min={props.min}
            max={props.max}
            defaultValue={props.value}
            onChange={props.onChange}
        />
    </div>
);

Slider.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired,
};

Slider.defaultProps = {
    min: 0,
    max: 100,
    value: 0,
};

export default Slider;
