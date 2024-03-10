function getState() {
    return JSON.parse(localStorage.getItem('state'));
}

function setState(state) {
    localStorage.setItem('state', JSON.stringify(state));
}

function clearState() {
    localStorage.removeItem('state');
}

function resetStatePartial() {
    const state = getState();
    state.puntaje = 0;
    state.tiempo = 0;
    setState(state);
}