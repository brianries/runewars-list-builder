export function setUnit(cardIndex, unitId) {
    return {
        type: 'SET_UNIT',
        payload: {cardIndex, unitId}
    };
}

export function removeUnit(cardIndex) {
    return {
        type: 'REMOVE_UNIT',
        payload: cardIndex
    }
}

export function copyUnit(cardIndex) {
    return {
        type: 'COPY_UNIT',
        payload: cardIndex
    }
}