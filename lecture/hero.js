function hero(action){
    const ACTIONS = {
        walk: 'I am walking',
        run: 'I am running',
        fight: 'I will find you, I will kill you!'
    }
    return ACTIONS[action];
}

module.exports = hero;