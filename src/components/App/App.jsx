import React from 'react';
import { useState } from 'react';
// import { GameInfoContainer } from './GameInfo/GameInfoContainer';
// import { GameFieldContainer } from './GameField/GameFieldContainer';
import { GameInfoLayout } from './GameInfo/GameInfoLayout';
import { GameFieldLayout } from './GameField/GameFieldLayout';
// import styles from './App.module.css';

export function App() {
	const [field, setField] = useState(Array(9).fill(''));
	const [currentPlayer, setCurrentPlayer] = useState('X');
	// const [isGameDraw, setGameDraw] = useState(false);
	const [isGameEnd, setGameEnd] = useState(false);
	const WIN_COMBINATIONS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	// const checkWinner = () => {
	// 	if (currentPlayer === 'X') {
	// 		WIN_COMBINATIONS.forEach(combination => {
	// 			combination.every(el => )
	// 		})
	// 	}
	// }

	const handleClickButton = (index) => {
		const copyField = field.slice();
		if (currentPlayer === 'X' && field[index] === '') {
			copyField[index] = currentPlayer;
			setField(copyField);
			setCurrentPlayer('0')
		} else if (currentPlayer === '0' && field[index] === '') {
			copyField[index] = currentPlayer;
			setField(copyField);
			setCurrentPlayer('X')
		}
	};

	console.log('WIN_COMBINATIONS', WIN_COMBINATIONS);

	return (
		<>
			<GameInfoLayout
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				isGameEnd={isGameEnd}
				setGameEnd={setGameEnd}
			/>
			<GameFieldLayout field={field} handleClickButton={handleClickButton} />
		</>
	);
}
