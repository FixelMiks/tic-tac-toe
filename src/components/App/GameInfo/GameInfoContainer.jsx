import React from 'react';
import PropTypes from 'prop-types';
import { GameInfoLayout } from './GameInfoLayout';

export function GameInfoContainer({currentPlayer, isGameEnd, isGameDraw}) {
    const showInfo = () => {

        if (isGameDraw === false && isGameEnd === false) {
            return <h2>Сейчас ходит: {currentPlayer}</h2>;

        } else if (isGameDraw === false && isGameEnd === true) {
            return <h2>Победил: {currentPlayer}!</h2>;

        } else if (isGameDraw === true) {
            return <h2>Ничья!</h2>;
        }
    };

    return <GameInfoLayout showInfo={showInfo} />
}

GameInfoContainer.propTypes = {
    currentPlayer: PropTypes.string,
    isGameEnd: PropTypes.bool,
    isGameDraw: PropTypes.bool
}
