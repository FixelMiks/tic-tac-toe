import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import styles from './GameField.module.css';

export function GameField({field, handleClickButton}) {
    return (
        <div className={styles.Field}>
            {field.map((button, index) => (
                    <Button
                        key={index}
                        button={button}
                        handleClickButton={handleClickButton}
                        index={index}
                    />
                )
            )}
        </div>
    );
}

GameField.propTypes = {
    field: PropTypes.array.isRequired,
    handleClickButton: PropTypes.func
}
