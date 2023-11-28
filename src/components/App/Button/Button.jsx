import React from "react";
import PropTypes from 'prop-types';
import styles from './Button.module.css';


export function Button({button, handleClickButton, index}) {
    return (
        <div className={styles.Button} onClick={()=> {handleClickButton(index)}}>
            {button}
        </div>
    )
}

Button.propTypes = {
    button: PropTypes.string,
    handleClickButton: PropTypes.func,
    index: PropTypes.number
}