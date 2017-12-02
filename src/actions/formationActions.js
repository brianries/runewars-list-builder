export function setFormation(cardIndex, formationId) {
    return {
        type: 'SET_FORMATION',
        payload: {cardIndex, formationId}
    };
}