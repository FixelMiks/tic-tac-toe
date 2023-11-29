import React from 'react';
import PropTypes from 'prop-types';
import styles from './ResetButton.module.css'

export function ResetButton({
    setField,
    setCurrentPlayer,
    setGameEnd,
    setGameDraw,
    setCrossCombo,
    setCircleCombo
}) {
    const handleClickResetButton = () => {
        setField(Array(9).fill(''));
        setCurrentPlayer('X');
        setGameEnd(false);
        setGameDraw(false);
        setCrossCombo([]);
        setCircleCombo([]);
    }

    return <button className={styles.reset_button} onClick={handleClickResetButton}>Начать заново</button>
}

ResetButton.propTypes = {
    setField: PropTypes.func,
    setCurrentPlayer: PropTypes.func,
    setGameEnd: PropTypes.func,
    setGameDraw: PropTypes.func,
    setCrossCombo: PropTypes.func,
    setCircleCombo: PropTypes.func
}