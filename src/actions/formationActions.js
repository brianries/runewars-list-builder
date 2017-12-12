export function setFormation(cardIndex, unitId, formationId) {
    return {
        type: 'SET_FORMATION',
        payload: {cardIndex, unitId, formationId}
    };
}