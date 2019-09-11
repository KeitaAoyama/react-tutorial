import React from 'react';

/**
 * Fuction component which returns a square of the board
 * Controlled component of the Board component
 * @param {*} props 
 */
export default function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}