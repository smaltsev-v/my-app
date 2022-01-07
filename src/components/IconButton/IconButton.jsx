import React from "react";
import PropTypes from "prop-types";
import './IconButton.scss'

const IconButton = ({ children, onClick, ...allyProps }) => (
    <button type="button" className="IconButton" onClick={onClick} {...allyProps}>
        {children}
    </button>
);

IconButton.defualtProps = {
    onClick: () => null,
    children: null,
};

IconButton.propTypes = {
    onclick: PropTypes.func,
    children: PropTypes.node,
    'aria-label': PropTypes.string.isRequired,
};

export default IconButton;