export function setUpgrade(cardIndex, upgradeIndex, upgradeId) {
    return {
        type: 'SET_UPGRADE',
        payload: {cardIndex, upgradeIndex, upgradeId}
    };
}