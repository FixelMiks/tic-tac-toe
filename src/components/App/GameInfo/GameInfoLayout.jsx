import React from 'react';
import PropTypes from 'prop-types';

export function GameInfoLayout({showInfo}) {
    return <div>{showInfo()}</div>
}

GameInfoLayout.propTypes = {
    showInfo: PropTypes.func
}
