export function mouseOverUnit(unitId) {
    return {
        type: 'MOUSE_OVER_UNIT',
        payload: {unitId}
    };
}

export function mouseOverUpgrade(upgradeId) {
    return {
        type: 'MOUSE_OVER_UPGRADE',
        payload: {upgradeId}
    }
}

