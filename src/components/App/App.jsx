import React from 'react';
import { useState } from 'react';
import { GameInfoContainer } from './GameInfo/GameInfoContainer';
import { GameField } from './GameField/GameField';
import { ResetButton } from './ResetButton/ResetButton';
import styles from './App.module.css';

export function App() {
	const [field, setField] = useState(Array(9).fill(''));
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnd, setGameEnd] = useState(false);
	const [isGameDraw, setGameDraw] = useState(false);
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
	const [crossCombo, setCrossCombo] = useState([]);
	const [circleCombo, setCircleCombo] = useState([]);

	const checkWinner = () => {
		WIN_COMBINATIONS.forEach(combination => {
			let winCross = combination.every(combo => crossCombo.includes(combo));
			let winCircle = combination.every(combo => circleCombo.includes(combo));

			if (winCross) {
				setCurrentPlayer('X');
				setGameEnd(true);
	
			} else if (winCircle) {
				setCurrentPlayer('0')
				setGameEnd(true);
			}
		});

		const gameDraw = field.some(val => val === '');

		if (!gameDraw) {
			setGameDraw(true);
			setGameEnd(true);
		}
	}
	
	if (!isGameEnd) {
		checkWinner();
	}

	const handleClickButton = (index) => {
		const copyField = field.slice();
		
		if (currentPlayer === 'X' && field[index] === '' && !isGameEnd) {
			copyField[index] = currentPlayer;
			setField(copyField);
			setCurrentPlayer('0');
			setCrossCombo([...crossCombo, index]);

		} else if (currentPlayer === '0' && field[index] === '' && !isGameEnd) {
			copyField[index] = currentPlayer;
			setField(copyField);
			setCurrentPlayer('X');
			setCircleCombo([...circleCombo, index]);
		}
	};
	
	return (
		<div className={styles.app}>
			<GameInfoContainer
				currentPlayer={currentPlayer}
				isGameEnd={isGameEnd}
				isGameDraw={isGameDraw}
			/>
			<GameField field={field} handleClickButton={handleClickButton} />
			<ResetButton
				setField={setField}
				setCurrentPlayer={setCurrentPlayer}
				setGameEnd={setGameEnd}
				setGameDraw={setGameDraw}
				setCrossCombo={setCrossCombo}
				setCircleCombo={setCircleCombo}
			/>
		</div>
	);
}
