export function setUnit(unitIndex, name) {
    return {
        type: 'SET_UNIT',
        payload: {unitIndex, name}
    };
}

export function removeUnit(unitIndex) {
    return {
        type: 'REMOVE_UNIT',
        payload: unitIndex
    }
}

export function copyUnit(unitIndex) {
    return {
        type: 'COPY_UNIT',
        payload: unitIndex
    }
}